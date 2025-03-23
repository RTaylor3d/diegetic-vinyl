import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
import {Howl, Howler} from 'howler';
import { parseBlob } from 'music-metadata';

// Set up variables
var meshLoaded = false;
var audioLoaded = false;
const clock = new THREE.Clock();
var rpm = 0;
var recordSpeed = 45;
var rpmTarget = 0;
var rpmMulti = 0;
var angularVelocity = (rpm * 2 * Math.PI) / 60;
var platter = null;
var record = null;
var recordLabel = null;
var sleeve = null;
var toneArm = null;
var speedDial = null;
var groundPlane = null;
var yawBone = null;
var yawTarget = 0;
var dialTarget = 0;
var pitchBone = null;
var pitchClone = null;
var pitchTarget = new THREE.Quaternion(0, 0, 0, 0);
const mouse = new THREE.Vector2();
var needleLifted = true;
var recordEnded = false;
var isDragging = false;
var dragStarted = false;
var isSeeking = false;
var sceneChanged = false;
var seekTimeout = null;
var dragTarget = null;
var dragStartY = 0;
var totalDragDistance = 0;
var dragThreshold = 30;
var posInRecord = 0;
var recordDuration = 0;
var armSpeed = 0;
var armStart = -0.540;
var armEnd = -0.834;
var normalizedRotation;
var dialPos1 = Math.PI / 4.8;  // 33 RPM (2 o'clock)
var dialPos2 = 0;              // STOP (3 o'clock, default)
var dialPos3 = -Math.PI / 4.8; // 45 RPM (3 o'clock)
var dialPos4 = -Math.PI / 2;   // 78 RPM (4 o'clock)

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
    constructor(artist, name, tracks, duration, startTimes, art, id){
        this.artist = artist;
        this.name = name;
        this.tracks = tracks;
        this.duration = duration;
        this.startTimes = startTimes;
        this.art = art;
        this.id = id;
    }
}

var ambCrackle = new Howl({
    src: ['./vinyl-crackle-33rpm-6065.mp3'],
    rate: 1, 
    volume: 0.4,
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
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.outputColorspace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x212121);
renderer.setPixelRatio(window.devicePixelRatio * 1.25);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.1;
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
    platter = mesh.getObjectByName("platter");
    record = mesh.getObjectByName("vinyl");
    record.visible = false;
    recordLabel = mesh.getObjectByName("vinylLabel");
    speedDial = mesh.getObjectByName("dial");
    toneArm = mesh.getObjectByName("toneArm");
    yawBone = mesh.getObjectByName("boneYaw");
    pitchBone = mesh.getObjectByName("bonePitch");
    pitchClone = pitchBone.clone();
    pitchTarget.copy(pitchBone.quaternion);
    intMan.add(toneArm); 
    intMan.add(speedDial);   
    intMan.add(record);

    toneArm.addEventListener('mousedown', (event) => {
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
    //scene.add(mesh);
    sleeve = mesh.getObjectByName("sleeve");
    //sleeve.position.set(0.359, 0, -0.011);
    //sleeve.rotation.y = 0.5;
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

const shadowCameraHelper = new THREE.CameraHelper( light.shadow.camera );
//scene.add( shadowCameraHelper );

// Controls for the camera orbit
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.autoRotate = false;
controls.enableRotate = true;
controls.maxDistance = 1.1;
controls.minDistance = 0.3;
controls.maxPolarAngle = 1.2;
controls.target = new THREE.Vector3(0, 0.1, 0);
controls.update();

document.getElementById("loadTracksBtn").addEventListener('click', () => {
    getFile();
});
/*
document.getElementById("changeSceneBtn").addEventListener('click', () => {
    if(!sceneChanged){
        loadEnv01();
        sceneChanged = true;
    }
});
*/

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

//Render loop
function render(){    

    if(meshLoaded){
        const deltaTime = clock.getDelta();
        
        rpm = THREE.MathUtils.lerp(rpm, rpmTarget, 0.2);
        rpmMulti = rpm / recordSpeed;
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
        pitchBone.quaternion.slerp(pitchTarget, 0.1);        
        // Move the needle towards the start point if dropped close to the edge
        if(yawBone.rotation.y > armStart && yawBone.rotation.y < armStart + 0.02 && !needleLifted){
            yawBone.rotation.y += ((armSpeed * 25) * deltaTime) * rpmMulti;  
        }
        if(yawBone.rotation.y < armStart && yawBone.rotation.y > armEnd && dragTarget != toneArm){
            yawBone.rotation.y += (armSpeed * deltaTime) * rpmMulti;     

            if(trackQueue.length > 0 && !trackQueue[currentTrackIndex].playing() && !needleLifted && yawBone.rotation.y > armEnd + 0.0005 && !recordEnded){
                trackQueue[currentTrackIndex].play()
            }
        }
        if(pitchBone.rotation.x > -1.575){
            needleLifted = false;
            
        } else {
            needleLifted = true;
            recordEnded = false;
        }
        if(trackQueue.length > 0 && yawBone.rotation.y < armStart + 0.02 && !needleLifted && rpm > 1 && !recordEnded){
            if(!ambCrackle.playing()){
                ambCrackle.seek(Math.random() * ambCrackle.duration());
                ambCrackle.play();
            }
        } else {
            ambCrackle.pause();
        }

        if(audioLoaded && yawBone.rotation.y < armEnd + 0.0005 && !needleLifted && !recordEnded){
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
        }
        if(yawBone.rotation.y < armEnd){
            posInRecord = 1;
        }
        if(yawBone.rotation.y > armStart){
            posInRecord = 0;
        }
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

    intMan.update();
    controls.update();
    requestAnimationFrame(render);    
    renderer.render(scene, camera);
}

function norm(value, min, max) {
    return (value - min) / (max - min);
}

function onMouseUp(event) {
    controls.enableRotate = true;
    if(rpm > 1){
        seekToPosition();
    }   
    isDragging = false;
    dragTarget = null;

    // Reset back to the original rotation smoothly
    pitchTarget.copy(pitchClone.quaternion);
    // Remove the global mouseup listener to prevent unnecessary calls
    document.removeEventListener('mouseup', onMouseUp);
}

async function getFile() {
    audioLoaded = false;
    const newRecord = new NewRecord();
    newRecord.id = Date.now();
    
    try {
        const fileHandles = await window.showOpenFilePicker(trackPickerOpts);
        const files = await Promise.all(fileHandles.map(handle => handle.getFile()));

        // Stop and unload any playing track
        if (trackQueue.length > 0 && trackQueue[currentTrackIndex]) {
            trackQueue[currentTrackIndex].unload();
        }

        // Reset track queue and duration tracking
        trackQueue = [];
        trackStartTimes = [];
        totalDuration = 0;
        currentTrackIndex = 0;

        let tempTrackList = [];
        let albumArtSet = false;

        // Add new sleeve
        const newSleeve = sleeve.clone(true);
        scene.add(newSleeve);
        newSleeve.position.set(0.438, 0, -0.227 + (recordOffset * (albumCollection.length + 1)));
        newSleeve.rotation.x = 1.294;
        newSleeve.rotation.y = 0;
        intMan.add(newSleeve);
        newSleeve.addEventListener('click', (event) =>{
            loadRecordToDeck(newRecord);
            event.stopPropagation();
        })
        
        for (const file of files) {
            const fileURL = URL.createObjectURL(file);
            if (!albumArtSet) {
                const metadata = await parseBlob(file);
                if (metadata.common.picture && metadata.common.picture.length > 0) {
                    const albumArt = metadata.common.picture[0];
                    if(albumArt != null){
                        applyAlbumArtToRecord(albumArt, newSleeve, newRecord);
                    }
                    albumArtSet = true;
                    record.visible = true;
                }
                if(metadata.common.albumartist){
                    newRecord.artist = metadata.common.albumartist;
                }
                
                if(metadata.common.album){
                    newRecord.name = metadata.common.album;
                }
            }

            let newTrack = new Howl({
                src: [fileURL],
                format: [file.type.split('/')[1]],
                onload: function () {  
                    let duration = newTrack.duration();
                    tempTrackList.push({ 
                        fileName: file.name, 
                        track: newTrack, 
                        duration: duration 
                    });

                    if (tempTrackList.length === files.length) {
                        finalizeTrackQueue(tempTrackList, newRecord);
                    }
                },
                onend: function () {
                    if (!needleLifted && rpm > 1 && !isSeeking) {
                        playNextTrack();
                    }
                }
            });
        }
    } catch (error) {
        console.error("Error loading files:", error);
    }
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
        if (trackQueue[currentTrackIndex]) {
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

function applyAlbumArtToRecord(picture, albumSleeve, recordClass) {
    if (!picture || !record) return;

    const blob = new Blob([picture.data], { type: picture.format });
    const imageUrl = URL.createObjectURL(blob);

    // Load texture and apply to record material
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageUrl, (texture) => {
        recordLabel.material = new THREE.MeshStandardMaterial({
            map: texture, 
            roughness: 0.16, 
            metalness: 0.0
        });

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

    for (const trackObj of tempTrackList) {
        let { track, duration } = trackObj;

        trackQueue.push(track);
        trackStartTimes.push(totalDuration);  
        totalDuration += duration;
        recordClass.tracks = trackQueue;
        recordClass.startTimes = trackStartTimes;
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
    audioLoaded = true;
    albumCollection.push(recordClass);
    //console.log(albumCollection);
}

function changedSpeed(){
    seekToPosition();
}

function loadRecordToDeck(recordObj) {
    trackQueue = recordObj.tracks;
    trackStartTimes = recordObj.startTimes;
    totalDuration = recordObj.duration;
    currentTrackIndex = 0;
    audioLoaded = true;

    // Update label & sleeve visuals
    if (recordObj.art) {
        recordLabel.material.map = recordObj.art;
        recordLabel.material.needsUpdate = true;

        sleeve.material.map = recordObj.art;
        sleeve.material.needsUpdate = true;
    }

    record.visible = true;
    console.log("loaded record ", recordObj);
}

function loadEnv01(){

    scene.remove(light);
    scene.remove(light2);
    scene.remove(light3);

    // Adjust environment and tone mapping
    renderer.toneMappingExposure = 1.2;
    scene.environmentIntensity = 1;

    // Adjust lights
    const sc1Light = new THREE.DirectionalLight(0xede2b4, 15)
    sc1Light.position.set(5.6, 1.5, 6.3);
    sc1Light.castShadow = true;
    sc1Light.shadow.mapSize.width = 2048;
    sc1Light.shadow.mapSize.height = 1024;
    sc1Light.shadow.camera.near = 0.1;
    sc1Light.shadow.camera.far = 10;
    sc1Light.shadow.camera.left = -2;
    sc1Light.shadow.camera.right = 2;
    sc1Light.shadow.camera.top = 2;
    sc1Light.shadow.camera.bottom = -2;
    sc1Light.shadow.bias = -0.0001;
    sc1Light.shadow.radius = 4;
    sc1Light.shadow.blurSamples = 32;

    const sc2Light = new THREE.DirectionalLight(0xb4c6d3, 0.05)
    sc2Light.position.set(1, 0.8, -1);
    sc2Light.castShadow = false;
    
    const sc3Light = new THREE.DirectionalLight(0xFFFFFF, 0.5)
    sc3Light.position.set(0, 0.7, 0);
    sc3Light.castShadow = true;
    sc3Light.shadow.mapSize.width = 512;
    sc3Light.shadow.mapSize.height = 1024;
    sc3Light.shadow.camera.near = 0.1;
    sc3Light.shadow.camera.far = 2;
    sc3Light.shadow.camera.left = -0.5;
    sc3Light.shadow.camera.right = 0.5;
    sc3Light.shadow.camera.top = 0.5;
    sc3Light.shadow.camera.bottom = -0.5;
    sc3Light.shadow.bias = -0.0001;
    sc3Light.shadow.radius = 2;
    sc3Light.shadow.blurSamples = 16;

    scene.add(sc1Light);
    scene.add(sc2Light);
    scene.add(sc3Light);

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

    // Adjust record sleeve
    //sleeve.position.set(0.438, 0, -0.227);
    //sleeve.rotation.x = 1.294;
    //sleeve.rotation.y = 0;

    controls.maxPolarAngle = 1.4;
}

render();