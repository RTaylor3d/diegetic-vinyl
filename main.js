import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
import {Howl, Howler} from 'howler';
import { parseBlob } from 'music-metadata';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import Sortable from 'sortablejs';
import { gsap } from "gsap";

// Set up variables
var isTransitioning = false;
var meshLoaded = false;
var audioLoaded = false;
var currentRecordLoaded = null;
var postProcessEnabled = true;
const clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();
var rpm = 0;
var recordSpeed = 45;
var rpmTarget = 0;
var rpmMulti = 0;
var angularVelocity = (rpm * 2 * Math.PI) / 60;
var platter = null;
var record = null;
var editingRecord = null;
var recordInitialY = 0;
var recordLabel = null;
var sleeve = null;
var sleeveHit = null;
var toneArm = null;
var toneArmNeedle = null;
var speedDial = null;
var groundPlane = null;
var yawBone = null;
var yawTarget = 0;
var dialTarget = 0;
var pitchBone = null;
var pitchClone = null;
var pitchTarget = new THREE.Quaternion(0, 0, 0, 0);
const mouse = new THREE.Vector2();
var recordLoading = false;
var needleLifted = true;
var recordEnded = false;
var recordLoaded = false;
var isDragging = false;
var mouseActive = false;
var mouseActiveTimeout;
var objectsMoving = false;
var dragStarted = false;
var isSeeking = false;
var sceneChanged = false;
var animateLibrary = false;
var needleOverRecord = false;
var seekTimeout = null;
var dragTarget = null;
var envNum = 0;
var env0X = 0.45;
var env1X = 0.438;
var env0Y = 0.0541;
var env1Y = -0.153;
var env0Z = -0.13;
var env1Z = -0.195;
var dragStartY = 0;
var totalDragDistance = 0;
var dragThreshold = 30;
var posInRecord = 0;
var recordDuration = 0;
var armInitialY = 0;
var armInitialX = 0;
var armSpeed = 0;
var armStart = -0.540;
var armEnd = -0.834;
var normalizedRotation;
var dialPos1 = Math.PI / 4.8;  // 33 RPM (2 o'clock)
var dialPos2 = 0;              // STOP (3 o'clock, default)
var dialPos3 = -Math.PI / 4.8; // 45 RPM (3 o'clock)
var dialPos4 = -Math.PI / 2;   // 78 RPM (4 o'clock)

const sortable = new Sortable(document.getElementById('editableTrackList'), {
    animation: 200,
    handle: '.track-number',
    ghostClass: 'sortable-ghost',
    onEnd: () => {
        updateTrackOrderFromDOM();
        renderTrackListUI();
    }
});

const recordBuilder = {
	tracks: [],
	trackNames: [],
	duration: 0,
	startTimes: [],
	art: null
};

const trackPickerOpts = {
    types: [
      {
        description: "Audio",
        accept: {
          "audio/*": [ ".mp3", ".mpeg", ".opus", ".ogg", ".oga", 
                        ".wav", ".aac", ".caf", ".m4a", ".m4b", 
                        ".mp4", ".weba", ".webm", ".dolby", ".flac" ],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: true,
};

var trackStartTimes = []; // Cumulative start times of tracks
var trackQueue = [];  // Holds all Howl tracks
var albumCollection = [];
var currentTrackIndex = 0;
var totalDuration = 0; // Sum of all tracks' durations
var recordOffset = 0.00557;

class NewRecord {
    constructor(mesh, artist, name, tracks, trackNames, duration, startTimes, art, id, initialZ, targetRotation, targetPosition){
        this.mesh = mesh;
        this.artist = artist;
        this.name = name;
        this.tracks = tracks;
        this.trackNames = trackNames;
        this.duration = duration;
        this.startTimes = startTimes;
        this.art = art;
        this.id = id;
        this.initialZ = initialZ;
        this.targetRotation = new THREE.Quaternion(targetRotation);
        this.targetPosition = new THREE.Vector3(targetPosition);
    }
}

var ambCrackle = new Howl({
    src: ['./vinyl-crackle-33rpm-6065.mp3'],
    rate: 1, 
    volume: 0.5,
    loop: true
});

var crackleEnd1 = new Howl({
    src: ['./record_end_01.mp3'],
    rate: 1, 
    volume: 0.3,
    loop: true
});

var crackleEnd2 = new Howl({
    src: ['./record_end_02.mp3'],
    rate: 1, 
    volume: 0.3,
    loop: true
});

var crackleEnd3 = new Howl({
    src: ['./record_end_03.mp3'],
    rate: 1, 
    volume: 0.3,
    loop: true
});

var endCrackle = null;

// Set up Renderer
const renderer = new THREE.WebGLRenderer({antialias:false});
renderer.outputColorspace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x212121);
renderer.setPixelRatio(window.devicePixelRatio * 2);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

// Set up Scene
const scene = new THREE.Scene();
const environmentTexture = new THREE.CubeTextureLoader().setPath('./').load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
scene.environment = environmentTexture;
scene.environmentIntensity = 0.7;
scene.environmentRotation.y = 3.4;

// Add camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.01, 20);
camera.position.set(0, 1.25, 0);

const intMan = new InteractionManager(renderer, camera, renderer.domElement);

const loader = new GLTFLoader().setPath('./');
loader.load('AT-LP5_v02.glb', (gltf) => {
    gltf.scene.traverse( function( child ) { 
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.frustumCulled = false;
        }
    });    
    const mesh = gltf.scene;
    scene.add(mesh);
    const body = mesh.getObjectByName("body");
    platter = mesh.getObjectByName("platter");
    record = mesh.getObjectByName("vinyl");
    recordInitialY = record.position.y;
    record.visible = false;
    recordLabel = mesh.getObjectByName("vinylLabel");
    speedDial = mesh.getObjectByName("dial");
    toneArm = mesh.getObjectByName("toneArm");
    toneArmNeedle = mesh.getObjectByName("toneArmNeedle");
    toneArmNeedle.position.set(0.001, 0.02, 0.245);
    yawBone = mesh.getObjectByName("boneYaw");
    yawBone.add(toneArmNeedle);
    armInitialY = yawBone.rotation.y;
    pitchBone = mesh.getObjectByName("bonePitch");
    armInitialX = pitchBone.rotation.x;
    pitchClone = pitchBone.clone();
    pitchTarget.copy(pitchBone.quaternion);
    intMan.add(body);
    intMan.add(toneArm); 
    intMan.add(speedDial);   
    intMan.add(record);

    body.addEventListener('click', (event) =>{
        event.stopPropagation();
    })

    toneArm.addEventListener('mousedown', (event) => {
        if (isTransitioning) return;
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        yawTarget = yawBone.rotation.y;
        isDragging = true;
        dragTarget = toneArm;
        controls.enableRotate = false;
    
        // Create a quaternion representing a local rotation around the x-axis
        let targetQuat = new THREE.Quaternion();
        let localAxis = new THREE.Vector3(0, 0, 1);
        localAxis.applyQuaternion(pitchBone.quaternion);
        targetQuat.setFromAxisAngle(localAxis, 0.05);
        pitchTarget.copy(pitchBone.quaternion).multiply(targetQuat);
        if(trackQueue.length > 0){
            trackQueue[currentTrackIndex].stop();
        }
        
        event.stopPropagation();
        // Attach global mouseup listener to document
        document.addEventListener('mouseup', onMouseUp);
    });


    toneArm.addEventListener('mouseover', () => {
        document.body.style.cursor = 'pointer';
    });
    toneArm.addEventListener('mouseout', () => {
        document.body.style.cursor = 'default';
    });

    speedDial.addEventListener('mousedown', (event) => {
        if (isTransitioning) return;
        isDragging = true;
        dragTarget = speedDial;
        controls.enableRotate = false;
    });

    speedDial.addEventListener('mouseup', () => {
        isDragging = false;
        dragStarted = false;
        dragTarget = null;
        controls.enableRotate = true;
    });

    speedDial.addEventListener('mouseover', () => {
        document.body.style.cursor = 'pointer';
    });
    speedDial.addEventListener('mouseout', () => {
        document.body.style.cursor = 'default';
    });

    meshLoaded = true;

});

loader.load('sleeve_01.glb', (gltf) => {
    gltf.scene.traverse( function( child ) { 
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.frustumCulled = false;
        }
    });  
    
    const mesh = gltf.scene;
    sleeve = mesh.getObjectByName("sleeve");
    sleeveHit = mesh.getObjectByName("sleeveHit");
    sleeveHit.castShadow = false;
    sleeveHit.receiveShadow = false;
});

loader.load('groundPlane_01.glb', (gltf) => {
    gltf.scene.traverse( function( child ) { 
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.frustumCulled = false;
        }
    });  
    
    groundPlane = gltf.scene;
    const ground = groundPlane.getObjectByName("ground");
    ground.material.dithering = true;
    scene.add(groundPlane);
});

// Add lights
const light = new THREE.DirectionalLight(0xC67385, 4.25)
light.position.set(-1, 4, -1);
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 7;
light.shadow.camera.left = -2;
light.shadow.camera.right = 2;
light.shadow.camera.top = 2;
light.shadow.camera.bottom = -2;
light.shadow.bias = -0.0005;
light.shadow.radius = 2;
light.shadow.blurSamples = 8;
scene.add(light);

const light2 = new THREE.DirectionalLight(0xFFFFF, 2.25)
light2.position.set(1, 4, 1);
light2.castShadow = true;
light2.shadow.mapSize.width = 1024;
light2.shadow.mapSize.height = 1024;
light2.shadow.camera.near = 0.1;
light2.shadow.camera.far = 7;
light2.shadow.camera.left = -2;
light2.shadow.camera.right = 2;
light2.shadow.camera.top = 2;
light2.shadow.camera.bottom = -2;
light2.shadow.bias = -0.0005;
light2.shadow.radius = 2;
light2.shadow.blurSamples = 8;
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xFFFFFF, 0.04)
light3.position.set(2, 2, -2);
light3.castShadow = false;
scene.add(light3);

//const shadowCameraHelper = new THREE.CameraHelper( light.shadow.camera );
//scene.add( shadowCameraHelper );

// Controls for the camera orbit
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.autoRotate = false;
controls.enableRotate = true;
controls.maxDistance = 1.1;
controls.minDistance = 0.3;
controls.maxPolarAngle = 1.2;
controls.minAzimuthAngle = -Math.PI / 4;
controls.maxAzimuthAngle = Math.PI / 4;
controls.target = new THREE.Vector3(0, 0.1, 0);
controls.update();

document.getElementById("buildRecordBtn").addEventListener("click", () => {
    document.getElementById("recordBuildPanel").classList.remove("hidden");
    setBuilderButtonStates(false); // Disable initially
});

document.getElementById("loadTracksToBuilderBtn").addEventListener("click", async () => {
    const loadBtn = document.getElementById("loadTracksToBuilderBtn");
	loadBtn.disabled = true; // Disable immediately to prevent double-clicks
    const fileHandles = await window.showOpenFilePicker(trackPickerOpts).catch(() => {
		loadBtn.disabled = false; // User canceled dialog — re-enable
		return [];
	});
	if (!fileHandles || fileHandles.length === 0) return;
	const files = await Promise.all(fileHandles.map(handle => handle.getFile()));
	const builderTrackList = document.getElementById("editableTrackList");
	builderTrackList.innerHTML = ""; // Clear previous list
	document.getElementById("noTracksMsg").style.display = "none";

    /*
	recordBuilder.tracks = [];
	recordBuilder.trackNames = [];
	recordBuilder.startTimes = [];
	recordBuilder.duration = 0;
    */

    let tempDuration = recordBuilder.duration || 0;

	let albumArtSet = false;
    //let tempDuration = 0;
	const loadPromises = files.map(async (file) => {
		const fileURL = URL.createObjectURL(file);
		const metadata = await parseBlob(file);
		const title = metadata.common.title || file.name;
		const trackNumber = metadata.common.track?.no ?? null;

        if (recordBuilder.trackNames.length === 0) {
            if (metadata.common.album) {
                document.getElementById("builderTitle").value = metadata.common.album;
            }
            if (metadata.common.artist || metadata.common.albumartist) {
                document.getElementById("builderArtist").value = metadata.common.artist || metadata.common.albumartist;
            }
        }

        if (!albumArtSet && metadata.common.picture?.length > 0) {
            const image = metadata.common.picture[0];
            const blobUrl = URL.createObjectURL(new Blob([image.data], { type: image.format }));
    
            document.getElementById("builderAlbumArt").src = blobUrl;
            recordBuilder.art = image;
            albumArtSet = true;
        }

		// Create howl inside promise scope
		return new Promise((resolve) => {
			const howl = new Howl({
				src: [fileURL],
				format: [file.type.split('/')[1]],
				html5: false, // Ensures streaming behavior, especially for large files
				onload: function () {
					resolve({
						fileName: file.name,
						howl,
						title,
						trackNumber,
						duration: howl.duration()
					});
				},
                onend: function () {
                    if (!needleLifted && rpm > 1 && !isSeeking) {
                        if (currentTrackIndex < trackQueue.length - 1) {
                            playNextTrack();
                        } else {
                            // We're at the last track — mark it as ended
                            recordEnded = true;
                        }
                    }
                }
			});
		});
	});

	const loadedTracks = await Promise.all(loadPromises);

	// Sort tracks by metadata track number (if present), then filename
	loadedTracks.sort((a, b) => {
		if (a.trackNumber && b.trackNumber) return a.trackNumber - b.trackNumber;
		return a.fileName.localeCompare(b.fileName, undefined, { numeric: true });
	});

	// Populate builder UI and track state
	loadedTracks.forEach((trackData, index) => {
		const { howl, title, duration } = trackData;

		recordBuilder.tracks.push(howl);
		recordBuilder.trackNames.push(title);
		recordBuilder.startTimes.push(tempDuration);
		tempDuration += duration;

		const li = document.createElement("li");
		li.classList.add("builder-track-row");
        li.dataset.index = index;
		li.innerHTML = `
			<span class="track-number">${index + 1}.</span>
			<input type="text" class="track-edit" value="${title}">
		`;
		builderTrackList.appendChild(li);
	});

	recordBuilder.duration = tempDuration;
    recalculateStartTimes();
    renderTrackListUI();

    setBuilderButtonStates(true); // Enable once tracks are loaded
});

document.getElementById("fetchMetadataBtn").addEventListener("click", async () => {
	if (!recordBuilder.tracks.length) return;

	// Try to extract image data from the first track
	const firstTrack = recordBuilder.tracks[0]._src; // Howler stores the source internally as `_src`

	try {
		const response = await fetch(firstTrack);
		const blob = await response.blob();
		const metadata = await parseBlob(blob);

		if (metadata.common.picture && metadata.common.picture.length > 0) {
			const image = metadata.common.picture[0];
			const blobUrl = URL.createObjectURL(new Blob([image.data], { type: image.format }));

			document.getElementById("builderAlbumArt").src = blobUrl;

			// Save reference if needed later
			recordBuilder.art = image;
		} else {
			alert("No image found in metadata.");
		}
	} catch (err) {
		console.error("Error reading metadata:", err);
		alert("Could not extract metadata from the track.");
	}
});

document.getElementById("uploadArtBtn").addEventListener("click", async () => {
	const [fileHandle] = await window.showOpenFilePicker({
		types: [
			{
				description: 'Images',
				accept: {
					'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif']
				}
			}
		],
		excludeAcceptAllOption: true,
		multiple: false
	});

	if (!fileHandle) return;

	const file = await fileHandle.getFile();
	const blobUrl = URL.createObjectURL(file);

	const builderAlbumArt = document.getElementById("builderAlbumArt");
	builderAlbumArt.src = blobUrl;

	// Read as ArrayBuffer to simulate a picture-like object
	const arrayBuffer = await file.arrayBuffer();
	recordBuilder.art = {
		data: new Uint8Array(arrayBuffer),
		format: file.type
	};
});

document.getElementById("addRecordBtn").addEventListener("click", () => {
    if (recordBuilder.tracks.length === 0) return;

    if (editingRecord) {
        // Update existing record
        editingRecord.name = document.getElementById("builderTitle").value;
        editingRecord.artist = document.getElementById("builderArtist").value;
        editingRecord.tracks = [...recordBuilder.tracks];
        editingRecord.trackNames = [...recordBuilder.trackNames];
        editingRecord.startTimes = [...recordBuilder.startTimes];
        editingRecord.duration = recordBuilder.duration;
        editingRecord.art = recordBuilder.art;

        applyAlbumArtToRecord(recordBuilder.art, editingRecord.mesh, editingRecord, false);

        editingRecord = null;
        document.getElementById("addRecordBtn").textContent = "Add to Library";

    } else {

        const newRecord = new NewRecord();
        newRecord.id = Date.now();
    
        const newSleeve = sleeve.clone(true);
        const newSleeveHit = sleeveHit.clone(true);
        scene.add(newSleeve);
        scene.add(newSleeveHit);
        intMan.add(newSleeveHit);
    
        newRecord.mesh = newSleeve;
        newRecord.artist = document.getElementById("builderArtist").value || "Unknown Artist";
        newRecord.name = document.getElementById("builderTitle").value || "Untitled Record";
        newRecord.tracks = recordBuilder.tracks;
        newRecord.trackNames = recordBuilder.trackNames;
        newRecord.startTimes = recordBuilder.startTimes;
        newRecord.duration = recordBuilder.duration;
        newRecord.art = recordBuilder.art;
    
        applyAlbumArtToRecord(newRecord.art, newRecord.mesh, newRecord, false);
    
        if (envNum == 0) {
            newSleeve.position.set(env0X + getRandomArbitrary(-0.0015, 0.0015), env0Y, env0Z + (recordOffset * (albumCollection.length + 1)));
            newSleeveHit.position.set(env0X + getRandomArbitrary(-0.0015, 0.0015), env0Y, env0Z + (recordOffset * (albumCollection.length + 1)));
        } else {
            newSleeve.position.set(env1X, env1Y, env1Z + (recordOffset * (albumCollection.length + 1)));
            newSleeveHit.position.set(env1X, env1Y, env1Z + (recordOffset * (albumCollection.length + 1)));
        }
        newSleeve.rotation.x = 1.294;
        newSleeveHit.rotation.x = 1.294;
    
        newRecord.initialZ = newSleeve.position.z;
        newRecord.targetPosition = newSleeve.position.clone();
        newRecord.targetRotation = newSleeve.rotation.clone();
    
        newSleeveHit.addEventListener("click", (event) => {
            showRecordInfo(newRecord);
            document.getElementById("recordInfoPanel").classList.add("visible");
            event.stopPropagation();
        });
    
        newSleeveHit.addEventListener("mouseover", (event) => {
            document.body.style.cursor = 'pointer';
            nudgeSleeves(albumCollection.indexOf(newRecord));
            event.stopPropagation();
        });
    
        newSleeveHit.addEventListener("mouseout", (event) => {
            document.body.style.cursor = 'default';
            revertSleeves();
            event.stopPropagation();
        });
    
        recordDuration = newRecord.duration;
        armSpeed = (armEnd - (armStart)) / recordDuration;
        var getEndCrackle = Math.random();
        if(getEndCrackle < 0.33){
            endCrackle = crackleEnd1;
        }
        if(getEndCrackle > 0.33 && getEndCrackle < 0.66){
            endCrackle = crackleEnd2;
        }
        if(getEndCrackle > 0.66){
            endCrackle = crackleEnd3;
        }
    
        albumCollection.push(newRecord);
        document.getElementById("recordBuildPanel").classList.add("hidden");
    
        setTimeout(function(){
            // Reset recordBuilder object
            recordBuilder.tracks = [];
            recordBuilder.trackNames = [];
            recordBuilder.duration = 0;
            recordBuilder.startTimes = [];
            recordBuilder.art = null;
        
            // Clear title/artist fields
            document.getElementById("builderTitle").value = "";
            document.getElementById("builderArtist").value = "";
        
            // Reset album art to default
            document.getElementById("builderAlbumArt").src = "defaultArt.png";
        
            // Clear track list UI
            const trackList = document.getElementById("editableTrackList");
            trackList.innerHTML = "";
            document.getElementById("noTracksMsg").style.display = "block";
            }, 300);
    }

    document.getElementById("recordBuildPanel").classList.add("hidden");
    setTimeout(resetBuilder, 300);

});

document.getElementById("cancelBuildBtn").addEventListener("click", () => {
    // Hide panel
    document.getElementById("recordBuildPanel").classList.add("hidden");

    setTimeout(function(){
    // Reset recordBuilder object
    recordBuilder.tracks = [];
    recordBuilder.trackNames = [];
    recordBuilder.duration = 0;
    recordBuilder.startTimes = [];
    recordBuilder.art = null;

    // Clear title/artist fields
    document.getElementById("builderTitle").value = "";
    document.getElementById("builderArtist").value = "";

    // Reset album art to default
    document.getElementById("builderAlbumArt").src = "defaultArt.png";

    // Clear track list UI
    const trackList = document.getElementById("editableTrackList");
    trackList.innerHTML = "";
    document.getElementById("noTracksMsg").style.display = "block";
    }, 300);

    setBuilderButtonStates(false); // Re-disable buttons

});

document.getElementById("changeSceneBtn").addEventListener('click', () => {
    if(!sceneChanged){
        loadEnv01();
        sceneChanged = true;
    }
});


document.addEventListener('mousemove', (event) => {
    if(isDragging){        
        if (dragTarget == toneArm) {
            const deltaX = event.movementX * 0.001;
            yawTarget += deltaX;
            const minYaw = -Math.PI / 3.5;
            const maxYaw = Math.PI / 20;
            yawTarget = THREE.MathUtils.clamp(yawTarget, minYaw, maxYaw);
        }
        
        if (isDragging && dragTarget == speedDial) {
            if (!dragStarted) {
                dragStartY = event.clientY;
                dragStarted = true;
            }
        
            if (dialTarget == dialPos1) {
                if (totalDragDistance > dragThreshold) {
                    dialTarget = dialPos2;
                    totalDragDistance = 0;
                    dragStartY = event.clientY;
                }                
                rpmTarget = 33;
            }
    
            if (dialTarget == dialPos2) {
                if (totalDragDistance < -dragThreshold) {
                    dialTarget = dialPos1;
                    totalDragDistance = 0;
                    dragStartY = event.clientY;
                }
                if (totalDragDistance > dragThreshold) {
                    dialTarget = dialPos3;
                    totalDragDistance = 0;
                    dragStartY = event.clientY;
                }
                rpmTarget = 0;
            }
    
            if (dialTarget == dialPos3) {
                if (totalDragDistance < -dragThreshold) {
                    dialTarget = dialPos2;
                    totalDragDistance = 0;
                    dragStartY = event.clientY;
                }
                if (totalDragDistance > dragThreshold) {
                    dialTarget = dialPos4;
                    totalDragDistance = 0;
                    dragStartY = event.clientY;
                }
                rpmTarget = 45;
            }
    
            if (dialTarget == dialPos4) {
                if (totalDragDistance < -dragThreshold) {
                    dialTarget = dialPos3;
                    totalDragDistance = 0;
                    dragStartY = event.clientY;
                }
                rpmTarget = 78;
            }
    
            totalDragDistance = event.clientY - dragStartY;
        }
    }
});

// Post Processing
const renderScene = new RenderPass( scene, camera );
const bokehPass = new BokehPass( scene, camera, {
focus: 1,
aperture: 0.01,
maxblur: 0.005
});

const outputPass = new OutputPass();
const composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bokehPass );
composer.addPass( outputPass );

const powerSaver = fpsLimiter(5, (now) => {
    if(postProcessEnabled){
        composer.render();
    } else {
        renderer.render(scene, camera);
    }
})

const updateFocus = fpsLimiter(12, (now) => {
    if(!mouseActive) return;
    const worldFocusPos = new THREE.Vector3();
    toneArmNeedle.getWorldPosition(worldFocusPos);
    const cameraToFocus = camera.position.distanceTo(worldFocusPos);
    bokehPass.materialBokeh.uniforms.focus.value = cameraToFocus;
});

const updateRpm = fpsLimiter(20, (now) => {
    rpm = THREE.MathUtils.lerp(rpm, rpmTarget, 0.25);
    rpmMulti = rpm / recordSpeed;
    if(rpmMulti < 0.01){
        rpmMulti = 0;
    }
    if(audioLoaded){
        trackQueue[currentTrackIndex].rate(rpmMulti);
        if(ambCrackle.playing()){
            ambCrackle.rate(rpmMulti);
        }
        if(endCrackle.playing()){
            endCrackle.rate(rpmMulti);
        }
    }  
    angularVelocity = (rpm * 2 * Math.PI) / 60;
    posInRecord = norm(yawBone.rotation.y, armStart, armEnd); 
});

const updateNonDeltaTone = fpsLimiter(15, (now) => {
    if(rpm < 0.1) return;
    if(pitchBone.rotation.x > -1.58){
        needleLifted = false;
        
    } else {
        needleLifted = true;
        recordEnded = false;
    }
    if(trackQueue.length > 0 && yawBone.rotation.y < armStart + 0.02 && !needleLifted && rpm > 1 && !recordEnded && rpmMulti > 0.01){
        if(!ambCrackle.playing()){
            ambCrackle.seek(Math.random() * ambCrackle.duration());
            ambCrackle.play();
        }
    } else {
        ambCrackle.pause();
    }

    if(audioLoaded && yawBone.rotation.y < armEnd + 0.0005 && !needleLifted && !recordEnded && rpmMulti > 0.01){
        if(!endCrackle.playing()){
            recordEnded = true;
            endCrackle.play();
            ambCrackle.pause();
        }
    }
    if(audioLoaded && needleLifted){
        if(endCrackle.playing()){
            endCrackle.pause();
        }

        if (trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
            trackQueue[currentTrackIndex].stop();
        }
    }
    if(yawBone.rotation.y < armEnd){
        posInRecord = 1;
    }
    if(yawBone.rotation.y > armStart){
        posInRecord = 0;
    }
});

const updateIntMan = fpsLimiter(20, (now) => {
    intMan.update();
});

//Render loop
function render(){    

    if(meshLoaded){
        let deltaTime = clock.getDelta();
        const maxDeltaTime = 1 / 30;
        if (deltaTime > maxDeltaTime) {
            deltaTime = maxDeltaTime;
        }
        updateFocus();
        updateRpm();
           
        // Move the needle towards the start point if dropped close to the edge
        if(!isTransitioning){
            pitchBone.quaternion.slerp(pitchTarget, 0.1);     
            if(yawBone.rotation.y > armStart + 0.1){
                needleOverRecord = false;
            } else {
                needleOverRecord = true;
            }
            if(yawBone.rotation.y > armStart && yawBone.rotation.y < armStart + 0.02 && !needleLifted){
                yawBone.rotation.y += ((armSpeed * 25) * deltaTime) * rpmMulti;  
            }
            if(yawBone.rotation.y < armStart && yawBone.rotation.y > armEnd && dragTarget != toneArm){
                yawBone.rotation.y += (armSpeed * deltaTime) * rpmMulti;     
    
                if(trackQueue.length > 0 && !trackQueue[currentTrackIndex].playing() && !needleLifted && yawBone.rotation.y > armEnd + 0.0005 && !recordEnded && rpmMulti > 0.01){
                    trackQueue[currentTrackIndex].play()
                }
            }
        } else {
            //yawBone.rotation.y = THREE.MathUtils.lerp(yawBone.rotation.y, yawTarget, 0.075);
            speedDial.rotation.y = THREE.MathUtils.lerp(speedDial.rotation.y, dialTarget, 0.35);
        }

        updateNonDeltaTone();
        
        if(isDragging && dragTarget == toneArm){
            yawBone.rotation.y = THREE.MathUtils.lerp(yawBone.rotation.y, yawTarget, 0.075);
        }
        if(isDragging && dragTarget == speedDial){
            speedDial.rotation.y = THREE.MathUtils.lerp(speedDial.rotation.y, dialTarget, 0.35);
        }

        if(Math.abs(speedDial.rotation.y - dialTarget) > 0.05){
            changedSpeed();
        }

        platter.rotation.y -= angularVelocity * deltaTime;
        record.rotation.y -= angularVelocity * deltaTime;

        if(yawBone.rotation.y < armStart && dragTarget != toneArm && trackQueue.length > 0){
            normalizedRotation = (record.rotation.y % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            
            if(normalizedRotation < 6.2 && normalizedRotation > 3.1){
                yawBone.rotation.y -= (((0.01 * deltaTime) * rpmMulti) * 0.25) * (1.7 - posInRecord);
            }
            if(normalizedRotation < 3.1 && normalizedRotation > 0){
                yawBone.rotation.y += (((0.01 * deltaTime) * rpmMulti) * 0.25) * (1.7 - posInRecord);
            }

            if(normalizedRotation < 6&& normalizedRotation > 5.3){
                pitchBone.rotation.x -= (((0.1 * deltaTime) * rpmMulti) * 0.5) * (1.1 - posInRecord);
            }
            if(normalizedRotation < 5.3 && normalizedRotation > 4.6){
                pitchBone.rotation.x += (((0.1 * deltaTime) * rpmMulti) * 0.5) * (1.1 - posInRecord);
            }
        }
    }

    if(animateLibrary){
        albumCollection.forEach((record) => {
            record.mesh.rotation.x = THREE.MathUtils.lerp(record.mesh.rotation.x, record.targetRotation.x, 0.12);
            record.mesh.position.y = THREE.MathUtils.lerp(record.mesh.position.y, record.targetPosition.y, 0.1225);
            record.mesh.position.z = THREE.MathUtils.lerp(record.mesh.position.z, record.targetPosition.z, 0.125);
        });
    }

    updateIntMan();
    controls.update();
    requestAnimationFrame(render);    
    if(mouseActive || rpm > 0.1){
        if(postProcessEnabled){
            composer.render();
        } else {
            renderer.render(scene, camera);
        }
    } else {
        powerSaver();
    }    
}

function norm(value, min, max) {
    return (value - min) / (max - min);
}

document.addEventListener("wheel", () => {
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, 2500);
})

document.addEventListener("mousedown", () => {
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
});

document.addEventListener("mouseup", () => {
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, 2500);

});

function onMouseUp(event) {
    controls.enableRotate = true;
    if(rpm > 1){
        seekToPosition();
    }   
    isDragging = false;
    dragTarget = null;

    if (trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
        trackQueue[currentTrackIndex].stop();
    }

    // Reset back to the original rotation smoothly
    pitchTarget.copy(pitchClone.quaternion);
    // Remove the global mouseup listener to prevent unnecessary calls
    document.removeEventListener('mouseup', onMouseUp);
}

function playNextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex < trackQueue.length) {
        //console.log(`Playing next track: ${currentTrackIndex + 1}/${trackQueue.length}`);
        trackQueue[currentTrackIndex].play();
    } else {
        //console.log("Playlist finished.");
        currentTrackIndex = trackQueue.length - 1; // Stay on the last track
    }

}

function seekToPosition() {
    if (!trackQueue.length) return; // No tracks loaded
    isSeeking = true;

    let globalTime = posInRecord * totalDuration; // Convert position into time
    //console.log(`Seeking to time: ${globalTime} sec`);

    // Find the correct track
    let trackIndex = trackStartTimes.findIndex((startTime, i) => 
        globalTime >= startTime && (i === trackStartTimes.length - 1 || globalTime < trackStartTimes[i + 1])
    );

    if (trackIndex !== -1) {
        let trackTime = globalTime - trackStartTimes[trackIndex]; // Time within the track
        //console.log(`Seeking in Track ${trackIndex + 1} at ${trackTime.toFixed(2)} sec`);

        // Stop the old track and play the new one
        if (trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
            trackQueue[currentTrackIndex].stop();
        }

        currentTrackIndex = trackIndex;
        trackQueue[currentTrackIndex].seek(trackTime);

        // Prevent `onend` from falsely firing after seek
        clearTimeout(seekTimeout);
        seekTimeout = setTimeout(() => { 
            isSeeking = false;
        }, 200); // Allow 0.2 seconds before allowing `onend` again
    }
}

function applyAlbumArtToRecord(picture, albumSleeve, recordClass, changingRecord) {
    if(changingRecord){
        recordLabel.material = new THREE.MeshStandardMaterial({
            map: recordClass.art, 
            roughness: 0.16, 
            metalness: 0.0
        });

        recordLabel.material.needsUpdate = true;

        return;
    }
    
    if (!picture || !record) return;

    const blob = new Blob([picture.data], { type: picture.format });
    const imageUrl = URL.createObjectURL(blob);

    // Load texture and apply to record material
    textureLoader.load(imageUrl, (texture) => {

        albumSleeve.material = new THREE.MeshStandardMaterial({
            map: texture, 
            roughness: 0.2, 
            metalness: 0
        });

        recordClass.art = texture;
        console.log(recordClass);
        console.log("Album art applied to record texture!");
    });

}

function finalizeTrackQueue(tempTrackList, recordClass) {
    // Sort tracks by filename (natural order sorting for track numbers)
    tempTrackList.sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }));
    var tempStartTimes = [];
    var tempTrackQueue = [];
    var tempTrackNames = [];
    
    for (const trackObj of tempTrackList) {
        let { track, trackNames, duration } = trackObj;
        //const recordTracks = [];
        //const recordStartTimes = [];
        tempTrackQueue.push(track);
        tempTrackNames.push(trackNames);
        //trackQueue.push(track);
        tempStartTimes.push(totalDuration);  
        //trackStartTimes.push(totalDuration);  
        totalDuration += duration;
        recordClass.tracks = tempTrackQueue;
        recordClass.trackNames = tempTrackNames;
        recordClass.startTimes = tempStartTimes;
        recordClass.duration = totalDuration;
        //console.log(`Track: ${trackObj.fileName}, Duration: ${duration}`);
    }

    //console.log("Final Ordered Track Start Times:", trackStartTimes);
    //console.log("Total playlist duration:", totalDuration);

    recordDuration = totalDuration;
    armSpeed = (armEnd - (armStart)) / recordDuration;
    var getEndCrackle = Math.random();
    if(getEndCrackle < 0.33){
        endCrackle = crackleEnd1;
    }
    if(getEndCrackle > 0.33 && getEndCrackle < 0.66){
        endCrackle = crackleEnd2;
    }
    if(getEndCrackle > 0.66){
        endCrackle = crackleEnd3;
    }
    albumCollection.push(recordClass);
    recordClass.mesh.addEventListener('mouseover', (event) =>{
        if(!recordLoading){
            document.body.style.cursor = 'pointer'
            nudgeSleeves(albumCollection.indexOf(recordClass));
        }

        event.stopPropagation();
    })

    recordClass.mesh.addEventListener('mouseout', (event) =>{
        if(!recordLoading){
            document.body.style.cursor = 'default'
            revertSleeves();
        }
        
        event.stopPropagation();
    })

    recordLoading = false;
    const loadBtn = document.getElementById("loadTracksToBuilderBtn");
    loadBtn.disabled = false;
    loadBtn.textContent = "Load tracks"
}

function changedSpeed(){
    seekToPosition();
}

function loadRecordToDeck(recordObj) {
    currentRecordLoaded = recordObj;
    audioLoaded = false;
    trackQueue = recordObj.tracks;
    trackStartTimes = recordObj.startTimes;
    totalDuration = recordObj.duration;
    currentTrackIndex = 0;
    record.visible = true;
    applyAlbumArtToRecord(recordObj.art, recordObj.sleeve, recordObj, true);
    audioLoaded = true;

    // Update label & sleeve visuals
    if (recordObj.art) {
        recordLabel.material.map = recordObj.art;
        recordLabel.material.needsUpdate = true;

        sleeve.material.map = recordObj.art;
        sleeve.material.needsUpdate = true;
    }

    record.visible = true;
    if(!recordLoaded){
        record.position.y = 1;    
        gsap.to(record.position,{
            y: recordInitialY,
            duration: 1,
            ease: "power3.out"
        });
        recordLoaded = true;
    }

    console.log("loaded record ", recordObj);
}

async function loadRecordToDeckAnim(recordObj) {
    currentRecordLoaded = recordObj;

	// 1: Stop playback
	rpmTarget = 0;
    yawTarget = yawBone.rotation.y;
    setTimeout(() => {
        dialTarget = dialPos2;
        isTransitioning = true;
    }, 200);
    setTimeout(() => {
        if (trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
            trackQueue[currentTrackIndex].stop();
        }
    }, 250);

	// 2: Animate tonearm up and home
	await animateTonearmHome();

	// 3: Lift and spin current record
	await animateRecordLiftAndSpin(recordObj);

	// 4: Load new record (art, playlist, etc.)
	loadRecordToDeck(recordObj); // Doesn't auto-play

	isTransitioning = false;
}

function animateTonearmHome() {
	return new Promise((resolve) => {
        if(needleOverRecord){
            setTimeout(() => {
                resolve();
            }, 750);
        } else {
            setTimeout(() => {
                resolve();
            }, 50);
        }        
        
        const toneArmTl = gsap.timeline({});        
        if(needleOverRecord){
            toneArmTl.to(pitchBone.rotation, {
                x: armInitialX - 0.075,
                duration: 0.5,
                ease: "power2.inOut"
            });
            
            toneArmTl.to(yawBone.rotation, {
                y: armInitialY,
                duration: 1,
                ease: "power2.inOut"
            }, 0.2);
    
            toneArmTl.to(pitchBone.rotation, {
                x: armInitialX,
                duration: 0.5,
                ease: "power2.inOut"
            }, 0.75);

        } else {
            toneArmTl.to(yawBone.rotation, {
                y: armInitialY,
                duration: 1,
                ease: "power2.inOut"
            });
        }

	});
}

function animateRecordLiftAndSpin(recordObj) {
	return new Promise((resolve) => {
		record.artUpdated = false;
        const changeRecord = gsap.timeline({onComplete: resolve});        
        record.rotation.x = 0;
        changeRecord.to(record.position, {
            y: recordInitialY + 0.16,
            duration: 1,
            ease: "power2.out"
        }, 0);

        changeRecord.to(record.rotation, {
            x: Math.PI * 2,
            duration: 1.25,
            ease: "power2.inOut",
            onUpdate: () => {
                // Check if we've passed halfway to swap art
                if (record.rotation.x >= Math.PI && !record.artUpdated) {
                    applyAlbumArtToRecord(recordObj.art, sleeve, recordObj, true);
                    record.artUpdated = true;
                }
            }
        }, 0);

        changeRecord.to(record.position, {
            y: recordInitialY,
            duration: 0.75,
            ease: "power2.inOut"
        }, 1);
	});
}

function loadEnv01(){

    envNum = 1;

    if(albumCollection.length > 0){
        albumCollection.forEach((record) => {
            record.mesh.position.x = env1X;
            record.targetPosition.x = env1X;
            
            record.mesh.position.y = env1Y;
            record.targetPosition.y = env1Y;

            record.mesh.position.z = env1Z + (recordOffset * (albumCollection.indexOf(record) + 1));
            record.targetPosition.z = env1Z + (recordOffset * (albumCollection.indexOf(record) + 1));
            record.initialZ = record.mesh.position.z;
        });
    }

    
    scene.remove(light);
    scene.remove(light2);
    scene.remove(light3);

    // Adjust environment and tone mapping
    renderer.toneMappingExposure = 1.75;
    scene.environmentIntensity = 0.75;
    scene.environmentRotation.y = 11.4;

    // Adjust lights
    const sc1Light = new THREE.DirectionalLight(0xede2b4, 11)
    sc1Light.position.set(5.6, 1.5, 6.3);
    sc1Light.castShadow = true;
    sc1Light.shadow.mapSize.width = 2048;
    sc1Light.shadow.mapSize.height = 2048;
    sc1Light.shadow.camera.near = 4;
    sc1Light.shadow.camera.far = 10;
    sc1Light.shadow.camera.left = -1.2;
    sc1Light.shadow.camera.right = 1.5;
    sc1Light.shadow.camera.top = 1;
    sc1Light.shadow.camera.bottom = -1;
    sc1Light.shadow.bias = -0.002;
    sc1Light.shadow.radius = 2;
    sc1Light.shadow.blurSamples = 32;

    const sc2Light = new THREE.DirectionalLight(0xb4c6d3, 0.05)
    sc2Light.position.set(1, 0.8, -1);
    sc2Light.castShadow = false;
    
    const sc3Light = new THREE.DirectionalLight(0xFFFFFF, 0.5)
    sc3Light.position.set(0, 0.7, 0);
    sc3Light.castShadow = true;
    sc3Light.shadow.mapSize.width = 1024;
    sc3Light.shadow.mapSize.height = 1024;
    sc3Light.shadow.camera.near = 0.5;
    sc3Light.shadow.camera.far = 1.4;
    sc3Light.shadow.camera.left = -0.5;
    sc3Light.shadow.camera.right = 1;
    sc3Light.shadow.camera.top = 0.3;
    sc3Light.shadow.camera.bottom = -0.3;
    sc3Light.shadow.bias = -0.0001;
    sc3Light.shadow.radius = 3;
    sc3Light.shadow.blurSamples = 16;
    sc3Light.shadow.intensity = 1.6;

    scene.add(sc1Light);
    scene.add(sc2Light);
    scene.add(sc3Light);

    //const shadowCameraHelper = new THREE.CameraHelper( sc3Light.shadow.camera );
    //scene.add( shadowCameraHelper );

    // Change environment    
    loader.load('env_01.glb', (gltf) => {
        gltf.scene.traverse( function( child ) { 
            if ( child.isMesh ) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.frustumCulled = false;
            }
        });  
        
        const mesh = gltf.scene;
        scene.add(mesh);
    });

    scene.remove(groundPlane);

    controls.maxPolarAngle = 1.4;
}

function nudgeSleeves(currentSleeve){
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, 2500);
    animateLibrary = true;
    albumCollection.forEach((record) => {
        if(albumCollection.indexOf(record) > currentSleeve){
            record.targetRotation.x = 1.6;
        }
        if(albumCollection.indexOf(record) == currentSleeve){
            if(currentSleeve < albumCollection.length - 1){
                if(envNum == 0){
                    record.targetPosition.y = 0.125;
                }
                if(envNum == 1){
                    record.targetPosition.y = -0.075;
                }
                if(currentSleeve > 0){
                    record.targetPosition.z = record.initialZ - 0.025;
                } else {
                    record.targetPosition.z = record.initialZ - 0.025;
                }

            }

            record.targetRotation.x = 1.45;
            if(envNum == 0){
                record.targetPosition.y = 0.125;
            }
            if(envNum == 1){
                record.targetPosition.y = -0.075;
            }
            
        }
    });
};

function revertSleeves(){
    albumCollection.forEach((record) => {
        record.targetRotation.x = 1.294;
        if(envNum == 0){
            record.targetPosition.y = 0.0541;
        }
        if(envNum == 1){
            record.targetPosition.y = -0.153;
        }
        record.targetPosition.z = record.initialZ;
    });
};

function setBuilderButtonStates(enabled) {
	// Always leave these enabled
	document.getElementById("loadTracksToBuilderBtn").disabled = false;
	document.getElementById("cancelBuildBtn").disabled = false;

	// Toggle the rest based on whether tracks are loaded
	document.getElementById("addRecordBtn").disabled = !enabled;
	document.getElementById("fetchMetadataBtn").disabled = !enabled;
	document.getElementById("uploadArtBtn").disabled = !enabled;
}

function showRecordInfo(recordObj) {
    const panel = document.getElementById('recordInfoPanel');
    panel.classList.remove('hidden');
    document.getElementById('albumTitle').innerText = recordObj.name || "Unknown Album";
    document.getElementById('artistName').innerText = recordObj.artist || "Unknown Artist";
    document.getElementById("editRecordBtn").onclick = () => {
        editingRecord = recordObj;
        openBuilderForEditing(recordObj);
    };
    
    const trackList = document.getElementById('trackList');
    trackList.innerHTML = '';
    recordObj.trackNames.forEach((name, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
		<span class="track-number">${index + 1}.</span>
		<span class="track-title">${name || 'Untitled Track'}</span>
	`;
        trackList.appendChild(li);
    });

    if (recordObj.art && recordObj.art.image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = recordObj.art.image.width;
        canvas.height = recordObj.art.image.height;
        ctx.drawImage(recordObj.art.image, 0, 0);
        const dataURL = canvas.toDataURL();
    
        // Apply to the ::before pseudo-element using inline CSS variable or style
        const panel = document.getElementById('recordInfoPanel');
        panel.style.setProperty('--bg-image', `url('${dataURL}')`);
    
        // This line is optional if you want a solid color fallback layer too
        panel.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    
        // Inject image to pseudo-element
        panel.style.setProperty('--bg-image', `url('${dataURL}')`);
        panel.style.setProperty('--bg-opacity', '0.75');
        
    } else {
        panel.style.backgroundImage = 'none';
    }

    const loadBtn = document.getElementById('loadToPlayerBtn');

    // Compare by ID (or fallback by name+artist if needed)
    const isAlreadyLoaded = currentRecordLoaded && recordObj.id === currentRecordLoaded.id;
    loadBtn.disabled = isAlreadyLoaded;

    loadBtn.onclick = () => {       
        if (isAlreadyLoaded) return;
        loadBtn.disabled = true; // Prevent repeated clicks
        if (!recordLoaded) {
            loadRecordToDeck(recordObj);
        } else {
            loadRecordToDeckAnim(recordObj);
        }
    };

    document.getElementById('closePanelBtn').onclick = () => {
        document.getElementById('recordInfoPanel').classList.remove('visible');
    };
}

function openBuilderForEditing(recordObj) {
    
    document.getElementById('recordInfoPanel').classList.remove('visible');
    document.getElementById("recordBuildPanel").classList.remove("hidden");

    document.getElementById("builderTitle").value = recordObj.name;
    document.getElementById("builderArtist").value = recordObj.artist;

    recordBuilder.trackNames = [...recordObj.trackNames];
    recordBuilder.tracks = [...recordObj.tracks];
    recordBuilder.startTimes = [...recordObj.startTimes];
    recordBuilder.duration = recordObj.duration;
    recordBuilder.art = recordObj.art;

    const builderTrackList = document.getElementById("editableTrackList");
    builderTrackList.innerHTML = "";
    document.getElementById("noTracksMsg").style.display = "none";

    renderTrackListUI();

    if (recordObj.art && recordObj.art instanceof HTMLImageElement) {
        document.getElementById("builderAlbumArt").src = recordObj.art.src;
    } else if (recordObj.art instanceof THREE.Texture) {
        // Optional: convert to data URL if needed
    }

    // Change button to "Save Changes"
    const addBtn = document.getElementById("addRecordBtn");
    addBtn.textContent = "Save Changes";
}

function resetBuilder() {
    recordBuilder.tracks = [];
    recordBuilder.trackNames = [];
    recordBuilder.startTimes = [];
    recordBuilder.duration = 0;
    recordBuilder.art = null;

    document.getElementById("builderTitle").value = "";
    document.getElementById("builderArtist").value = "";
    document.getElementById("builderAlbumArt").src = "defaultArt.png";

    const builderTrackList = document.getElementById("editableTrackList");
    builderTrackList.innerHTML = "";
    document.getElementById("noTracksMsg").style.display = "block";

    editingRecord = null;
    document.getElementById("addRecordBtn").textContent = "Add to Library";
}

function updateTrackOrderFromDOM() {
    const listItems = document.querySelectorAll('#editableTrackList .builder-track-row');
    const newTrackNames = [];
    const newTracks = [];

    listItems.forEach((item, index) => {
        const input = item.querySelector('.track-edit');
        const originalIndex = parseInt(item.dataset.index);

        newTrackNames.push(input.value);
        newTracks.push(recordBuilder.tracks[originalIndex]);

        // Update display numbers
        item.querySelector('.track-number').textContent = `${index + 1}.`;
    });

    // Rebuild arrays and durations
    recordBuilder.trackNames = newTrackNames;
    recordBuilder.tracks = newTracks;

    // Recalculate start times
    recordBuilder.startTimes = [];
    let runningTotal = 0;
    recordBuilder.tracks.forEach(track => {
        recordBuilder.startTimes.push(runningTotal);
        runningTotal += track.duration();
    });
    recordBuilder.duration = runningTotal;
}

function renderTrackListUI() {
    const builderTrackList = document.getElementById("editableTrackList");
    builderTrackList.innerHTML = "";

    recordBuilder.trackNames.forEach((title, i) => {
        const li = document.createElement("li");
        li.classList.add("builder-track-row");
        li.dataset.index = i;
        li.innerHTML = `
            <span class="track-number">${i + 1}.</span>
            <input type="text" class="track-edit" value="${title}">
            <button class="delete-button" title="Remove track">&times;</button>
        `;

        li.querySelector(".track-edit").addEventListener("input", (e) => {
            recordBuilder.trackNames[i] = e.target.value;
        });

        li.querySelector(".delete-button").addEventListener("click", () => {
            recordBuilder.trackNames.splice(i, 1);
            recordBuilder.tracks.splice(i, 1);
            recalculateStartTimes();
            renderTrackListUI();
        });

        builderTrackList.appendChild(li);
    });

    document.getElementById("noTracksMsg").style.display =
        recordBuilder.trackNames.length === 0 ? "block" : "none";

    setBuilderButtonStates(recordBuilder.tracks.length > 0);
}

function recalculateStartTimes() {
    let runningTotal = 0;
    recordBuilder.startTimes = [];
    recordBuilder.tracks.forEach((track) => {
        recordBuilder.startTimes.push(runningTotal);
        runningTotal += track.duration();
    });
    recordBuilder.duration = runningTotal;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function fpsLimiter(fps, callback){
    const interval = 1000 / fps;
	let lastTime = 0;

	return () => {
		const now = performance.now();
		if (now - lastTime >= interval) {
			lastTime = now;
			callback(now);
		}
	};
}

render();