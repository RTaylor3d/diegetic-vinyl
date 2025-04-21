import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
import {Howl, Howler} from 'howler';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';

// --- Electron Detection ---
const isElectron = !!window.electronAPI;
let userDataPath = ''; // Will be fetched if in Electron

// Add class to body if in Electron
if (isElectron) {
    document.body.classList.add('is-electron');
}

// Helper to get basename
const getBasename = (filePath) => filePath.split(/[\\/]/).pop();

// Set up variables
var meshLoaded = false;
var audioLoaded = false;
var postProcessEnabled = true;
<<<<<<< Updated upstream
=======
var initialSceneSet = false; // Flag to ensure scene is set only once
let environment = null;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
var mouseScreenX = 0;
var mouseScreenY = 0;
>>>>>>> Stashed changes
var needleLifted = true;
var recordEnded = false;
var isDragging = false;
<<<<<<< Updated upstream
=======
var mouseActive = false;
var mouseActiveTimeout;
var powerDownDelay = 15000;
>>>>>>> Stashed changes
var dragStarted = false;
var isSeeking = false;
var sceneChanged = false;
var animateLibrary = false;
var seekTimeout = null;
var dragTarget = null;
<<<<<<< Updated upstream
var envNum = 0;
var env0X = 0.45;
var env1X = 0.438;
var env0Y = 0.0541;
var env1Y = -0.153;
var env0Z = -0.13;
var env1Z = -0.195;
=======
var envNum = 1;
>>>>>>> Stashed changes
var dragStartY = 0;
var totalDragDistance = 0;
var dragThreshold = 30;
var posInRecord = 0;
<<<<<<< Updated upstream
var recordDuration = 0;
=======
var armInitialY = 0;
var armInitialX = 0;
>>>>>>> Stashed changes
var armSpeed = 0;
var armStart = -0.540;
var armEnd = -0.834;
var normalizedRotation;
var dialPos1 = Math.PI / 4.8;  // 33 RPM (2 o'clock)
var dialPos2 = 0;              // STOP (3 o'clock, default)
var dialPos3 = -Math.PI / 4.8; // 45 RPM (3 o'clock)
var dialPos4 = -Math.PI / 2;   // 78 RPM (4 o'clock)
var recordOffset = 0.00757;
var initialSettingsLoaded = false; // Flag to prevent premature saves
var initialLibraryLoaded = false; // Flag for library loading
var playbackStartTime = 0;
var pausedTime = 0;
var seekTime = 0;
var movedToNextTrack = false; // Add this flag

<<<<<<< Updated upstream
=======
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
	art: null,
    trackPaths: [] // Added trackPaths
};

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
var recordOffset = 0.00557;
=======
>>>>>>> Stashed changes

class NewRecord {
    constructor(mesh, artist, name, tracks, trackNames, duration, startTimes, art, id, initialZ, targetRotation, targetPosition, trackPaths = [], artPath = null){
        this.mesh = mesh;
        this.artist = artist;
        this.name = name;
        this.tracks = tracks; // Howl instances (runtime)
        this.trackNames = trackNames;
        this.duration = duration;
        this.startTimes = startTimes;
        this.art = art; // THREE.Texture or raw data { data, format } (runtime)
        this.id = id;
        this.initialZ = initialZ;
<<<<<<< Updated upstream
        this.targetRotation = new THREE.Quaternion(targetRotation);
        this.targetPosition = new THREE.Vector3(targetPosition);
=======
        this.targetRotation = targetRotation ? new THREE.Quaternion().copy(targetRotation) : new THREE.Quaternion();
        this.targetPosition = targetPosition ? new THREE.Vector3().copy(targetPosition) : new THREE.Vector3();
        this.recordHit = null;
        this.trackPaths = trackPaths; // Array of original file paths (for saving)
        this.artPath = artPath; // Relative path to saved art (for saving/loading)
    }

    // Method to prepare data for JSON serialization
    toJSON() {
        return {
            id: this.id,
            artist: this.artist,
            name: this.name,
            trackPaths: this.trackPaths, // Save original paths
            trackNames: this.trackNames,
            duration: this.duration,
            startTimes: this.startTimes,
            artPath: this.artPath, // Save relative art path
            initialZ: this.initialZ,
            // Serialize Quaternion and Vector3
            targetRotation: { x: this.targetRotation.x, y: this.targetRotation.y, z: this.targetRotation.z, w: this.targetRotation.w },
            targetPosition: { x: this.targetPosition.x, y: this.targetPosition.y, z: this.targetPosition.z }
        };
>>>>>>> Stashed changes
    }
}

var ambCrackle = new Howl({
    src: ['./vinyl-crackle-33rpm-6065.mp3'],
    rate: 1, 
<<<<<<< Updated upstream
    volume: 0.4,
    loop: true
=======
    volume: 0.5,
    loop: true,
    html5: false // Ensure Web Audio API
>>>>>>> Stashed changes
});

var crackleEnd1 = new Howl({
    src: ['./record_end_01.mp3'],
    rate: 1, 
<<<<<<< Updated upstream
    volume: 0.3,
    loop: true
=======
    volume: 0.4,
    loop: true,
    html5: false // Ensure Web Audio API
>>>>>>> Stashed changes
});

var crackleEnd2 = new Howl({
    src: ['./record_end_02.mp3'],
    rate: 1, 
<<<<<<< Updated upstream
    volume: 0.3,
    loop: true
=======
    volume: 0.4,
    loop: true,
    html5: false // Ensure Web Audio API
>>>>>>> Stashed changes
});

var crackleEnd3 = new Howl({
    src: ['./record_end_03.mp3'],
    rate: 1, 
<<<<<<< Updated upstream
    volume: 0.3,
    loop: true
=======
    volume: 0.4,
    loop: true,
    html5: false // Ensure Web Audio API
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
renderer.toneMappingExposure = 1.15;
=======
renderer.toneMappingExposure = 1.4;
>>>>>>> Stashed changes
document.body.appendChild(renderer.domElement);

// Set up Scene
const scene = new THREE.Scene();
const environmentTexture = new THREE.CubeTextureLoader().setPath('./').load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
scene.environment = environmentTexture;
scene.environmentIntensity = 0.9;
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
    mesh.position.set(-0.15, 0, 0);
    scene.add(mesh);
    const body = mesh.getObjectByName("body");
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
    intMan.add(body);
    intMan.add(toneArm); 
    intMan.add(speedDial);   
    intMan.add(record);

    body.addEventListener('click', (event) =>{
        event.stopPropagation();
    })

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
    checkInitialLoadComplete(); // Check if we can proceed after mesh loads
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
<<<<<<< Updated upstream
    //sleeve.position.set(0.359, 0, -0.011);
    //sleeve.rotation.y = 0.5;
=======
    sleeveHit = mesh.getObjectByName("sleeveHit");
    sleeveHit.castShadow = false;
    sleeveHit.receiveShadow = false;
    checkInitialLoadComplete(); // Check if we can proceed after sleeve loads
>>>>>>> Stashed changes
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
controls.enablePan = false;
controls.autoRotate = false;
controls.enableRotate = true;
controls.maxDistance = 1.1;
controls.minDistance = 0.3;
controls.maxPolarAngle = 1.2;
<<<<<<< Updated upstream
controls.target = new THREE.Vector3(0, 0.1, 0);
controls.update();

document.getElementById("loadTracksBtn").addEventListener('click', () => {
    getFile();
});

document.getElementById("changeSceneBtn").addEventListener('click', () => {
    if(!sceneChanged){
        loadEnv01();
        sceneChanged = true;
    }
});

=======
controls.minAzimuthAngle = -Math.PI / 4;
controls.maxAzimuthAngle = Math.PI / 4;
controls.target = new THREE.Vector3(0, 0.11, 0);
controls.update();

// --- Save/Load Functions (Electron only) ---

async function saveSettings() {
    if (!isElectron || !initialSettingsLoaded) return; // Don't save before initial load
    console.log("Saving settings...");
    const settings = {
        envNum: envNum,
        postProcessEnabled: postProcessEnabled,
        antialiasingEnabled: renderer.getPixelRatio() > 1.25, // Check current state
        crackleVolume: ambCrackle.volume() // Check current volume
    };
    try {
        await window.electronAPI.saveSettings(settings);
        console.log("Settings saved.");
    } catch (error) {
        console.error("Failed to save settings:", error);
    }
}

async function saveLibrary() {
    if (!isElectron || !initialLibraryLoaded) return; // Don't save before initial load
    console.log("Saving library...");
    // Prepare library data using the toJSON method
    const libraryData = albumCollection.map(record => record.toJSON());
    try {
        await window.electronAPI.saveLibrary(libraryData);
        console.log("Library saved.");
    } catch (error) {
        console.error("Failed to save library:", error);
    }
}

async function loadData() {
    if (!isElectron) {
        // If not in Electron, proceed with default setup immediately
        initialSettingsLoaded = true;
        initialLibraryLoaded = true;
        // Environment already loaded above
        checkInitialLoadComplete(); // Check if meshes are ready
        // Attempt to set initial scene (will position records if ready)
        setInitialScene();
        return;
    }

    console.log("Running in Electron, attempting to load data...");
    try {
        userDataPath = await window.electronAPI.getUserDataPath(); // Get user data path
        if (userDataPath) userDataPath = userDataPath.replace(/\\/g, '/');
        console.log("User Data Path:", userDataPath);

        // Load Settings
        const loadedSettings = await window.electronAPI.loadSettings();
        //let loadedEnvNum = envNum; // Start with the current default

        if (loadedSettings) {
            console.log("Loaded settings:", loadedSettings);
            envNum = loadedSettings.envNum;
            postProcessEnabled = loadedSettings.postProcessEnabled ?? postProcessEnabled;
            const aaEnabled = loadedSettings.antialiasingEnabled ?? (renderer.getPixelRatio() > 1.25);
            renderer.setPixelRatio(window.devicePixelRatio * (aaEnabled ? 2.0 : 1));
            const crackleVolume = loadedSettings.crackleVolume ?? ambCrackle.volume();
            ambCrackle.volume(crackleVolume);
            crackleEnd1.volume(crackleVolume * 0.8);
            crackleEnd2.volume(crackleVolume * 0.8);
            crackleEnd3.volume(crackleVolume * 0.8);

            // Update UI elements
            togglePostProcessing.checked = postProcessEnabled;
            toggleAntialiasing.checked = aaEnabled;
            crackleVolumeSlider.value = crackleVolume;
        } else {
            console.log("No settings file found or error loading, using defaults.");
        }

        environment = new Environment(scene, envNum);
        environment.lights = environment.getLights(envNum);
        environment.changeScene();

        initialSettingsLoaded = true; // Mark settings as loaded

        // Load Library (but don't process yet)
        const loadedLibrary = await window.electronAPI.loadLibrary();
        initialLibraryLoaded = true; // Mark library file as read (or not found)

        // Check if meshes are ready, but don't set scene yet
        checkInitialLoadComplete();

        // Process library data if it exists
        if (loadedLibrary && loadedLibrary.length > 0) {
             console.log(`Loaded ${loadedLibrary.length} records from library file.`);
             // Process library - this might take time, especially with Howl creation
             const processed = await processLoadedLibrary(loadedLibrary);
             if (processed) {
                 // After processing, attempt to set the initial scene (position records)
                 setInitialScene();
             } else {
                 console.warn("Library processing was delayed or failed, initial scene setup might be incomplete.");
                 // Still try to set scene in case meshes loaded later
                 setInitialScene();
             }
        } else {
            console.log("No library data found or library is empty.");
            // No library to process, attempt to set initial scene (position records if any were added manually before load)
            setInitialScene();
        }

    } catch (error) {
        console.error("Error during initial data load:", error);
        initialSettingsLoaded = true; // Ensure flags are set even on error
        initialLibraryLoaded = true;
        // Try to set scene even on error
        setInitialScene();
    }
}

async function processLoadedLibrary(libraryData) {
    console.log("Processing loaded library data (metadata only)...");
    albumCollection = []; // Clear existing collection

    if (!sleeve || !sleeveHit) {
        console.warn("Sleeve meshes not loaded yet, delaying library processing.");
        return false;
    }

    for (const recordData of libraryData) {
        try {
            // --- Create NewRecord instance with metadata and paths, not Howls ---
            const newRecord = new NewRecord(
                null, // Mesh will be created/assigned later
                recordData.artist,
                recordData.name,
                [], // Initialize tracks as empty array (Howls will be loaded on demand)
                recordData.trackNames || [],
                recordData.duration || 0,
                recordData.startTimes || [],
                null, // Art texture will be loaded below
                recordData.id,
                recordData.initialZ,
                recordData.targetRotation, // Already objects from JSON parse
                recordData.targetPosition, // Already objects from JSON parse
                recordData.trackPaths || [], // Store paths
                recordData.artPath // Store art path
            );

            // --- Create and add sleeve mesh ---
            const newSleeve = sleeve.clone(true);
            const newSleeveHit = sleeveHit.clone(true);
            console.log(`Created sleeve mesh ${newSleeve.uuid} for ${newRecord.name}`);
            scene.add(newSleeve);
            scene.add(newSleeveHit);
            intMan.add(newSleeveHit);
            newRecord.mesh = newSleeve;
            newRecord.recordHit = newSleeveHit;

            // --- Position sleeve ---
            // Use saved position/rotation if available, otherwise calculate default
            if (recordData.targetPosition && recordData.targetRotation) {
                 // Convert loaded plain objects back to THREE types if necessary
                 newRecord.targetPosition.set(recordData.targetPosition.x, recordData.targetPosition.y, recordData.targetPosition.z);
                 newRecord.targetRotation.set(recordData.targetRotation.x, recordData.targetRotation.y, recordData.targetRotation.z, recordData.targetRotation.w);
                 newSleeve.position.copy(newRecord.targetPosition);
                 newSleeve.quaternion.copy(newRecord.targetRotation); // Use quaternion for rotation
                 newSleeveHit.position.copy(newRecord.targetPosition);
                 newSleeveHit.quaternion.copy(newRecord.targetRotation);
            } else {
                 // Fallback positioning (might need adjustment based on environment)
                 const index = albumCollection.length; // Index before adding
                 const zPos = environment.recordZ + (recordOffset * (index + 1)); // Use current environment Z
                 newSleeve.position.set(environment.recordX + getRandomArbitrary(-0.0015, 0.0015), environment.recordY, zPos); // Use current environment X/Y
                 newSleeveHit.position.copy(newSleeve.position);
                 newSleeve.rotation.x = 1.294; // Default rotation
                 newSleeveHit.rotation.x = 1.294;
                 newRecord.initialZ = zPos;
                 newRecord.targetPosition.copy(newSleeve.position);
                 newRecord.targetRotation.copy(newSleeve.quaternion); // Copy quaternion
            }
            console.log(`Initial position set for sleeve ${newSleeve.uuid}:`, newSleeve.position);


            // --- Load Art Texture (asynchronously) ---
            if (isElectron && newRecord.artPath && userDataPath) {
                const fullArtPath = `file:///${userDataPath}/${newRecord.artPath}`.replace(/\\/g, '/');
                console.log(`Initiating art texture load from: ${fullArtPath} for sleeve ${newSleeve.uuid}`);
                textureLoader.load(
                    fullArtPath,
                    (texture) => { // onLoad callback
                        console.log(`Art texture loaded successfully for ${newRecord.name} (sleeve ${newSleeve.uuid})`);
                        texture.colorSpace = THREE.SRGBColorSpace;
                        newRecord.art = texture; // Store loaded texture
                        // Apply to sleeve mesh material immediately
                        if (newRecord.mesh) {
                            applyAlbumArtToRecord(texture, newRecord.mesh, newRecord, false); // Use the function
                        } else {
                            console.warn(`Sleeve mesh ${newSleeve.uuid} not found when art loaded for ${newRecord.name}`);
                        }
                    },
                    undefined, // onProgress callback (optional)
                    (err) => { // onError callback
                        console.error(`Error loading art texture for ${newRecord.name} from ${fullArtPath}:`, err);
                        // Optionally apply default art here if loading fails
                    }
                );
            } else {
                 console.log(`No art path found or not in Electron for ${newRecord.name}. Skipping art load.`);
                 // Optionally apply default art texture here
            }


            // --- Add event listeners ---
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

            albumCollection.push(newRecord);
            console.log(`Successfully processed record metadata: ${newRecord.name}`);

        } catch (recordError) {
            console.error(`Error processing record data: ${recordData.name || 'Unknown'}`, recordError);
        }
    }
    console.log("Finished processing library metadata loop.");
    if (libraryPanel.classList.contains("visible")) {
        renderLibrary(); // Update library UI if visible
    }
    // Ensure records are positioned correctly after processing all
    // This might still run before all async texture loads complete, but positions the meshes.
    replaceRecords();
    return true; // Indicate processing happened
}

// --- Initial Setup Logic ---
function checkInitialLoadComplete() {
	// Check if all necessary assets and data are loaded
	const initialLoadComplete =
		initialSettingsLoaded &&
		initialLibraryLoaded && // Check if library file read attempt is done
		meshLoaded &&             // Turntable model
		sleeve &&                 // Sleeve base model
		sleeveHit;                // Sleeve hit model

	console.log(
		`Checking initial load: mesh=${meshLoaded}, sleeve=${!!sleeve}, hit=${!!sleeveHit}, settings=${initialSettingsLoaded}, libraryFileRead=${initialLibraryLoaded}, sceneSet=${initialSceneSet}`
	);

    // If everything is loaded AND the scene hasn't been set yet, set it.
	if (initialLoadComplete && !initialSceneSet) {
		console.log("All initial assets loaded. Setting initial scene.");
        setInitialScene();
	} else if (initialSceneSet) {
        console.log("Initial scene already set.");
    } else {
        console.log("Still waiting for some assets or data to load...");
    }
}

function setInitialScene() {
    // Only proceed if the scene hasn't been set and required meshes are loaded
    if (initialSceneSet || !meshLoaded || !sleeve || !sleeveHit) {
        if (initialSceneSet) console.log("setInitialScene called but scene already set.");
        else console.log("setInitialScene called but required meshes not ready.");
        return;
    }
    console.log("Setting initial scene: Positioning records.");
    // --- Environment setup is now done earlier ---
    //environment.lights = environment.getLights(envNum); // Use potentially loaded envNum
    //environment.changeScene();
    // ---
    replaceRecords(); // Position records according to the environment and loaded collection
    initialSceneSet = true;
    console.log("Initial scene setup complete (records positioned).");
    checkInitialLoadComplete(); // Log final status
}

// --- Start Data Loading ---
loadData(); // This will handle loading settings, library, and triggering scene setup

document.getElementById("loadTracksToBuilderBtn").addEventListener("click", async () => {
    const loadBtn = document.getElementById("loadTracksToBuilderBtn");
	loadBtn.disabled = true;

    let fileHandles;
    let files;
    let filePaths = [];

    if (isElectron) {
        const result = await window.electronAPI.invoke('show-open-dialog', trackPickerOpts);
        if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
            loadBtn.disabled = false;
            return;
        }
        filePaths = result.filePaths;
        files = filePaths.map(p => ({ name: getBasename(p), path: p, type: `audio/${p.split('.').pop()}` }));
    } else {
        fileHandles = await window.showOpenFilePicker(trackPickerOpts).catch(() => {
            loadBtn.disabled = false;
            return [];
        });
        if (!fileHandles || fileHandles.length === 0) return;
	    files = await Promise.all(fileHandles.map(handle => handle.getFile()));
        filePaths = files.map(f => f.name);
    }

	const builderTrackList = document.getElementById("editableTrackList");
	builderTrackList.innerHTML = "";
	document.getElementById("noTracksMsg").style.display = "none";

    let tempDuration = recordBuilder.duration || 0;
    let tempTracks = [...recordBuilder.tracks];
    let tempTrackNames = [...recordBuilder.trackNames];
    let tempStartTimes = [...recordBuilder.startTimes];
    let tempTrackPaths = [...(recordBuilder.trackPaths || [])];

	let albumArtSet = recordBuilder.art != null;

	const loadPromises = files.map(async (file) => {
        const isPseudoFile = !!file.path;
		const fileSource = isPseudoFile ? `file://${file.path}` : URL.createObjectURL(file);
        const filePathForMetadata = isPseudoFile ? file.path : file;

		let title = file.name;
        let trackNumber = null;
        let duration = 0;

        try {
            if (isPseudoFile) {
                console.log(`Requesting metadata parse for: ${filePathForMetadata}`);
                const result = await window.electronAPI.invoke('parse-metadata', filePathForMetadata);

                if (result.success) {
                    console.log(`Metadata received for ${file.name}:`, result);
                    title = result.title || file.name;
                    trackNumber = result.trackNumber ?? null;

                    if (tempTrackNames.length === 0) {
                        if (result.album) {
                            document.getElementById("builderTitle").value = result.album;
                        }
                        if (result.artist) {
                            document.getElementById("builderArtist").value = result.artist;
                        }
                    }

                    if (!albumArtSet && result.picture) {
                        const image = result.picture;
                        const blob = new Blob([image.data], { type: image.format });
                        const blobUrl = URL.createObjectURL(blob);
                        document.getElementById("builderAlbumArt").src = blobUrl;
                        recordBuilder.art = { data: new Uint8Array(image.data), format: image.format };
                        albumArtSet = true;
                    }
                } else {
                     console.warn(`Metadata parsing failed for ${file.name}: ${result.error}. Using filename parsing.`);
                     const match = file.name.match(/^(\d+)?\s*-\s*(.+)\.\w+$/);
                     if (match) {
                         trackNumber = match[1] ? parseInt(match[1]) : null;
                         title = match[2] || file.name;
                     }
                }
            } else {
                 console.warn("Web environment: Metadata parsing via parseBlob is currently disabled. Using filename parsing.");
                 const match = file.name.match(/^(\d+)?\s*-\s*(.+)\.\w+$/);
                 if (match) {
                     trackNumber = trackNumber ?? (match[1] ? parseInt(match[1]) : null);
                     title = title || match[2] || file.name;
                 }
            }
        } catch (metaError) {
            console.warn(`Could not parse metadata for ${file.name}:`, metaError);
            const match = file.name.match(/^(\d+)?\s*-\s*(.+)\.\w+$/);
            if (match) {
                trackNumber = trackNumber ?? (match[1] ? parseInt(match[1]) : null);
                title = title || match[2] || file.name;
            }
        }

		return new Promise((resolve) => {
			const howl = new Howl({
				src: [fileSource],
				format: [file.type.split('/')[1] || file.name.split('.').pop()], // Use extension as fallback format
				html5: false,
				onload: function () {
					duration = howl.duration(); // Get duration on load
					resolve({
						fileName: file.name,
						howl,
						title,
						trackNumber,
						duration,
                        filePath: filePathForMetadata // Pass the path back
					});
				},
                onend: function () {
                    // Check the flag here
                    if (movedToNextTrack) {
                        console.log("onend triggered shortly after playNextTrack, ignoring.");
                        return;
                    }
                    if (!needleLifted && rpm > 1 && !isSeeking && !isTransitioning) { // Added !isTransitioning check
                        if (currentTrackIndex < trackQueue.length - 1) {
                            playNextTrack();
                        } else {
                            recordEnded = true;
                            if (endCrackle && !endCrackle.playing()) {
                                endCrackle.play();
                            }
                        }
                    }
                },
                onloaderror: function(id, error) { // Added error handling
                    console.error(`Howl load error for ${fileSource}:`, error);
                    resolve(null); // Resolve with null on error
                },
                onplayerror: function(id, error) { // Added error handling
                    console.error(`Howl play error for ${fileSource}:`, error);
                    // Optionally try to recover or skip track
                }
			});
		});
	});

	const loadedTracks = (await Promise.all(loadPromises)).filter(t => t !== null);

	loadedTracks.sort((a, b) => {
		if (a.trackNumber && b.trackNumber) return a.trackNumber - b.trackNumber;
		return a.fileName.localeCompare(b.fileName, undefined, { numeric: true });
	});

	loadedTracks.forEach((trackData) => {
		const { howl, title, duration, filePath } = trackData;
		tempTracks.push(howl);
		tempTrackNames.push(title);
        tempTrackPaths.push(filePath);
	});

    recordBuilder.tracks = tempTracks;
    recordBuilder.trackNames = tempTrackNames;
    recordBuilder.trackPaths = tempTrackPaths;

    recalculateStartTimes();
    renderTrackListUI();

    setBuilderButtonStates(true);
    loadBtn.disabled = false;
});

document.getElementById("fetchMetadataBtn").addEventListener("click", async () => {
	if (!recordBuilder.tracks.length) return;

    if (isElectron) {
        alert("Fetching metadata is automatically done when adding tracks in the Electron version.");
        return;
    }

    alert("Web metadata fetching is currently disabled.");
});

document.getElementById("uploadArtBtn").addEventListener("click", async () => {
    let file;
    if (isElectron) {
        const result = await window.electronAPI.invoke('show-open-dialog', {
            properties: ['openFile'],
            filters: [ { name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp', 'gif'] } ]
        });
        if (result.canceled || !result.filePaths || result.filePaths.length === 0) return;
        const filePath = result.filePaths[0];
        const fileData = await window.electronAPI.invoke('read-file-buffer', filePath);
        if (!fileData) {
            alert("Failed to read image file.");
            return;
        }
        const format = `image/${filePath.split('.').pop()}`;
        const blob = new Blob([fileData], { type: format });
        const blobUrl = URL.createObjectURL(blob);
        document.getElementById("builderAlbumArt").src = blobUrl;
        recordBuilder.art = { data: new Uint8Array(fileData), format: format };

    } else {
	    const [fileHandle] = await window.showOpenFilePicker({
		    types: [ { description: 'Images', accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif'] } } ],
		    excludeAcceptAllOption: true, multiple: false
	    });
	    if (!fileHandle) return;
	    file = await fileHandle.getFile();
        const blobUrl = URL.createObjectURL(file);
	    document.getElementById("builderAlbumArt").src = blobUrl;
	    const arrayBuffer = await file.arrayBuffer();
	    recordBuilder.art = { data: new Uint8Array(arrayBuffer), format: file.type };
    }
});

document.getElementById("addRecordBtn").addEventListener("click", async () => {
    if (recordBuilder.tracks.length === 0) return;

    let recordToSave = editingRecord;
    let isNewRecord = !editingRecord;
    let savedArtPath = null;
    let artSourceForApplying = null; // Variable to hold what needs to be applied

    // --- Handle saving art (Electron) ---
    if (isElectron && recordBuilder.art && recordBuilder.art.data) {
        const recordId = isNewRecord ? Date.now() : editingRecord.id;
        try {
            const result = await window.electronAPI.invoke('save-album-art', recordId, recordBuilder.art.data, recordBuilder.art.format);
            if (result.success) {
                savedArtPath = result.artPath;
                console.log("Album art saved via Electron:", savedArtPath);
                // Keep artSourceForApplying as the raw data for immediate application
                artSourceForApplying = recordBuilder.art;
            } else {
                console.error("Failed to save album art:", result.error);
            }
        } catch (error) {
            console.error("Error invoking save-album-art:", error);
        }
    } else if (!isElectron && recordBuilder.art) {
        // Handle non-electron art saving/reference if needed (e.g., store Blob URL temporarily)
        // For now, just use the raw data for application
        artSourceForApplying = recordBuilder.art;
    } else if (editingRecord && editingRecord.art instanceof THREE.Texture) {
        // If editing and art wasn't changed in builder, use existing texture
        artSourceForApplying = editingRecord.art;
        savedArtPath = editingRecord.artPath; // Keep existing path
    }
    // ---

    if (isNewRecord) {
        const newRecord = new NewRecord();
        newRecord.id = Date.now();

        const newSleeve = sleeve.clone(true);
        const newSleeveHit = sleeveHit.clone(true);
        console.log(`Created new sleeve mesh ${newSleeve.uuid} via builder`);
        scene.add(newSleeve);
        scene.add(newSleeveHit);
        intMan.add(newSleeveHit);
        

        newRecord.mesh = newSleeve;
        newRecord.artist = document.getElementById("builderArtist").value || "Unknown Artist";
        newRecord.name = document.getElementById("builderTitle").value || "Untitled Record";
        // Ensure Howls are loaded if added via builder (they should be)
        newRecord.tracks = [...recordBuilder.tracks];
        newRecord.trackNames = [...recordBuilder.trackNames];
        newRecord.startTimes = [...recordBuilder.startTimes];
        newRecord.duration = recordBuilder.duration;
        newRecord.trackPaths = [...recordBuilder.trackPaths];
        newRecord.artPath = savedArtPath; // Store the saved path
        newRecord.recordHit = newSleeveHit;

        // --- Apply Art to New Sleeve ---
        // Use the artSourceForApplying determined above
        applyAlbumArtToRecord(artSourceForApplying, newRecord.mesh, newRecord, false);
        // Note: applyAlbumArtToRecord handles Texture or {data, format} object
        // It will load the texture asynchronously if needed.
        // We also store the texture on newRecord.art inside applyAlbumArtToRecord

        // --- Position New Sleeve ---
        const index = albumCollection.length; // Index before adding
        const zPos = environment.recordZ + (recordOffset * (index + 1));
        newSleeve.position.set(environment.recordX + getRandomArbitrary(-0.0015, 0.0015), environment.recordY, zPos);
        newSleeveHit.position.copy(newSleeve.position);
        newSleeve.rotation.x = 1.294;
        newSleeveHit.rotation.x = 1.294;

        newRecord.initialZ = newSleeve.position.z;
        newRecord.targetPosition = newSleeve.position.clone();
        newRecord.targetRotation = newSleeve.rotation.clone();

        // --- Add Event Listeners ---
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

        albumCollection.push(newRecord);
        recordToSave = newRecord; // For potential immediate use, though saving happens below

    } else { // Editing existing record
        editingRecord.name = document.getElementById("builderTitle").value;
        editingRecord.artist = document.getElementById("builderArtist").value;
        editingRecord.tracks = [...recordBuilder.tracks]; // Assumes Howls are loaded
        editingRecord.trackNames = [...recordBuilder.trackNames];
        editingRecord.startTimes = [...recordBuilder.startTimes];
        editingRecord.duration = recordBuilder.duration;
        editingRecord.trackPaths = [...recordBuilder.trackPaths];
        if (savedArtPath !== null) { // Only update path if art was saved/changed
            editingRecord.artPath = savedArtPath;
        }

        // Apply potentially changed art
        applyAlbumArtToRecord(artSourceForApplying, editingRecord.mesh, editingRecord, false);
        // applyAlbumArtToRecord updates editingRecord.art with the texture

        // If the edited record is currently loaded, update the deck visuals/state
        if (currentRecordLoaded && currentRecordLoaded.id === editingRecord.id) {
            console.log("Updating currently loaded record visuals after edit.");
            // Re-apply art to label
            if (recordLabel && editingRecord.art instanceof THREE.Texture) {
                recordLabel.material.map = editingRecord.art;
                recordLabel.material.needsUpdate = true;
            }
            // Update track queue, duration etc. (might need more robust update logic if playing)
            trackQueue = editingRecord.tracks;
            trackStartTimes = editingRecord.startTimes;
            totalDuration = editingRecord.duration;
            // Recalculate arm speed if duration changed
            if (totalDuration > 0) armSpeed = (armEnd - armStart) / totalDuration;
            else armSpeed = 0;
        }
        recordToSave = editingRecord; // For saving
    }

    await saveLibrary(); // Save the updated library

    editingRecord = null; // Clear editing state
    document.getElementById("addRecordBtn").textContent = "Add to Library";
    document.getElementById("recordBuildPanel").classList.add("hidden");
    setTimeout(resetBuilder, 300); // Reset builder UI after transition
});

document.getElementById("cancelBuildBtn").addEventListener("click", () => {
    document.getElementById("recordBuildPanel").classList.add("hidden");
    setTimeout(resetBuilder, 300);
});
>>>>>>> Stashed changes

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
aperture: 0.0085,
maxblur: 0.005
});

const outputPass = new OutputPass();
const composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bokehPass );
composer.addPass( outputPass );

<<<<<<< Updated upstream
//Render loop
function render(){    

    if(meshLoaded){
        const deltaTime = clock.getDelta();
        //scene.environmentRotation.y += 0.005;
        //console.log(scene.environmentRotation.y);
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
=======
window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    composer.setSize(width, height);
}

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
    if(audioLoaded && trackQueue && trackQueue[currentTrackIndex]){
        trackQueue[currentTrackIndex].rate(rpmMulti);
        if(ambCrackle.playing()){
            ambCrackle.rate(rpmMulti);
        }
        if(endCrackle && endCrackle.playing()){
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
    if(trackQueue && trackQueue.length > 0 && yawBone.rotation.y < armStart + 0.02 && !needleLifted && rpm > 1 && !recordEnded && rpmMulti > 0.01){
        if(!ambCrackle.playing()){
            ambCrackle.seek(Math.random() * ambCrackle.duration());
            ambCrackle.play();
        }
    } else {
        ambCrackle.pause();
    }

    if(audioLoaded && yawBone.rotation.y < armEnd + 0.0005 && !needleLifted && !recordEnded && rpmMulti > 0.01){
        if(endCrackle && !endCrackle.playing()){
            recordEnded = true;
            endCrackle.play();
            ambCrackle.pause();
        }
    }
    if(audioLoaded && needleLifted){
        if(endCrackle && endCrackle.playing()){
            endCrackle.pause();
        }

        if (trackQueue && trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
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
    if (!isPointerOverBlockingPanel()) {
        intMan.update();
    } else {
        document.body.style.cursor = 'default';
    }
});

// Settings panel logic
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const togglePostProcessing = document.getElementById("togglePostProcessing");
const toggleAntialiasing = document.getElementById("toggleAntialiasing");
const crackleVolumeSlider = document.getElementById("crackleVolumeSlider");
const overlay = document.getElementById("overlay");
const exitAppBtn = document.getElementById("exitAppBtn"); // Get the new button

closeSettingsBtn.addEventListener("click", () => {
	overlay.classList.remove("visible");
	settingsPanel.classList.remove("visible");
});

togglePostProcessing.addEventListener("change", (event) => {
	postProcessEnabled = event.target.checked;
    saveSettings();
});

toggleAntialiasing.addEventListener("change", (event) => {
	const pixelRatio = event.target.checked ? 2.0 : 1;
	renderer.setPixelRatio(window.devicePixelRatio * pixelRatio);
    saveSettings();
});

crackleVolumeSlider.addEventListener("input", (event) => {
	const volume = parseFloat(event.target.value);
	ambCrackle.volume(volume);
	crackleEnd1.volume(volume * 0.8);
	crackleEnd2.volume(volume * 0.8);
	crackleEnd3.volume(volume * 0.8);
    saveSettings();
});

overlay.addEventListener("click", () => {
	overlay.classList.remove("visible");
	settingsPanel.classList.remove("visible");
});

// Add listener for the exit button
if (isElectron && exitAppBtn) {
    exitAppBtn.addEventListener("click", () => {
        window.electronAPI.invoke('quit-app');
    });
} else if (exitAppBtn) {
	// Hide button if not in Electron
	exitAppBtn.style.display = 'none';
}

togglePostProcessing.checked = postProcessEnabled;
toggleAntialiasing.checked = renderer.getPixelRatio() > 1.25;
crackleVolumeSlider.value = ambCrackle.volume();

// Library panel logic
const libraryBtn = document.getElementById("libraryBtn");
const libraryPanel = document.getElementById("libraryPanel");
const closeLibraryBtn = document.getElementById("closeLibraryBtn");
const libraryList = document.getElementById("libraryList");

const sortControls = document.getElementById("sortControls");
const sortOrderToggle = document.getElementById("sortOrderToggle");

sortControls.addEventListener("change", renderLibrary);
sortOrderToggle.addEventListener("change", renderLibrary);

closeLibraryBtn.addEventListener("click", () => {
	libraryPanel.classList.remove("visible");
});

function renderLibrary() {
	libraryList.innerHTML = "";

    if (!albumCollection || albumCollection.length === 0) {
        libraryList.innerHTML = "<li>No records in library.</li>";
        return;
    }

	const sortBy = document.querySelector('input[name="sortBy"]:checked').value;
	const descending = sortOrderToggle.checked;

	const sortedRecords = [...albumCollection].sort((a, b) => {
		const fieldA = sortBy === "artist" ? (a.artist || "") : (a.name || "");
		const fieldB = sortBy === "artist" ? (b.artist || "") : (b.name || "");
		return descending
			? fieldB.localeCompare(fieldA)
			: fieldA.localeCompare(fieldB);
	});

	sortedRecords.forEach((record) => {
		const li = document.createElement("li");
		li.classList.add("library-item");
		li.innerHTML = `
			<span>${record.name || "Untitled"} - ${record.artist || "Unknown"}</span>
			<div>
				<button class="ui-button load-btn">Load to Player</button>
				<button class="ui-button edit-btn">Edit</button>
                <button class="ui-button delete-lib-btn" data-record-id="${record.id}">Delete</button>
			</div>
		`;

		const loadBtn = li.querySelector(".load-btn");
		const editBtn = li.querySelector(".edit-btn");
        const deleteBtn = li.querySelector(".delete-lib-btn");

		const isAlreadyLoaded = currentRecordLoaded && record.id === currentRecordLoaded.id;
		loadBtn.disabled = isAlreadyLoaded;

		loadBtn.addEventListener("click", () => {
			if (!isAlreadyLoaded) {
                if (!record.tracks || record.tracks.some(t => !t)) {
                    alert("Record tracks are not fully loaded or some failed to load.");
                    return;
                }
				if (!recordLoaded) {
					loadRecordToDeck(record);
				} else {
					loadRecordToDeckAnim(record);
				}
				renderLibrary();
				saveLibrary();
			}
		});

		editBtn.addEventListener("click", () => {
			openBuilderForEditing(record);
			libraryPanel.classList.remove("visible");
		});

        deleteBtn.addEventListener("click", async () => {
            if (confirm(`Are you sure you want to delete "${record.name}"? This cannot be undone.`)) {
                const indexToRemove = albumCollection.findIndex(r => r.id === record.id);
                if (indexToRemove > -1) {
                    if (currentRecordLoaded && currentRecordLoaded.id === record.id) {
                        rpmTarget = 0;
                        dialTarget = dialPos2;
                        if (trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
                            trackQueue[currentTrackIndex].stop();
                        }
                        await animateTonearmHome();
                        record.visible = false;
                        currentRecordLoaded = null;
                        recordLoaded = false;
                        trackQueue = [];
                        trackStartTimes = [];
                        totalDuration = 0;
                    }

                    scene.remove(record.mesh);
                    scene.remove(record.recordHit);
                    intMan.remove(record.recordHit);

                    albumCollection.splice(indexToRemove, 1);

                    await saveLibrary();

                    renderLibrary();
                    replaceRecords();
                }
            }
        });

		libraryList.appendChild(li);
	});
}

const libraryCanvas = document.getElementById('libraryBtnCanvas');
const libraryBtnContainer = document.getElementById('libraryBtnContainer');

if (libraryCanvas && libraryBtnContainer) {
    const libraryRive = new rive.Rive({
        src: './librarybutton.riv',
        canvas: libraryCanvas,
        autoplay: true,
        stateMachines: ['Hover'],
        onLoad: () => {
            libraryRive.resizeDrawingSurfaceToCanvas();
        },
        onStateChange: (event) => {
            const isHovering = event.data.some(stateName => stateName === 'animOver');
            if (isHovering) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'default';
            }
        }
    });

    libraryBtnContainer.addEventListener('click', () => {
        libraryPanel.classList.add('visible');
        renderLibrary();
    });
}

const buildRecordCanvas = document.getElementById('buildRecordBtnCanvas');
const buildRecordBtnContainer = document.getElementById('buildRecordBtnContainer');

if (buildRecordCanvas && buildRecordBtnContainer) {
    const buildRecordRive = new rive.Rive({
        src: './newrecordbutton.riv',
        canvas: buildRecordCanvas,
        autoplay: true,
        stateMachines: ['Hover'],
        onLoad: () => {
            buildRecordRive.resizeDrawingSurfaceToCanvas();
        },
        onStateChange: (event) => {
            const isHovering = event.data.some(stateName => stateName === 'animOver');
            document.body.style.cursor = isHovering ? 'pointer' : 'default';
        }
    });

    buildRecordBtnContainer.addEventListener('click', () => {
        libraryPanel.classList.remove('visible');
        document.getElementById('recordBuildPanel').classList.remove('hidden');
        setBuilderButtonStates(false);
    });
}

const changeSceneCanvas = document.getElementById('changeSceneBtnCanvas');
const changeSceneBtnContainer = document.getElementById('changeSceneBtnContainer');

if (changeSceneCanvas && changeSceneBtnContainer) {
    const changeSceneRive = new rive.Rive({
        src: './scenebutton.riv',
        canvas: changeSceneCanvas,
        autoplay: true,
        stateMachines: ['Hover'],
        onLoad: () => {
            changeSceneRive.resizeDrawingSurfaceToCanvas();
        },
        onStateChange: (event) => {
            const isHovering = event.data.some(stateName => stateName === 'animOver');
            document.body.style.cursor = isHovering ? 'pointer' : 'default';
        }
    });

    changeSceneBtnContainer.addEventListener('click', () => {
        envNum = envNum === 1 ? 2 : 1;
        changeScene(envNum);
    });
}

const settingsCanvas = document.getElementById('settingsBtnCanvas');
const settingsBtnContainer = document.getElementById('settingsBtnContainer');

if (settingsCanvas && settingsBtnContainer) {
    const settingsRive = new rive.Rive({
        src: './settingsbutton.riv',
        canvas: settingsCanvas,
        autoplay: true,
        stateMachines: ['Hover'],
        onLoad: () => {
            settingsRive.resizeDrawingSurfaceToCanvas();
        },
        onStateChange: (event) => {
            const isHovering = event.data.some(stateName => stateName === 'animOver');
            document.body.style.cursor = isHovering ? 'pointer' : 'default';
        }
    });

    settingsBtnContainer.addEventListener('click', () => {
        overlay.classList.add('visible');
        settingsPanel.classList.add('visible');
    });
}

// Animation loop
function render() {
    if (meshLoaded) {
        let deltaTime = clock.getDelta();
        const maxDeltaTime = 1 / 30;
        if (deltaTime > maxDeltaTime) {
            deltaTime = maxDeltaTime;
        }

        updateFocus();
        updateRpm();

        if (!isTransitioning) {
            pitchBone.quaternion.slerp(pitchTarget, 0.1);

            if (yawBone.rotation.y > armStart + 0.1) {
                needleOverRecord = false;
            } else {
                needleOverRecord = true;
            }

            const canAutoMove = !needleLifted && !isDragging && dragTarget !== toneArm && audioLoaded && trackQueue.length > 0;

            if (canAutoMove && trackQueue && trackQueue[currentTrackIndex]) {
                const currentTrack = trackQueue[currentTrackIndex];
                if (currentTrack && currentTrack.playing()) {
                    const globalTime = trackStartTimes[currentTrackIndex] + currentTrack.seek();
                    posInRecord = THREE.MathUtils.clamp(globalTime / totalDuration, 0, 1);
                    const targetYaw = THREE.MathUtils.lerp(armStart, armEnd, posInRecord);
                    yawBone.rotation.y = THREE.MathUtils.lerp(yawBone.rotation.y, targetYaw, 0.01);
                }
            }

            // 🧲 Sticky edge behavior when dropped very close to start
            if (yawBone.rotation.y > armStart && yawBone.rotation.y < armStart + 0.02 && !needleLifted) {
                yawBone.rotation.y += ((armSpeed * 25) * deltaTime) * rpmMulti;
            }

            // 🔁 Still allow gradual passive drift if tonearm behind
            if (yawBone.rotation.y < armStart && yawBone.rotation.y > armEnd && dragTarget !== toneArm && !needleLifted) {
                // Restore this line for passive drift:
                yawBone.rotation.y += (armSpeed * deltaTime) * rpmMulti;

                // Start playing if not already
                if (trackQueue && trackQueue.length > 0 && trackQueue[currentTrackIndex] && !trackQueue[currentTrackIndex].playing() && yawBone.rotation.y > armEnd + 0.0005 && !recordEnded && rpmMulti > 0.01) {
                    trackQueue[currentTrackIndex].play();
                }
>>>>>>> Stashed changes
            }
        } else {
            ambCrackle.pause();
        }

<<<<<<< Updated upstream
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
=======
        updateNonDeltaTone();

        if (isDragging && dragTarget == toneArm) {
>>>>>>> Stashed changes
            yawBone.rotation.y = THREE.MathUtils.lerp(yawBone.rotation.y, yawTarget, 0.075);
        }
        if (isDragging && dragTarget == speedDial) {
            speedDial.rotation.y = THREE.MathUtils.lerp(speedDial.rotation.y, dialTarget, 0.35);
        }

        if (Math.abs(speedDial.rotation.y - dialTarget) > 0.05) {
            changedSpeed();
        }

        platter.rotation.y -= angularVelocity * deltaTime;
        record.rotation.y -= angularVelocity * deltaTime;

        if (yawBone.rotation.y < armStart && dragTarget != toneArm && trackQueue && trackQueue.length > 0) {
            normalizedRotation = (record.rotation.y % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

            if (normalizedRotation < 6.2 && normalizedRotation > 3.1) {
                yawBone.rotation.y -= (((0.01 * deltaTime) * rpmMulti) * 0.25) * (1.7 - posInRecord);
            }
            if (normalizedRotation < 3.1 && normalizedRotation > 0) {
                yawBone.rotation.y += (((0.01 * deltaTime) * rpmMulti) * 0.25) * (1.7 - posInRecord);
            }

            if (normalizedRotation < 6 && normalizedRotation > 5.3) {
                pitchBone.rotation.x -= (((0.1 * deltaTime) * rpmMulti) * 0.5) * (1.1 - posInRecord);
            }
            if (normalizedRotation < 5.3 && normalizedRotation > 4.6) {
                pitchBone.rotation.x += (((0.1 * deltaTime) * rpmMulti) * 0.5) * (1.1 - posInRecord);
            }
        }
    }

    if (animateLibrary) {
        albumCollection.forEach((record) => {
            record.mesh.rotation.x = THREE.MathUtils.lerp(record.mesh.rotation.x, record.targetRotation.x, 0.12);
            record.mesh.position.y = THREE.MathUtils.lerp(record.mesh.position.y, record.targetPosition.y, 0.1225);
            record.mesh.position.z = THREE.MathUtils.lerp(record.mesh.position.z, record.targetPosition.z, 0.125);
        });
    }

<<<<<<< Updated upstream
    intMan.update();
    controls.update();
    requestAnimationFrame(render);    
    if(postProcessEnabled){
        composer.render();
    } else {
        renderer.render(scene, camera);
    }
    
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
    //audioLoaded = false;
    const newRecord = new NewRecord();
    newRecord.id = Date.now();
    
    try {
        const fileHandles = await window.showOpenFilePicker(trackPickerOpts);
        const files = await Promise.all(fileHandles.map(handle => handle.getFile()));

        // Stop and unload any playing track
        //if (trackQueue.length > 0 && trackQueue[currentTrackIndex]) {
        //    trackQueue[currentTrackIndex].unload();
        //}

        // Reset track queue and duration tracking
        //trackQueue = [];
        //trackStartTimes = [];
        totalDuration = 0;
        //currentTrackIndex = 0;

        let tempTrackList = [];
        let albumArtSet = false;

        // Add new sleeve
        const newSleeve = sleeve.clone(true);
        scene.add(newSleeve);
        intMan.add(newSleeve);
        newRecord.mesh = newSleeve;
        if(envNum == 0){
            newSleeve.position.set(env0X + getRandomArbitrary(-0.0015, 0.0015), env0Y, env0Z + (recordOffset * (albumCollection.length + 1)));
            newSleeve.rotation.x = 1.294;
        }

        if(envNum == 1){
            newSleeve.position.set(env1X, env1Y, env1Z + (recordOffset * (albumCollection.length + 1)));
            newSleeve.rotation.x = 1.294;
        }

        newRecord.initialZ = newSleeve.position.z;
        newRecord.targetPosition = newSleeve.position.clone();
        newRecord.targetRotation = newSleeve.rotation.clone();

        newSleeve.addEventListener('click', (event) =>{
            showRecordInfo(newRecord);
            document.getElementById('recordInfoPanel').classList.add('visible');
            event.stopPropagation();
        })
        
        for (const file of files) {
            const fileURL = URL.createObjectURL(file);            
            const metadata = await parseBlob(file);
            let trackName

            if(metadata.common.title){
                trackName = metadata.common.title;
            }

            if (!albumArtSet) {
                if (metadata.common.picture && metadata.common.picture.length > 0) {
                    const albumArt = metadata.common.picture[0];
                    if(albumArt != null){
                        applyAlbumArtToRecord(albumArt, newSleeve, newRecord, false);
                    }
                    albumArtSet = true;
                    //record.visible = true;
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
                        trackNames: trackName,
                        duration: duration 
                    });

                    if (tempTrackList.length === files.length) {
                        finalizeTrackQueue(tempTrackList, newRecord);
                    }
                },
                onend: function () {
                    if (!needleLifted && rpm > 1 && !isSeeking && currentTrackIndex < trackQueue.length - 1) {
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

function applyAlbumArtToRecord(picture, albumSleeve, recordClass, changingRecord) {
    if(changingRecord){
        recordLabel.material = new THREE.MeshStandardMaterial({
            map: recordClass.art, 
            roughness: 0.16, 
            metalness: 0.0
=======
    updateIntMan();
    controls.update();
    if (mouseActive || rpm > 0.1) {
        if (postProcessEnabled) {
            composer.render();
        } else {
            renderer.render(scene, camera);
        }
    } else {
        powerSaver();
    }

    requestAnimationFrame(render);
}

async function loadHowlsForRecord(recordObj) {
    if (!recordObj || !recordObj.trackPaths || recordObj.trackPaths.length === 0) {
        console.error("Cannot load Howls: Invalid record object or no track paths.", recordObj);
        return [];
    }
    if (recordObj.tracks && recordObj.tracks.length > 0) {
        console.log("Howls already loaded for:", recordObj.name);
        return recordObj.tracks; // Already loaded
    }

    console.log(`Loading Howls on demand for: ${recordObj.name}`);
    const loadedTracks = [];
    // Use Promise.all to load Howls concurrently
    await Promise.all(recordObj.trackPaths.map(async (trackPath, index) => {
        const srcPath = isElectron ? `file://${trackPath}` : trackPath; // Use file:// protocol for Electron paths
        console.log(`Creating Howl for: ${srcPath}`);
        return new Promise((resolve, reject) => {
            const howl = new Howl({
                src: [srcPath],
                html5: false, // Force Web Audio API
                onload: () => {
                    console.log(`Howl loaded: ${srcPath}`);
                    loadedTracks[index] = howl; // Place howl in correct index
                    resolve(howl);
                },
                onend: function () {
                    // Check the flag here
                    if (movedToNextTrack) {
                        console.log("onend triggered shortly after playNextTrack, ignoring.");
                        return;
                    }
                    if (!needleLifted && rpm > 1 && !isSeeking && !isTransitioning) { // Added !isTransitioning check
                        if (currentTrackIndex < trackQueue.length - 1) {
                            playNextTrack();
                        } else {
                            recordEnded = true;
                            if (endCrackle && !endCrackle.playing()) {
                                endCrackle.play();
                            }
                        }
                    }
                },
                onloaderror: (id, error) => {
                    console.error(`Howl load error for ${srcPath}:`, error);
                    // Resolve even on error to not break Promise.all, but maybe mark as failed?
                    // For now, just resolve, the check in loadRecordToDeck will handle missing tracks.
                    resolve(null);
                },
                onplayerror: function(id, error) {
                    console.error(`Howl play error for ${srcPath}:`, error);
                    // Optionally try to recover or skip track
                }
            });
>>>>>>> Stashed changes
        });
    }));

<<<<<<< Updated upstream
=======
    console.log(`Finished loading ${loadedTracks.length} Howls for: ${recordObj.name}`);
    recordObj.tracks = loadedTracks; // Assign loaded Howls back to the record object
    return loadedTracks;
}

async function loadRecordToDeck(recordObj) {
    console.log("Attempting to load record to deck:", recordObj ? recordObj.name : "Invalid Object");

    if (!recordObj) { // Removed !recordObj.tracks check here, will load them below
        console.error("Attempted to load invalid record object:", recordObj);
>>>>>>> Stashed changes
        return;
    }

    // --- Load Howls on demand if not already loaded ---
    const howls = await loadHowlsForRecord(recordObj);
    if (!howls || howls.length === 0) {
        console.error(`Failed to load audio tracks for ${recordObj.name}. Aborting deck load.`);
        // Optionally show a user-facing error message here
        return;
    }
    // --- Howls are now guaranteed to be in recordObj.tracks ---

<<<<<<< Updated upstream
    // Load texture and apply to record material
    const textureLoader = new THREE.TextureLoader();
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
        document.body.style.cursor = 'pointer'
        nudgeSleeves(albumCollection.indexOf(recordClass));
        event.stopPropagation();
    })

    recordClass.mesh.addEventListener('mouseout', (event) =>{
        document.body.style.cursor = 'default'
        revertSleeves();
        event.stopPropagation();
    })
}

function changedSpeed(){
    seekToPosition();
}

function loadRecordToDeck(recordObj) {
    audioLoaded = false;
    trackQueue = recordObj.tracks;
    trackStartTimes = recordObj.startTimes;
    totalDuration = recordObj.duration;
=======
    console.log("Stopping current track if playing...");
    // Use the globally scoped trackQueue and currentTrackIndex
    if (trackQueue && Array.isArray(trackQueue) && currentTrackIndex >= 0 && currentTrackIndex < trackQueue.length && trackQueue[currentTrackIndex] && typeof trackQueue[currentTrackIndex].playing === 'function' && trackQueue[currentTrackIndex].playing()) {
        console.log("Stopping track index:", currentTrackIndex);
        trackQueue[currentTrackIndex].stop();
    } else {
        console.log("No track playing or trackQueue invalid.");
    }

    currentRecordLoaded = recordObj;
    audioLoaded = false; // Mark as false until Howls are confirmed loaded (though loadHowlsForRecord awaits)
    trackQueue = recordObj.tracks; // Assign the loaded Howls
    trackStartTimes = recordObj.startTimes || []; // Use pre-calculated start times from JSON
    totalDuration = recordObj.duration || 0; // Use pre-calculated total duration from JSON
>>>>>>> Stashed changes
    currentTrackIndex = 0;
    recordEnded = false;
    playbackStartTime = 0;
    pausedTime = 0;
    seekTime = 0;

    // Calculate armSpeed based on the loaded record's duration
    if (totalDuration > 0) {
        armSpeed = (armEnd - armStart) / totalDuration;
    } else {
        armSpeed = 0;
        console.warn("Loaded record has zero duration, armSpeed set to 0.");
    }

    // Randomly select an end crackle sound
    const getEndCrackle = Math.random();
    if (getEndCrackle < 0.33) { endCrackle = crackleEnd1; }
    else if (getEndCrackle < 0.66) { endCrackle = crackleEnd2; }
    else { endCrackle = crackleEnd3; }
    console.log("Selected end crackle:", endCrackle ? endCrackle._src : "None");

    console.log("Record state reset for:", recordObj.name);
    console.log("Track queue length:", trackQueue.length);
    console.log("Calculated armSpeed:", armSpeed);

    if (record && record.playing) { // Assuming 'record' is the THREE.Mesh for the vinyl
        console.log("Setting record.playing to false");
        record.playing = false; // Custom property? Ensure this is intended.
    }

    console.log("Applying album art to record label...");
    // Apply art to the record label mesh (vinyl center)
    if (recordLabel && recordObj.art instanceof THREE.Texture) {
         recordLabel.material = new THREE.MeshStandardMaterial({
             map: recordObj.art,
             roughness: 0.16,
             metalness: 0.0
         });
         recordLabel.material.needsUpdate = true;
         console.log("Applied art to record label.");
    } else if (recordLabel) {
        console.warn("Record label exists, but no valid art texture found for:", recordObj.name);
        // Optionally apply default label art
    }


    record.visible = true;
<<<<<<< Updated upstream
    console.log("loaded record ", recordObj);
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
=======
    console.log("Record mesh set to visible.");

    audioLoaded = true; // Mark audio as ready
    console.log("Audio marked as loaded.");

    if (!recordLoaded) {
        mouseActive = true;
        clearTimeout(mouseActiveTimeout);
        mouseActiveTimeout = setTimeout(() => {
            mouseActive = false;
        }, powerDownDelay);
        console.log("Animating record onto deck...");
        record.position.y = recordInitialY + 1; // Start above
        gsap.to(record.position, {
            y: recordInitialY,
            duration: 1,
            ease: "power3.out",
            onComplete: () => { console.log("Record placement animation complete."); }
        });
        recordLoaded = true;
    } else {
        console.log("Record already on deck, no placement animation needed.");
    }

    console.log("Loaded record to deck:", recordObj.name);
    renderLibrary(); // Update library UI (e.g., disable load button)
}

async function loadRecordToDeckAnim(recordObj) {
    // --- Load Howls on demand FIRST if not already loaded ---
    // This ensures audio is ready before animations start
    const howls = await loadHowlsForRecord(recordObj);
    if (!howls || howls.length === 0) {
        console.error(`Failed to load audio tracks for ${recordObj.name}. Aborting animation.`);
        return;
    }
    // --- Howls are now guaranteed to be in recordObj.tracks ---

    // currentRecordLoaded = recordObj; // Set this inside loadRecordToDeck

    // 1: Stop playback
    rpmTarget = 0;
    yawTarget = yawBone.rotation.y;
    setTimeout(() => {
        dialTarget = dialPos2;
        isTransitioning = true;
    }, 200);
    setTimeout(() => {
        // Stop the *previous* track if it was playing
        if (trackQueue && trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
             trackQueue[currentTrackIndex].stop();
        }
    }, 250);

    gsap.to(speedDial.rotation, {
        y: dialPos2,
        duration: 0.25,
        ease: "power2.out",
    });

    dialTarget = dialPos2;

    // 2: Animate tonearm up and home
    await animateTonearmHome();

    // 3: Lift and spin current record (visual only)
    await animateRecordLiftAndSpin(recordObj); // Pass recordObj to potentially update art mid-spin

    // 4: Load new record data (art, playlist, etc.) and apply visuals
    // This now happens *after* the visual transition
    await loadRecordToDeck(recordObj); // Call the main function which handles Howl loading check

    isTransitioning = false;
    console.log("loadRecordToDeckAnim complete for:", recordObj.name);
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

function animateRecordLiftAndSpin(recordObj) { // Accept recordObj
    return new Promise((resolve) => {
        record.artUpdated = false; // Reset flag for art update
        const changeRecord = gsap.timeline({onComplete: resolve});
        record.rotation.x = 0;
        mouseActive = true;
        clearTimeout(mouseActiveTimeout);
        mouseActiveTimeout = setTimeout(() => {
            mouseActive = false;
        }, powerDownDelay);
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
                // Check if we've passed halfway to swap art texture on the label
                if (record.rotation.x >= Math.PI && !record.artUpdated && recordLabel && recordObj.art instanceof THREE.Texture) {
                     recordLabel.material.map = recordObj.art;
                     recordLabel.material.needsUpdate = true;
                     record.artUpdated = true;
                     console.log("Updated record label art mid-spin.");
                }
            }
        }, 0);

        changeRecord.to(record.position, {
            y: recordInitialY,
            duration: 0.75,
            ease: "power2.inOut"
        }, 1); // Start bringing down slightly after rotation starts
    });
}

function playNextTrack() {
    // Set the flag immediately
    movedToNextTrack = true;
    console.log("playNextTrack called, setting movedToNextTrack = true");

    currentTrackIndex++;
    if (currentTrackIndex < trackQueue.length) {
        console.log(`Playing next track: Index ${currentTrackIndex}`);
        if (trackQueue[currentTrackIndex]) {
            trackQueue[currentTrackIndex].play();
        } else {
            console.error(`Track at index ${currentTrackIndex} is invalid.`);
            // Handle error? Maybe try next track?
        }
    } else {
        console.log("Reached end of track queue.");
        currentTrackIndex = trackQueue.length - 1; // Stay on the last index
        // Note: The 'onend' of the *last* track should handle the endCrackle logic
    }

    // Reset the flag after a short delay
    setTimeout(() => {
        movedToNextTrack = false;
        console.log("Resetting movedToNextTrack = false");
    }, 200); // 200ms delay
}

function seekToPosition() {
    if (!trackQueue || !trackQueue.length || !trackQueue[currentTrackIndex]) return;
    isSeeking = true;

    let globalTime = posInRecord * totalDuration;

    let trackIndex = trackStartTimes.findIndex((startTime, i) =>
        globalTime >= startTime && (i === trackStartTimes.length - 1 || globalTime < trackStartTimes[i + 1])
    );

    if (trackIndex !== -1) {
        let trackTime = globalTime - trackStartTimes[trackIndex];

        if (trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
            trackQueue[currentTrackIndex].stop();
        }

        currentTrackIndex = trackIndex;
        if (trackQueue[currentTrackIndex]) {
            trackQueue[currentTrackIndex].seek(trackTime);
        }

        clearTimeout(seekTimeout);
        seekTimeout = setTimeout(() => {
            isSeeking = false;
        }, 200);
    } else {
         isSeeking = false;
         console.warn("Seek position resulted in invalid track index.");
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
    }, powerDownDelay);
})

document.addEventListener("mousedown", () => {
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
});

document.addEventListener("mouseup", () => {
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, powerDownDelay);

});

function onMouseUp(event) {
    controls.enableRotate = true;
    if(rpm > 1 && trackQueue && trackQueue.length > 0 && totalDuration > 0){
        seekToPosition();
    }
    isDragging = false;
    dragTarget = null;

    if (trackQueue && trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
        trackQueue[currentTrackIndex].stop();
    }

    pitchTarget.copy(pitchClone.quaternion);
    document.removeEventListener('mouseup', onMouseUp);
}

function changedSpeed(){
    if (trackQueue && trackQueue.length > 0 && totalDuration > 0) {
        seekToPosition();
    }
}

function replaceRecords(){
    if (!environment) {
        console.warn("replaceRecords called but environment not ready.");
        return;
    }
    console.log(`--- Running replaceRecords for environment ${envNum} ---`);
    console.log(`Positioning ${albumCollection.length} records.`);

    if(albumCollection.length > 0){
        albumCollection.forEach((record, index) => {
            if (!record.mesh || !record.recordHit) {
                console.warn(`Record ${record.name} missing mesh or recordHit during replaceRecords.`);
                return; // Skip if meshes aren't ready
            }
            const targetZ = environment.recordZ + (recordOffset * (index + 1));
            console.log(`Positioning record ${index} (${record.name}) to X:${environment.recordX}, Y:${environment.recordY}, Z:${targetZ}`);

            // Immediately set position for visibility
            record.mesh.position.set(environment.recordX, environment.recordY, targetZ);
            record.recordHit.position.set(environment.recordX, environment.recordY, targetZ);

            // Update target position and initialZ for animations/logic
            record.targetPosition.set(environment.recordX, environment.recordY, targetZ);
            record.initialZ = targetZ;

            // Ensure correct rotation (especially if switching env resets it)
            record.mesh.rotation.x = 1.294;
            record.recordHit.rotation.x = 1.294;
            record.targetRotation.setFromEuler(new THREE.Euler(1.294, 0, 0)); // Update target quaternion

>>>>>>> Stashed changes
        });
        revertSleeves(true); // Snap sleeves to their target positions immediately
        console.log("--- replaceRecords finished ---");
    } else {
         console.log("No records in collection to position.");
    }

<<<<<<< Updated upstream
    
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
=======
function changeScene(newSceneNum){
    if (!environment) return;
    console.log(`--- User/Load triggered changeScene to ${newSceneNum} ---`);
    // Update the global envNum *first*
    envNum = newSceneNum;
    // Update the environment instance's background property
    environment.background = newSceneNum;
    // Get the new lights for the environment instance
    //environment.lights = environment.getLights(envNum); // Use the updated global envNum
    // Call the environment handler's method to clear old and load new mesh/lights
    environment.changeScene(); // This uses the updated environment.background and environment.lights
    // Reposition records according to the new environment's coordinates
    replaceRecords();
    // Save the new setting
    saveSettings();
    console.log(`--- changeScene to ${newSceneNum} complete ---`);
}

function nudgeSleeves(currentSleeve){
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, powerDownDelay);
>>>>>>> Stashed changes
    animateLibrary = true;
    console.log(currentSleeve);
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
                    console.log("Moving Forward");
                    record.targetPosition.z = record.initialZ - 0.025;
                } else {
                    record.targetPosition.z = record.initialZ - 0.025;
                    console.log("Moving Backward");
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

<<<<<<< Updated upstream
function revertSleeves(){
=======
function revertSleeves(immediate = false){
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, powerDownDelay);
>>>>>>> Stashed changes
    albumCollection.forEach((record) => {
        if (immediate) {
            record.mesh.rotation.x = 1.294;
            record.mesh.position.y = environment.recordY;
            record.mesh.position.z = record.initialZ;
        }
        record.targetRotation.x = 1.294;
        if(envNum == 0){
            record.targetPosition.y = 0.0541;
        }
        if(envNum == 1){
            record.targetPosition.y = -0.153;
        }
        record.targetPosition.z = record.initialZ;
    });
    if (immediate) {
        animateLibrary = false;
    }
};

<<<<<<< Updated upstream
=======
function setBuilderButtonStates(enabled) {
	document.getElementById("loadTracksToBuilderBtn").disabled = false;
	document.getElementById("cancelBuildBtn").disabled = false;

	document.getElementById("addRecordBtn").disabled = !enabled;
	document.getElementById("fetchMetadataBtn").disabled = !enabled;
	document.getElementById("uploadArtBtn").disabled = !enabled;
}

>>>>>>> Stashed changes
function showRecordInfo(recordObj) {
    const panel = document.getElementById('recordInfoPanel');
    panel.classList.remove('hidden');
    document.getElementById('albumTitle').innerText = recordObj.name || "Unknown Album";
    document.getElementById('artistName').innerText = recordObj.artist || "Unknown Artist";
<<<<<<< Updated upstream
=======
    document.getElementById("editRecordBtn").onclick = async () => { // Make async
        // --- Load Howls before opening editor if needed ---
        await loadHowlsForRecord(recordObj);
        // ---
        editingRecord = recordObj;
        openBuilderForEditing(recordObj); // Now Howls are guaranteed to be loaded
        panel.classList.remove('visible');
    };
>>>>>>> Stashed changes
    
    const trackList = document.getElementById('trackList');
    trackList.innerHTML = '';
    if (recordObj.trackNames && recordObj.trackNames.length > 0) {
        recordObj.trackNames.forEach((name, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="track-number">${index + 1}.</span>
                <span class="track-title">${name || 'Untitled Track'}</span>
            `;
            trackList.appendChild(li);
        });
    } else {
        trackList.innerHTML = '<li>No track information available.</li>';
    }

    const applyArt = (texture) => {
        if (texture && texture.image) {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (texture.image.complete && texture.image.naturalWidth > 0) {
                    canvas.width = texture.image.naturalWidth;
                    canvas.height = texture.image.naturalHeight;
                    ctx.drawImage(texture.image, 0, 0);
                    const dataURL = canvas.toDataURL();
                    panel.style.setProperty('--bg-image', `url('${dataURL}')`);
                } else {
                    texture.image.onload = () => applyArt(texture);
                    texture.image.onerror = () => console.error("Texture image failed to load for panel background.");
                }
            } catch (e) {
                console.error("Error creating data URL for panel background:", e);
            }
        } else {
            console.log("No valid texture image found for panel background.");
        }
    };

    if (recordObj.art instanceof THREE.Texture) {
        applyArt(recordObj.art);
    } else if (isElectron && recordObj.artPath && userDataPath) {
        const fullArtPath = `file://${userDataPath}/${recordObj.artPath}`;
        textureLoader.load(fullArtPath,
            (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace;
                recordObj.art = texture;
                applyArt(texture);
            },
            undefined,
            (error) => {
                console.error(`Failed to load texture ${fullArtPath} for info panel:`, error);
            }
        );
    }

<<<<<<< Updated upstream
    document.getElementById('loadToPlayerBtn').onclick = () => {
        loadRecordToDeck(recordObj);
        //document.getElementById('recordInfoPanel').classList.add('hidden');
=======
    const loadBtn = document.getElementById('loadToPlayerBtn');
    const isAlreadyLoaded = currentRecordLoaded && recordObj.id === currentRecordLoaded.id;
    loadBtn.disabled = isAlreadyLoaded;

    loadBtn.onclick = async () => { // Make async
        if (isAlreadyLoaded) return;
        // --- Load Howls before triggering animation/load ---
        // No need to await here as loadRecordToDeck/Anim handles it
        // await loadHowlsForRecord(recordObj); // Removed redundant call
        // ---
        loadBtn.disabled = true;
        if (!recordLoaded) {
            await loadRecordToDeck(recordObj); // Await if needed elsewhere
        } else {
            await loadRecordToDeckAnim(recordObj); // Await if needed elsewhere
        }
>>>>>>> Stashed changes
    };

    document.getElementById('closePanelBtn').onclick = () => {
        panel.classList.remove('visible');
    };

     panel.classList.add('visible');
}

<<<<<<< Updated upstream
=======
async function openBuilderForEditing(recordObj) { // Make async
    document.getElementById('recordInfoPanel').classList.remove('visible');
    document.getElementById("recordBuildPanel").classList.remove("hidden");

    // --- Ensure Howls are loaded before accessing them ---
    await loadHowlsForRecord(recordObj);
    if (!recordObj.tracks || recordObj.tracks.length === 0) {
        console.error("Failed to load tracks for editing record:", recordObj.name);
        // Optionally show error and return
        alert(`Error: Could not load audio tracks for ${recordObj.name}. Cannot edit.`);
        document.getElementById("recordBuildPanel").classList.add("hidden"); // Hide panel again
        return;
    }
    // ---

    document.getElementById("builderTitle").value = recordObj.name;
    document.getElementById("builderArtist").value = recordObj.artist;

    // Copy data to the builder object
    recordBuilder.trackNames = [...recordObj.trackNames];
    recordBuilder.tracks = [...recordObj.tracks]; // Now contains Howls
    recordBuilder.startTimes = [...recordObj.startTimes];
    recordBuilder.duration = recordObj.duration;
    recordBuilder.trackPaths = [...recordObj.trackPaths]; // Keep paths too

    // Handle art display
    recordBuilder.art = null; // Reset builder art reference initially
    const builderArtImg = document.getElementById("builderAlbumArt");
    builderArtImg.src = "./defaultArt.png"; // Default

    const displayArt = (texture) => {
         if (texture && texture.image && texture.image.src) {
             builderArtImg.src = texture.image.src;
             // Store a reference to the texture or its source data if needed for saving changes
             // For simplicity, let's assume we might re-upload/re-save art if changed.
             // If we want to keep the original loaded art unless changed:
             // recordBuilder.art = { texture: texture }; // Or some way to reference it
         }
    };

    if (recordObj.art instanceof THREE.Texture) {
        displayArt(recordObj.art);
        // If saving requires raw data, we might need to fetch it if not stored elsewhere
        // For now, assume art needs re-upload if changed in builder
    }
    // Note: Electron art path loading logic was removed here, assuming texture is loaded

    // Render UI
    renderTrackListUI(); // This uses recordBuilder.tracks (now Howls)

    const addBtn = document.getElementById("addRecordBtn");
    addBtn.textContent = "Save Changes";
    setBuilderButtonStates(true); // Enable buttons as tracks are loaded
}

function resetBuilder() {
    recordBuilder.tracks = [];
    recordBuilder.trackNames = [];
    recordBuilder.startTimes = [];
    recordBuilder.duration = 0;
    recordBuilder.art = null;
    recordBuilder.trackPaths = [];

    document.getElementById("builderTitle").value = "";
    document.getElementById("builderArtist").value = "";
    document.getElementById("builderAlbumArt").src = "./defaultArt.png";

    const builderTrackList = document.getElementById("editableTrackList");
    builderTrackList.innerHTML = "";
    document.getElementById("noTracksMsg").style.display = "block";

    editingRecord = null;
    document.getElementById("addRecordBtn").textContent = "Add to Library";
    setBuilderButtonStates(false);
}

function updateTrackOrderFromDOM() {
    const listItems = document.querySelectorAll('#editableTrackList .builder-track-row');
    const newTrackNames = [];
    const newTracks = [];
    const newTrackPaths = [];

    listItems.forEach((item) => {
        const input = item.querySelector('.track-edit');
        const currentBuilderIndex = parseInt(item.dataset.index);

        if (currentBuilderIndex >= 0 && currentBuilderIndex < recordBuilder.tracks.length) {
            newTrackNames.push(input.value);
            newTracks.push(recordBuilder.tracks[currentBuilderIndex]);
            newTrackPaths.push(recordBuilder.trackPaths[currentBuilderIndex]);
        } else {
            console.error("Error finding track data during reorder for item:", item);
        }
    });

    recordBuilder.trackNames = newTrackNames;
    recordBuilder.tracks = newTracks;
    recordBuilder.trackPaths = newTrackPaths;

    recalculateStartTimes();
    renderTrackListUI();
    saveLibrary();
}

function renderTrackListUI() {
    const builderTrackList = document.getElementById("editableTrackList");
    builderTrackList.innerHTML = "";

    if (!recordBuilder.tracks || recordBuilder.tracks.length === 0) {
         document.getElementById("noTracksMsg").style.display = "block";
         setBuilderButtonStates(false);
         return;
    }

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
            recordBuilder.trackPaths.splice(i, 1);
            recalculateStartTimes();
            renderTrackListUI();
            saveLibrary();
        });

        builderTrackList.appendChild(li);
    });

    document.getElementById("noTracksMsg").style.display = "none";
    setBuilderButtonStates(true);
}

function recalculateStartTimes() {
    let runningTotal = 0;
    recordBuilder.startTimes = [];
    if (recordBuilder.tracks) {
        recordBuilder.tracks.forEach((track) => {
            const duration = (track && typeof track.duration === 'function') ? track.duration() : 0;
            recordBuilder.startTimes.push(runningTotal);
            runningTotal += duration;
        });
    }
    recordBuilder.duration = runningTotal;
}

>>>>>>> Stashed changes
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

<<<<<<< Updated upstream
=======
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

function applyAlbumArtToRecord(artSource, albumSleeveMesh, recordClass, isLabelUpdate) {

    // --- This function now primarily targets the SLEEVE mesh ---
    // Label art is handled in loadRecordToDeck / animateRecordLiftAndSpin

    if (isLabelUpdate) {
        // console.log("applyAlbumArtToRecord called for label update - skipping sleeve.");
        return; // Do nothing here for label updates
    }

    if (!albumSleeveMesh) {
        console.warn(`Cannot apply art to sleeve for ${recordClass?.name}: Sleeve mesh is missing.`);
        return;
    }

    if (artSource instanceof THREE.Texture) {
        // --- Case 1: Art source is already a THREE.Texture ---
        console.log(`Applying existing texture to sleeve mesh ${albumSleeveMesh.uuid} for ${recordClass?.name}`);
        albumSleeveMesh.material = new THREE.MeshStandardMaterial({
            map: artSource,
            roughness: 0.2,
            metalness: 0
        });
        albumSleeveMesh.material.needsUpdate = true;
        if (recordClass) recordClass.art = artSource; // Ensure recordClass has the texture reference

    } else if (artSource && artSource.data && artSource.format) {
        // --- Case 2: Art source is raw data { data: Uint8Array, format: string } ---
        console.log(`Applying raw art data to sleeve mesh ${albumSleeveMesh.uuid} for ${recordClass?.name}`);
        try {
            const blob = new Blob([artSource.data], { type: artSource.format });
            const imageUrl = URL.createObjectURL(blob);

            // Use textureLoader to load the blob URL
            textureLoader.load(
                imageUrl,
                (texture) => { // onLoad
                    console.log(`Texture loaded from raw data for sleeve ${albumSleeveMesh.uuid}`);
                    texture.colorSpace = THREE.SRGBColorSpace;
                    albumSleeveMesh.material = new THREE.MeshStandardMaterial({
                        map: texture,
                        roughness: 0.2,
                        metalness: 0
                    });
                    albumSleeveMesh.material.needsUpdate = true;
                    if (recordClass) recordClass.art = texture; // Store the loaded texture

                    // Clean up the object URL once the texture is loaded
                    URL.revokeObjectURL(imageUrl);
                },
                undefined, // onProgress
                (err) => { // onError
                    console.error(`Error loading texture from raw data for sleeve ${albumSleeveMesh.uuid}:`, err);
                    URL.revokeObjectURL(imageUrl); // Clean up even on error
                    // Optionally apply default material
                }
            );
        } catch (error) {
            console.error(`Error creating blob/URL from raw art data for sleeve ${albumSleeveMesh.uuid}:`, error);
            // Optionally apply default material
        }

    } else {
        // --- Case 3: No valid art source ---
        console.warn(`No valid art source provided for sleeve mesh ${albumSleeveMesh.uuid} for ${recordClass?.name}. Applying default.`);
        // Optionally apply a default material
        albumSleeveMesh.material = new THREE.MeshStandardMaterial({
             color: 0xcccccc, // Example default color
             roughness: 0.5,
             metalness: 0
         });
        albumSleeveMesh.material.needsUpdate = true;
        if (recordClass) recordClass.art = null; // Clear any previous art reference
    }
}

document.addEventListener('mousemove', (e) => {
	mouseScreenX = e.clientX;
	mouseScreenY = e.clientY;
});

function isPointerOverBlockingPanel() {
	const elementUnderCursor = document.elementFromPoint(mouseScreenX, mouseScreenY);
	if (!elementUnderCursor) return false;

	const blockingPanels = ['recordBuildPanel', 'recordInfoPanel', 'settingsPanel', 'libraryPanel'];

	return blockingPanels.some(id => {
		const el = document.getElementById(id);
		if (!el || !el.classList.contains('visible')) return false;
		return el.contains(elementUnderCursor);
	});
}

>>>>>>> Stashed changes
render();