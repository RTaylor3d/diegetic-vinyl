import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
import {Howl, Howler} from 'howler';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import Sortable from 'sortablejs';
import { gsap } from "gsap";
import { Environment } from './EnvironmentHandler.js';
import * as rive from "@rive-app/webgl2";

// --- Electron Detection ---
const isElectron = !!window.electronAPI;
let userDataPath = ''; // Will be fetched if in Electron

let mm = null;
if (!isElectron && typeof window !== "undefined") {
    // Polyfill Buffer if needed
    if (typeof window.Buffer === "undefined") {
        import('buffer').then(buf => {
            window.Buffer = buf.Buffer;
        });
    }
    // Import music-metadata-browser at top-level
    import('music-metadata-browser').then(module => {
        mm = module.parseBlob;
    }).catch(e => {
        mm = null;
        console.warn("music-metadata-browser could not be loaded, metadata will be skipped.", e);
    });
}

// Add class to body if in Electron
if (isElectron) {
    document.body.classList.add('is-electron');
}

// Helper to get basename
const getBasename = (filePath) => filePath.split(/[\\/]/).pop();

// --- BEGIN PATCH: Polyfill Buffer for music-metadata-browser in browser ---
if (!isElectron && typeof window !== "undefined" && typeof window.Buffer === "undefined") {
    import('buffer').then(buf => {
        window.Buffer = buf.Buffer;
    });
}
// --- END PATCH ---

// Set up variables
var isTransitioning = false;
var meshLoaded = false;
var audioLoaded = false;
var currentRecordLoaded = null;
var postProcessEnabled = true;
var initialSceneSet = false; // Flag to ensure scene is set only once
let environment = null;
const clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();
var rpm = 0;
var recordSpeed = 33;
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
var toneArmView = false;
var speedDial = null;
var yawBone = null;
var yawTarget = 0;
var dialTarget = 0;
var pitchBone = null;
var pitchClone = null;
var pitchTarget = new THREE.Quaternion(0, 0, 0, 0);
const mouse = new THREE.Vector2();
var mouseScreenX = 0;
var mouseScreenY = 0;
var needleLifted = true;
var recordEnded = false;
var recordLoaded = false;
var isDragging = false;
var mouseActive = false;
var camMoving = false;
var mouseActiveTimeout;
var mouseReleasedTimeout;
var powerDownDelay = 15000;
var dragStarted = false;
var isSeeking = false;
var animateLibrary = false;
var needleOverRecord = false;
var seekTimeout = null;
var dragTarget = null;
var envNum = 1;
var dragStartY = 0;
var totalDragDistance = 0;
var dragThreshold = 30;
var posInRecord = 0;
var armInitialY = 0;
var armInitialX = 0;
var armSpeed = 0;
var armStart = -0.540;
var armEnd = -0.834;
let warpOffsetYaw = 0;
let warpOffsetPitch = 0;
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
let resetBuilderTimeoutId = null; // Variable to store the reset timeout ID
let rawLoadedLibraryData = null; // <<<< ADDED: To store raw library data

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
        this.targetRotation = targetRotation ? new THREE.Quaternion().copy(targetRotation) : new THREE.Quaternion();
        this.targetPosition = targetPosition ? new THREE.Vector3().copy(targetPosition) : new THREE.Vector3();
        this.recordHit = null;
        this.trackPaths = trackPaths; // Array of original file paths (for saving)
        this.artPath = artPath; // Relative path to saved art (for saving/loading)
        this.tempPreviewUrl = null; // Initialize tempPreviewUrl
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
            // tempPreviewUrl is not saved to JSON, which is correct
        };
    }
}

var ambCrackle = new Howl({
    src: ['./vinyl-crackle-33rpm-6065.mp3'],
    rate: 1,
    volume: 0.6,
    loop: true,
    html5: false // Ensure Web Audio API
});

var crackleEnd1 = new Howl({
    src: ['./record_end_01.mp3'],
    rate: rpm / 45, 
    volume: 0.5,
    loop: true,
    html5: false // Ensure Web Audio API
});

var crackleEnd2 = new Howl({
    src: ['./record_end_02.mp3'],
    rate: rpm / 45, 
    volume: 0.5,
    loop: true,
    html5: false // Ensure Web Audio API
});

var crackleEnd3 = new Howl({
    src: ['./record_end_03.mp3'],
    rate: rpm / 45, 
    volume: 0.5,
    loop: true,
    html5: false // Ensure Web Audio API
});

var endCrackle = null;
var selectedLibraryRecord = null; // Variable to store the selected record object

// Set up Renderer
const renderer = new THREE.WebGLRenderer({antialias:false});
renderer.outputColorspace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x212121);
renderer.setPixelRatio(window.devicePixelRatio * 1.5);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.4;
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
        needleLifted = true;
    
        // Create a quaternion representing a local rotation around the x-axis
        let targetQuat = new THREE.Quaternion();
        let localAxis = new THREE.Vector3(0, 0, 1);
        localAxis.applyQuaternion(pitchBone.quaternion);
        targetQuat.setFromAxisAngle(localAxis, 0.05);
        pitchTarget.copy(pitchBone.quaternion).multiply(targetQuat);
        if(trackQueue.length > 0){
            stopAllTracks();
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
    sleeve = mesh.getObjectByName("sleeve");
    sleeveHit = mesh.getObjectByName("sleeveHit");
    sleeveHit.castShadow = false;
    sleeveHit.receiveShadow = false;
    checkInitialLoadComplete(); // Check if we can proceed after sleeve loads
});

const orbitTarget = new THREE.Object3D();
orbitTarget.position.set(0, 0.11, 0);
scene.add(orbitTarget);

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
controls.target = orbitTarget.position;
var controlsEnabled = true;
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
        initialLibraryLoaded = true; // Mark as "read" (no file to read)
        rawLoadedLibraryData = null; // Ensure it's null

        // --- FIX: Ensure environment is created in browser ---
        if (!environment) {
            environment = new Environment(scene, envNum);
            environment.lights = environment.getLights(envNum);
            environment.changeScene(intMan, moveCam);
        }
        // --- END FIX ---

        checkInitialLoadComplete(); // Check if meshes are ready
        return;
    }

    console.log("Running in Electron, attempting to load data...");
    try {
        userDataPath = await window.electronAPI.getUserDataPath(); // Get user data path
        if (userDataPath) userDataPath = userDataPath.replace(/\\/g, '/');
        console.log("User Data Path:", userDataPath);

        // Load Settings
        const loadedSettings = await window.electronAPI.loadSettings();

        if (loadedSettings) {
            console.log("Loaded settings:", loadedSettings);
            envNum = loadedSettings.envNum;
            postProcessEnabled = loadedSettings.postProcessEnabled ?? postProcessEnabled;
            const aaEnabled = loadedSettings.antialiasingEnabled ?? (renderer.getPixelRatio() > 1);
            renderer.setPixelRatio(window.devicePixelRatio * (aaEnabled ? 1.5 : 1));
            const crackleVolume = loadedSettings.crackleVolume ?? ambCrackle.volume();
            ambCrackle.volume(crackleVolume);
            crackleEnd1.volume(crackleVolume * 0.8);
            crackleEnd2.volume(crackleVolume * 0.8);
            crackleEnd3.volume(crackleVolume * 0.8);

            togglePostProcessing.checked = postProcessEnabled;
            toggleAntialiasing.checked = aaEnabled;
            crackleVolumeSlider.value = crackleVolume;
        } else {
            console.log("No settings file found or error loading, using defaults.");
        }

        environment = new Environment(scene, envNum);
        environment.lights = environment.getLights(envNum);
        environment.changeScene(intMan, moveCam);
        initialSettingsLoaded = true; // Mark settings as loaded

        // Load Library (but don't process yet, just store raw data)
        const loadedLibrary = await window.electronAPI.loadLibrary();
        if (loadedLibrary && loadedLibrary.length > 0) {
            rawLoadedLibraryData = loadedLibrary; // Store raw data
            console.log(`Stored ${rawLoadedLibraryData.length} raw records from library file.`);
        } else {
            console.log("No library data found or library is empty.");
            rawLoadedLibraryData = null; // Ensure it's null if no data
        }
        initialLibraryLoaded = true; // Mark library file as read (or not found)

        checkInitialLoadComplete(); // This will eventually trigger setInitialScene if all assets are ready

    } catch (error) {
        console.error("Error during initial data load:", error);
        initialSettingsLoaded = true; // Ensure flags are set even on error
        initialLibraryLoaded = true;
        rawLoadedLibraryData = null; // Ensure it's null on error
        checkInitialLoadComplete(); // Still attempt to call checkInitialLoadComplete
    }
}

async function processLoadedLibrary(libraryData) {
    console.log("Processing loaded library data (sleeve/hit assumed ready)...");
    albumCollection = []; // Clear existing collection for a full rebuild from libraryData
    const processedRecordIds = new Set(); // Keep track of IDs processed in this run

    if (!sleeve || !sleeveHit) { // This check is a safeguard.
        console.error("CRITICAL: processLoadedLibrary called but base sleeve models are not loaded!");
        return false; // Should not happen if called from setInitialScene correctly.
    }

    for (const recordData of libraryData) {
        if (!recordData || typeof recordData.id === 'undefined') {
            console.warn("Skipping invalid record data (missing id):", recordData);
            continue;
        }

        if (processedRecordIds.has(recordData.id)) {
            console.warn(`Duplicate record ID ${recordData.id} (${recordData.name}) found in libraryData. Skipping.`);
            continue;
        }

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
                recordData.targetRotation,
                recordData.targetPosition,
                recordData.trackPaths || [],
                recordData.artPath
            );

            // --- Create and add sleeve mesh ---
            const newSleeve = sleeve.clone(true);
            newSleeve.material = newSleeve.material.clone();
            const newSleeveHit = sleeveHit.clone(true);
            scene.add(newSleeve);
            scene.add(newSleeveHit);
            intMan.add(newSleeveHit);
            newRecord.mesh = newSleeve;
            newRecord.recordHit = newSleeveHit;

            // --- Position sleeve ---
            if (recordData.targetPosition && recordData.targetRotation) {
                 newRecord.targetPosition.set(recordData.targetPosition.x, recordData.targetPosition.y, recordData.targetPosition.z);
                 newRecord.targetRotation.set(recordData.targetRotation.x, recordData.targetRotation.y, recordData.targetRotation.z, recordData.targetRotation.w);
                 newSleeve.position.copy(newRecord.targetPosition);
                 newSleeve.quaternion.copy(newRecord.targetRotation);
                 newSleeveHit.position.copy(newRecord.targetPosition);
                 newSleeveHit.quaternion.copy(newRecord.targetRotation);
            } else {
                 const index = albumCollection.length; // Index before adding to collection (which happens later)
                 const zPos = environment.recordZ + (recordOffset * (index + 1));
                 const xPos = environment.recordX + getRandomArbitrary(-0.0015, 0.0015);
                 newSleeve.position.set(xPos, environment.recordY, zPos);
                 newSleeveHit.position.copy(newSleeve.position);
                 newSleeve.rotation.x = 1.294;
                 newSleeveHit.rotation.x = 1.294;
                 newRecord.initialZ = zPos;
                 newRecord.targetPosition.copy(newSleeve.position);
                 newRecord.targetRotation.copy(newSleeve.quaternion);
            }
            // console.log(`Initial position set for sleeve ${newSleeve.uuid}:`, newSleeve.position); // Log less verbosely

            // --- Load Art Texture (asynchronously) ---
            if (isElectron && newRecord.artPath && userDataPath) {
                const fullArtPath = `file:///${userDataPath}/${newRecord.artPath}`.replace(/\\/g, '/');
                textureLoader.load(
                    fullArtPath,
                    (texture) => {
                        texture.colorSpace = THREE.SRGBColorSpace;
                        newRecord.art = texture;
                        if (newRecord.mesh) {
                            applyAlbumArtToRecord(texture, newRecord.mesh, newRecord, false);
                        }
                    },
                    undefined,
                    (err) => {
                        console.error(`Error loading art texture for ${newRecord.name} from ${fullArtPath}:`, err);
                    }
                );
            } else {
                 // console.log(`No art path found or not in Electron for ${newRecord.name}. Skipping art load.`);
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
            processedRecordIds.add(newRecord.id);
            // console.log(`Successfully processed record metadata: ${newRecord.name}`);

        } catch (recordError) {
            console.error(`Error processing record data: ${recordData.name || 'Unknown'}`, recordError);
        }
    }
    console.log(`Finished processing ${albumCollection.length} records from library data.`);
    if (libraryPanel.classList.contains("visible")) {
        renderLibrary(); // Update library UI if visible
    }
    // DO NOT call replaceRecords() here. It will be called by setInitialScene.
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

async function setInitialScene() { // <<<< Make async
    // Only proceed if the scene hasn't been set and required meshes are loaded
    if (initialSceneSet || !meshLoaded || !sleeve || !sleeveHit) {
        if (initialSceneSet) console.log("setInitialScene called but scene already set.");
        else console.log("setInitialScene called but required meshes not ready.");
        return;
    }
    console.log("Setting initial scene...");

    // --- FIX: Ensure environment is created if not already (for browser) ---
    if (!environment) {
        environment = new Environment(scene, envNum);
        environment.lights = environment.getLights(envNum);
        environment.changeScene(intMan, moveCam);
    }
    // --- END FIX ---

    // If raw library data exists, process it now.
    // This ensures meshes are created when base sleeve/sleeveHit models are loaded.
    if (rawLoadedLibraryData && rawLoadedLibraryData.length > 0) {
        console.log("Processing raw library data within setInitialScene...");
        const processed = await processLoadedLibrary(rawLoadedLibraryData);
        if (!processed) {
            console.error("Failed to process library data within setInitialScene. Records may not appear correctly.");
        }
        rawLoadedLibraryData = null; // Clear raw data after processing
    } else if (rawLoadedLibraryData === null && albumCollection.length === 0) {
        console.log("No raw library data to process and album collection is empty.");
    }


    console.log("Positioning records via replaceRecords in setInitialScene.");
    replaceRecords(); // Position records according to the environment and loaded collection
    initialSceneSet = true;
    console.log("Initial scene setup complete (records positioned).");
    // checkInitialLoadComplete(); // No longer needed here, this is the culmination.
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

	const loadPromises = files.map(async (file, i) => {
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
            } else if (mm) {
                // --- PATCH: Use music-metadata-browser in web ---
                const metadata = await mm(file);
                if (metadata && metadata.common) {
                    title = metadata.common.title || file.name;
                    trackNumber = metadata.common.track && metadata.common.track.no ? metadata.common.track.no : null;

                    if (tempTrackNames.length === 0) {
                        if (metadata.common.album) {
                            document.getElementById("builderTitle").value = metadata.common.album;
                        }
                        if (metadata.common.artist) {
                            document.getElementById("builderArtist").value = metadata.common.artist;
                        }
                    }

                    if (!albumArtSet && metadata.common.picture && metadata.common.picture.length > 0) {
                        const image = metadata.common.picture[0];
                        const blob = new Blob([image.data], { type: image.format });
                        const blobUrl = URL.createObjectURL(blob);
                        document.getElementById("builderAlbumArt").src = blobUrl;
                        recordBuilder.art = { data: new Uint8Array(image.data), format: image.format };
                        albumArtSet = true;
                    }
                } else {
                    // fallback to filename parsing
                    const match = file.name.match(/^(\d+)?\s*-\s*(.+)\.\w+$/);
                    if (match) {
                        trackNumber = match[1] ? parseInt(match[1]) : null;
                        title = match[2] || file.name;
                    }
                }
                // --- END PATCH ---
            } else {
                // fallback to filename parsing
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
			const howlTrackId = Date.now() + Math.random(); // Unique ID for this Howl instance
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
                    // Only proceed if this is the current track and the Howl matches
                    if (
                        trackQueue &&
                        trackQueue[currentTrackIndex] === howl &&
                        !needleLifted &&
                        rpm > 1 &&
                        !isSeeking &&
                        !isTransitioning
                    ) {
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
    console.log("Add/Save button clicked. Current editingRecord:", editingRecord); // Optional logging
    if (recordBuilder.tracks.length === 0) {
        console.log("No tracks in builder, exiting.");
        return;
    }

    let recordToSave = editingRecord;
    let isNewRecord = !editingRecord;
    console.log(`isNewRecord determined as: ${isNewRecord}`); // Optional logging
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
        newSleeve.material = newSleeve.material.clone(); // Clone the material
        const newSleeveHit = sleeveHit.clone(true);
        console.log(`Created new sleeve mesh ${newSleeve.uuid} via builder`);
        scene.add(newSleeve);
        scene.add(newSleeveHit);
        intMan.add(newSleeveHit);


        newRecord.mesh = newSleeve;
        newRecord.artist = document.getElementById("builderArtist").value || "Unknown Artist";
        newRecord.name = document.getElementById("builderTitle").value || "Untitled Record";
        newRecord.tracks = [...recordBuilder.tracks];
        newRecord.trackNames = [...recordBuilder.trackNames];
        newRecord.startTimes = [...recordBuilder.startTimes];
        newRecord.duration = recordBuilder.duration;
        newRecord.trackPaths = [...recordBuilder.trackPaths];
        newRecord.artPath = savedArtPath; // Store the saved path
        newRecord.recordHit = newSleeveHit;

        // If art is coming from raw data in the builder, store the builder's preview URL
        if (artSourceForApplying && artSourceForApplying.data) {
            const builderArtImg = document.getElementById("builderAlbumArt");
            if (builderArtImg && builderArtImg.src && builderArtImg.src.startsWith("blob:")) {
                newRecord.tempPreviewUrl = builderArtImg.src;
                console.log(`Stored tempPreviewUrl for new record ${newRecord.name}: ${newRecord.tempPreviewUrl}`);
            }
        }

        applyAlbumArtToRecord(artSourceForApplying, newSleeve, newRecord, false);

        const index = albumCollection.length;
        const zPos = environment.recordZ + (recordOffset * (index + 1));
        newSleeve.position.set(environment.recordX + getRandomArbitrary(-0.0015, 0.0015), environment.recordY, zPos);
        newSleeveHit.position.copy(newSleeve.position);
        newSleeve.rotation.x = 1.294;
        newSleeveHit.rotation.x = 1.294;

        newRecord.initialZ = newSleeve.position.z;
        newRecord.targetPosition = newSleeve.position.clone();
        newRecord.targetRotation.copy(newSleeve.quaternion); // Correctly copy the quaternion

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
        recordToSave = newRecord;

    } else { // Editing existing record
        console.log("Updating existing record:", editingRecord.name); // Optional logging
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
            if (recordLabel && editingRecord.art instanceof THREE.Texture) {
                recordLabel.material.map = editingRecord.art;
                recordLabel.material.needsUpdate = true;
            }
            trackQueue = editingRecord.tracks;
            trackStartTimes = editingRecord.startTimes;
            totalDuration = editingRecord.duration;
            if (totalDuration > 0) armSpeed = (armEnd - armStart) / totalDuration;
            else armSpeed = 0;
        }
        recordToSave = editingRecord; // For saving
    }

    await saveLibrary(); // Save the updated library

    // Clear any pending reset timeout before setting a new one
    if (resetBuilderTimeoutId) {
        clearTimeout(resetBuilderTimeoutId);
        resetBuilderTimeoutId = null;
    }

    document.getElementById("addRecordBtn").textContent = "Add to Library"; // Reset button text
    document.getElementById("recordBuildPanel").classList.add("hidden");
    resetBuilderTimeoutId = setTimeout(resetBuilder, 300); // Store the new timeout ID

    // Explicitly re-render library if it's visible
    if (libraryPanel.classList.contains("visible")) {
        renderLibrary();
    }
});

document.getElementById("cancelBuildBtn").addEventListener("click", () => {
    // Clear any pending reset timeout before setting a new one
    if (resetBuilderTimeoutId) {
        clearTimeout(resetBuilderTimeoutId);
        resetBuilderTimeoutId = null;
    }
    document.getElementById("recordBuildPanel").classList.add("hidden");
    resetBuilderTimeoutId = setTimeout(resetBuilder, 300); // Store the new timeout ID
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

const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
bloomPass.threshold = 0.1;
bloomPass.strength = 0.1;
bloomPass.radius = 1;

const outputPass = new OutputPass();
const composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bokehPass );
composer.addPass( bloomPass );
composer.addPass( outputPass );

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
            endCrackle.rate(rpm / 45);
        }
    }  


    angularVelocity = (rpm * 2 * Math.PI) / 60;
    posInRecord = norm(yawBone.rotation.y, armStart, armEnd); 
});

const updateNonDeltaTone = fpsLimiter(15, (now) => {
    if(rpm < 0.1) return;
    /*
    if(pitchBone.rotation.x > -1.58){
        needleLifted = false;
        
    } else {
        needleLifted = true;
        recordEnded = false;
    }
    */
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

        // If needle is lifted, stop the current track only if it's playing.
        // This prevents resetting the seek position of a track that was just cued up
        // by seekToPosition() but hasn't started playing via the render loop yet.
        if (trackQueue && trackQueue[currentTrackIndex] && trackQueue[currentTrackIndex].playing()) {
            trackQueue[currentTrackIndex].stop();
        }
        // Removed stopAllTracks(); which was too aggressive here.
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
const libraryActions = document.getElementById("libraryActions"); // Get actions container
const libraryLoadBtn = document.getElementById("libraryLoadBtn"); // Get action buttons
const libraryEditBtn = document.getElementById("libraryEditBtn");
const libraryDeleteBtn = document.getElementById("libraryDeleteBtn");
// --- Add references to sorting controls ---
const sortByArtistRadio = document.getElementById("sortByArtist");
const sortByAlbumRadio = document.getElementById("sortByAlbum");
const sortOrderToggle = document.getElementById("sortOrderToggle");

closeLibraryBtn.addEventListener("click", () => {
	libraryPanel.classList.remove("visible");
    clearLibrarySelection(); // Clear selection on close
});

// --- Add event listeners for sorting controls ---
sortByArtistRadio.addEventListener('change', renderLibrary);
sortByAlbumRadio.addEventListener('change', renderLibrary);
sortOrderToggle.addEventListener('change', renderLibrary);
// ---

// Function to activate/deactivate action buttons
function setLibraryActionsActive(active, isAlreadyLoaded = false) {
    libraryLoadBtn.disabled = !active || isAlreadyLoaded;
    libraryEditBtn.disabled = !active;
    libraryDeleteBtn.disabled = !active;

    // Optional: Add/remove a class for visual styling if needed beyond :disabled
    const buttons = [libraryLoadBtn, libraryEditBtn, libraryDeleteBtn];
    buttons.forEach(btn => {
        if (active && !btn.disabled) { // Only add 'active' if enabled
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Function to clear selection
function clearLibrarySelection() {
    selectedLibraryRecord = null;
    const selectedItem = libraryList.querySelector('.library-item.selected');
    if (selectedItem) {
        selectedItem.classList.remove('selected');
    }
    setLibraryActionsActive(false); // Deactivate and disable buttons
}

function renderLibrary() {
	libraryList.innerHTML = "";
    clearLibrarySelection(); // Clear selection and disable buttons when re-rendering

    if (!albumCollection || albumCollection.length === 0) {
        libraryList.innerHTML = "<li>No records in library.</li>";
        return;
    }

	// --- Sorting Logic (uses the control elements directly) ---
	const sortBy = document.querySelector('input[name="sortBy"]:checked').value;
	const descending = sortOrderToggle.checked;

	const sortedRecords = [...albumCollection].sort((a, b) => {
		const fieldA = sortBy === "artist" ? (a.artist || "") : (a.name || "");
		const fieldB = sortBy === "artist" ? (b.artist || "") : (b.name || "");
		return descending
			? fieldB.localeCompare(fieldA)
			: fieldA.localeCompare(fieldB);
	});
    // --- End Sorting Logic ---


	sortedRecords.forEach((record) => {
		const li = document.createElement("li");
		li.classList.add("library-item");
        li.dataset.recordId = record.id; // Store ID for easy retrieval

        // Determine art source for thumbnail
        let artSrc = './defaultArt.png'; // Default art

        if (record.tempPreviewUrl && record.tempPreviewUrl.startsWith('blob:')) { // PRIORITY 1: Use temp blob URL if available (good for newly added)
            artSrc = record.tempPreviewUrl;
        } else if (record.art instanceof THREE.Texture && record.art.image && record.art.image.src) { // PRIORITY 2: Use texture's image src
            artSrc = record.art.image.src;
        } else if (isElectron && record.artPath && userDataPath) { // PRIORITY 3: Use saved file path for Electron
            artSrc = `file:///${userDataPath}/${record.artPath}`.replace(/\\/g, '/');
        }
        // Note: If art wasn't loaded yet for non-Electron, it might show default

		li.innerHTML = `
            <img src="${artSrc}" alt="${record.name || 'Album Art'}" onerror="this.onerror=null;this.src='./defaultArt.png';"> <!-- Added onerror fallback -->
            <div class="library-item-info">
                <span class="library-item-title">${record.name || "Untitled"}</span>
                <span class="library-item-artist">${record.artist || "Unknown"}</span>
            </div>
		`;

        // --- Add Click Listener for Selection ---
        li.addEventListener('click', () => {
            // Clear previous selection visually, but keep buttons disabled until new selection is processed
            const previouslySelectedItem = libraryList.querySelector('.library-item.selected');
            if (previouslySelectedItem) {
                previouslySelectedItem.classList.remove('selected');
            }

            // Set new selection
            li.classList.add('selected');
            selectedLibraryRecord = record;

            // Determine if the selected record is already loaded
            const isAlreadyLoaded = currentRecordLoaded && record.id === currentRecordLoaded.id;

            // Activate and enable/disable buttons based on selection and load state
            setLibraryActionsActive(true, isAlreadyLoaded);
        });

		libraryList.appendChild(li);
	});
}

// --- Add Event Listeners for Action Buttons ---
libraryLoadBtn.addEventListener('click', async () => {
    if (!selectedLibraryRecord || libraryLoadBtn.disabled) return;

    // Disable button during load (already handled by setLibraryActionsActive logic, but good practice)
    libraryLoadBtn.disabled = true;
    libraryLoadBtn.classList.remove('active');

    // --- Restore Load Logic ---
    if (!recordLoaded) {
        await loadRecordToDeck(selectedLibraryRecord);
    } else {
        await loadRecordToDeckAnim(selectedLibraryRecord);
    }
    // --- End Restore Load Logic ---

    libraryPanel.classList.remove('visible'); // Close panel after loading
    // clearLibrarySelection(); // Selection is cleared by renderLibrary on reopen
});

libraryEditBtn.addEventListener('click', async () => {
    if (!selectedLibraryRecord || libraryEditBtn.disabled) return; // Check disabled state

    // --- Restore Edit Logic ---
    await loadHowlsForRecord(selectedLibraryRecord); // Ensure tracks are loaded before editing
    openBuilderForEditing(selectedLibraryRecord);
    // --- End Restore Edit Logic ---

    libraryPanel.classList.remove('visible');
    // clearLibrarySelection(); // Selection is cleared by renderLibrary on reopen
});

libraryDeleteBtn.addEventListener('click', async () => {
    if (!selectedLibraryRecord || libraryDeleteBtn.disabled) return; // Check disabled state

    // --- Restore Delete Logic ---
    const recordToDelete = selectedLibraryRecord; // Store reference before clearing selection
    const recordName = recordToDelete.name || "this record";

    if (confirm(`Are you sure you want to delete "${recordName}"? This cannot be undone.`)) {
        const index = albumCollection.findIndex(r => r.id === recordToDelete.id);
        if (index !== -1) {
            // Remove mesh from scene and interaction manager
            if (recordToDelete.mesh) {
                scene.remove(recordToDelete.mesh);
                // Dispose geometry/material if necessary (optional for performance)
                // recordToDelete.mesh.geometry?.dispose();
                // recordToDelete.mesh.material?.dispose();
            }
            if (recordToDelete.recordHit) {
                scene.remove(recordToDelete.recordHit);
                intMan.remove(recordToDelete.recordHit);
            }

            // Remove from collection
            albumCollection.splice(index, 1);

            // If the deleted record was the currently loaded one, clear the deck state
            if (currentRecordLoaded && currentRecordLoaded.id === recordToDelete.id) {
                // TODO: Add logic to visually clear the deck (e.g., hide record, reset arm)
                currentRecordLoaded = null;
                record.visible = false; // Hide the vinyl mesh
                // Optionally animate arm home etc.
                animateTonearmHome();
                rpmTarget = 0; // Stop platter
                dialTarget = dialPos2;
                audioLoaded = false;
                trackQueue = [];
                currentTrackIndex = 0;
                console.log("Deleted the currently loaded record. Deck cleared.");
            }
    // --- End Restore Delete Logic ---

            // Clear selection state (already does this)
            clearLibrarySelection();

            // Save and update UI
            await saveLibrary();
            renderLibrary(); // Re-render the list (already does this)
            replaceRecords(); // Re-position remaining records
        }
    }
});


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
        renderLibrary(); // Render library when opening (this calls clearLibrarySelection which disables buttons)
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
        // Clear any pending reset timeout when opening for a new build
        if (resetBuilderTimeoutId) {
            clearTimeout(resetBuilderTimeoutId);
            resetBuilderTimeoutId = null;
            console.log("Cleared pending resetBuilder timeout on opening new builder.");
        }
        libraryPanel.classList.remove('visible');
        resetBuilder(); // Reset state immediately for a new record build
        document.getElementById('recordBuildPanel').classList.remove('hidden'); // Show panel *after* reset
        // setBuilderButtonStates(false); // resetBuilder calls renderTrackListUI which handles button state
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

// Add this at the top-level (global for this module)
let camMoveId = 0;

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

            const canAutoMove = (
                !needleLifted && 
                !isDragging && 
                dragTarget !== toneArm 
                && audioLoaded 
                && trackQueue.length > 0 
                && rpm > 1
            );

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
            }
        }

        updateNonDeltaTone();

        if (isDragging && dragTarget == toneArm) {
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

        if (yawBone.rotation.y < armStart && yawBone.rotation.y > armEnd && dragTarget != toneArm && trackQueue && trackQueue.length > 0 && rpm > 1) {
            normalizedRotation = (record.rotation.y % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        
            // Smaller values for gentle movement
            const yawAmount = 0.000001 * (1.7 - posInRecord);
            const pitchAmount = 0.000075 * (1.1 - (posInRecord * 0.75));
        
            if (normalizedRotation < 6.2 && normalizedRotation > 3.1) {
                warpOffsetYaw -= yawAmount;
            }
            if (normalizedRotation < 3.1 && normalizedRotation > 0) {
                warpOffsetYaw += yawAmount;
            }
        
            if (normalizedRotation < 6 && normalizedRotation > 5.3) {
                warpOffsetPitch -= pitchAmount;
            }
            if (normalizedRotation < 5.3 && normalizedRotation > 4.6) {
                warpOffsetPitch += pitchAmount;
            }
        
            // Clamp offsets to prevent runaway drift
            warpOffsetYaw = THREE.MathUtils.clamp(warpOffsetYaw, -0.01, 0.01);
            warpOffsetPitch = THREE.MathUtils.clamp(warpOffsetPitch, -0.02, 0.02);


            
        } else {
            // Gradually return to zero when not warping
            warpOffsetYaw = THREE.MathUtils.lerp(warpOffsetYaw, 0, 0.05);
            warpOffsetPitch = THREE.MathUtils.lerp(warpOffsetPitch, 0, 0.05);
        }

        yawBone.rotation.y += warpOffsetYaw;
        pitchBone.rotation.x += warpOffsetPitch;
    }

    if(toneArmView){
        const needlePos = new THREE.Vector3();
        toneArmNeedle.getWorldPosition(needlePos);
        orbitTarget.position.x = THREE.MathUtils.lerp(orbitTarget.position.x, needlePos.x, 0.01);
        orbitTarget.position.z = THREE.MathUtils.lerp(orbitTarget.position.z, needlePos.z, 0.01);
    }
    
    if (animateLibrary) {
        albumCollection.forEach((record) => {
            // Lerp position for mesh (x, y, and z)
            record.mesh.position.x = THREE.MathUtils.lerp(record.mesh.position.x, record.targetPosition.x, 0.12);
            record.mesh.position.y = THREE.MathUtils.lerp(record.mesh.position.y, record.targetPosition.y, 0.1225);
            record.mesh.position.z = THREE.MathUtils.lerp(record.mesh.position.z, record.targetPosition.z, 0.125);

            // Slerp quaternion for mesh
            record.mesh.quaternion.slerp(record.targetRotation, 0.12);

            // Update hitbox to match mesh
            if (record.recordHit) {
                record.recordHit.position.copy(record.mesh.position);
                record.recordHit.quaternion.copy(record.mesh.quaternion);
            }
        });
    }

    updateIntMan();
    if(controlsEnabled){
        controls.update();
    }
    if (mouseActive || rpm > 0.1 || camMoving) {
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
            const howlTrackId = Date.now() + Math.random(); // Unique ID for this Howl instance
            const howl = new Howl({
                src: [srcPath],
                html5: false, // Force Web Audio API
                onload: () => {
                    console.log(`Howl loaded: ${srcPath}`);
                    loadedTracks[index] = howl; // Place howl in correct index
                    resolve(howl);
                },
                onend: function () {
                    // Only proceed if this is the current track and the Howl matches
                    if (
                        trackQueue &&
                        trackQueue[currentTrackIndex] === howl &&
                        !needleLifted &&
                        rpm > 1 &&
                        !isSeeking &&
                        !isTransitioning
                    ) {
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
        });
    }));

    console.log(`Finished loading ${loadedTracks.length} Howls for: ${recordObj.name}`);
    recordObj.tracks = loadedTracks; // Assign loaded Howls back to the record object
    return loadedTracks;
}

async function loadRecordToDeck(recordObj) {
    console.log("Attempting to load record to deck:", recordObj ? recordObj.name : "Invalid Object");

    if (!recordObj) { // Removed !recordObj.tracks check here, will load them below
        console.error("Attempted to load invalid record object:", recordObj);
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

    console.log("Stopping current track if playing...");
    // Use the globally scoped trackQueue and currentTrackIndex
    stopAllTracks();

    currentRecordLoaded = recordObj;
    audioLoaded = false; // Mark as false until Howls are confirmed loaded (though loadHowlsForRecord awaits)
    trackQueue = recordObj.tracks; // Assign the loaded Howls
    trackStartTimes = recordObj.startTimes || []; // Use pre-calculated start times from JSON
    totalDuration = recordObj.duration || 0; // Use pre-calculated total duration from JSON
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
        stopAllTracks();
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
    movedToNextTrack = true;
    console.log("playNextTrack called, setting movedToNextTrack = true");

    // Stop all tracks before playing the next one
    stopAllTracks();

    currentTrackIndex++;
    if (currentTrackIndex < trackQueue.length) {
        console.log(`Playing next track: Index ${currentTrackIndex}`);
        if (trackQueue[currentTrackIndex]) {
            trackQueue[currentTrackIndex].play();
        } else {
            console.error(`Track at index ${currentTrackIndex} is invalid.`);
        }
    } else {
        console.log("Reached end of track queue.");
        currentTrackIndex = trackQueue.length - 1;
    }

    setTimeout(() => {
        movedToNextTrack = false;
        console.log("Resetting movedToNextTrack = false");
    }, 200);
}

function seekToPosition() {
    if (!trackQueue || !trackQueue.length || totalDuration <= 0) {
        isSeeking = false; // Ensure isSeeking is reset if no tracks or duration
        return;
    }
    isSeeking = true;

    // posInRecord is updated in updateRpm and clamped by updateNonDeltaTone, should be [0,1]
    let globalTime = posInRecord * totalDuration;

    let trackIndex = -1;
    if (trackStartTimes && trackStartTimes.length > 0) {
        trackIndex = trackStartTimes.findIndex((startTime, i) =>
            globalTime >= startTime && (i === trackStartTimes.length - 1 || globalTime < trackStartTimes[i + 1])
        );
    }

    if (trackIndex !== -1 && trackQueue[trackIndex]) {
        let trackTime = globalTime - trackStartTimes[trackIndex];

        // The track at the *old* currentTrackIndex was already stopped by stopAllTracks() on mousedown,
        // or by changedSpeed() before calling this. The stop() call resets seek to 0.
        // This function will now set the correct seek position.

        currentTrackIndex = trackIndex; // Update to the new track index

        const currentTrackInstance = trackQueue[currentTrackIndex];
        const currentTrackDuration = currentTrackInstance.duration();

        // Ensure trackTime is valid and within the specific track's bounds
        if (trackTime < 0) trackTime = 0;
        // If trackTime exceeds duration, Howler's seek usually handles it by seeking to the end.
        // Clamping explicitly can prevent issues if onend logic is sensitive.
        if (trackTime > currentTrackDuration) trackTime = currentTrackDuration;

        currentTrackInstance.seek(trackTime); // Seek the new current track

        // Playback will be handled by the render loop's logic
        // when needleLifted is false, RPM > 1, and other conditions are met.

        clearTimeout(seekTimeout);
        seekTimeout = setTimeout(() => {
            isSeeking = false;
        }, 200); // Timeout to prevent onend from firing due to seek
    } else {
        // If no valid track is found (e.g., globalTime is out of bounds, or trackStartTimes is empty)
        // console.warn("Seek position resulted in invalid track index or track not found.");
        isSeeking = false;
        // currentTrackIndex remains unchanged if no valid new track is found.
        // Consider if any cleanup (like stopping all tracks) is needed here,
        // but it might be too disruptive if called frequently due to edge cases.
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
    if(controlsEnabled){
        controls.enableRotate = true;
    }
    if(rpm > 1 && trackQueue && trackQueue.length > 0 && totalDuration > 0){
        seekToPosition();
        clearTimeout(mouseReleasedTimeout);
        mouseReleasedTimeout = setTimeout(() => {
            needleLifted = false;
            // --- FIX: If recordEnded, allow playback to resume on tonearm drop ---
            if (recordEnded) {
                recordEnded = false;
            }
        }, 250);
    }
    isDragging = false;
    dragTarget = null;

    pitchTarget.copy(pitchClone.quaternion);
    document.removeEventListener('mouseup', onMouseUp);
}

function changedSpeed(){
    if (trackQueue && trackQueue.length > 0 && totalDuration > 0) {
        stopAllTracks();
        seekToPosition();
    }
}

function replaceRecords(){
    if (!environment) {
        console.warn("replaceRecords called but environment not ready.");
        return;
    }
    // console.log(`--- Running replaceRecords for environment ${envNum} ---`);
    // console.log(`Positioning ${albumCollection.length} records.`);

    if(albumCollection.length > 0){
        albumCollection.forEach((record, index) => {
            if (!record.mesh || !record.recordHit) {
                console.warn(`Record ${record.name} missing mesh or recordHit during replaceRecords.`);
                return; // Skip if meshes aren't ready
            }
            const targetZ = environment.recordZ + (recordOffset * (index + 1));
            const targetX = environment.recordX + getRandomArbitrary(-0.0015, 0.0015); // <<<< ADDED random X offset
            // console.log(`Positioning record ${index} (${record.name}) to X:${targetX}, Y:${environment.recordY}, Z:${targetZ}`);

            // Immediately set position for visibility
            record.mesh.position.set(targetX, environment.recordY, targetZ);
            record.recordHit.position.set(targetX, environment.recordY, targetZ);

            // Update target position and initialZ for animations/logic
            record.targetPosition.set(targetX, environment.recordY, targetZ);
            record.initialZ = targetZ;

            // Ensure correct rotation (especially if switching env resets it)
            // If rotation is stored in targetRotation (Quaternion), use that.
            // Forcing Euler here might override saved rotations if they differ.
            // Assuming 1.294 is the standard "at rest" rotation.
            if (record.targetRotation) { // Check if targetRotation is set
                record.mesh.quaternion.copy(record.targetRotation);
                record.recordHit.quaternion.copy(record.targetRotation);
            } else { // Fallback to default if not set (should be set by NewRecord or processLoadedLibrary)
                record.mesh.rotation.x = 1.294;
                record.recordHit.rotation.x = 1.294;
                record.targetRotation.setFromEuler(new THREE.Euler(1.294, 0, 0));
            }


        });
        revertSleeves(true); // Snap sleeves to their target positions immediately
        // console.log("--- replaceRecords finished ---");
    } else {
         // console.log("No records in collection to position.");
    }
}

function changeScene(newSceneNum){
    if (!environment) return;
    console.log(`--- User/Load triggered changeScene to ${newSceneNum} ---`);
    intMan.remove(environment.recordBlocker);   
    // Update the global envNum *first*
    envNum = newSceneNum;
    // Update the environment instance's background property
    environment.background = newSceneNum;
    // Get the new lights for the environment instance
    //environment.lights = environment.getLights(envNum); // Use the updated global envNum
    // Call the environment handler's method to clear old and load new mesh/lights
    environment.changeScene(intMan, moveCam); // This uses the updated environment.background and environment.lights

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
    animateLibrary = true;
    albumCollection.forEach((record, idx) => {
        const euler = new THREE.Euler(0, 0, 0, 'XYZ');
        if (currentSleeve === 0) {
            // If hovering over the first record:
            if (idx === 0) {
                // Move the first record up by 0.05 along its local Y axis
                // Calculate offset in world space, then add to current position
                const up = new THREE.Vector3(0, 0, 1);
                up.applyQuaternion(record.mesh.quaternion);
                const offset = up.multiplyScalar(-0.025);
                record.targetPosition.copy(record.mesh.position).add(offset);
                // Keep rotation unchanged
                record.targetRotation.copy(record.mesh.quaternion);
            } else if (idx > 0) {
                // Rotate records after the first
                euler.x = 1.6;
                record.targetRotation.setFromEuler(euler);
            }
        } else {
            // Existing behaviour for other records
            if(idx > currentSleeve){
                euler.x = 1.6;
                record.targetRotation.setFromEuler(euler);
            }
            if(idx == currentSleeve){
                if(currentSleeve < albumCollection.length - 1 && currentSleeve != 0){
                    record.targetPosition.y = environment.recordY + 0.05;
                    if(currentSleeve > 1){
                        record.targetPosition.z = record.initialZ - 0.001;
                    }
                }
                euler.x = 1.45;
                record.targetRotation.setFromEuler(euler);
                record.targetPosition.y = environment.recordY + 0.05;
            }
        }
    });
};

function revertSleeves(immediate = false){
    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, powerDownDelay);

    const defaultEuler = new THREE.Euler(1.294, 0, 0, 'XYZ');

    albumCollection.forEach((record) => {
        if (immediate) {
            record.mesh.quaternion.setFromEuler(defaultEuler);
            record.mesh.position.y = environment.recordY;
            record.mesh.position.z = record.initialZ;
            record.mesh.position.x = record.targetPosition.x; // Ensure X is also set if it was part of target

            if (record.recordHit) {
                record.recordHit.position.copy(record.mesh.position);
                record.recordHit.quaternion.copy(record.mesh.quaternion);
            }
        }
        record.targetRotation.setFromEuler(defaultEuler);
        record.targetPosition.y = environment.recordY;
        record.targetPosition.z = record.initialZ;
    });
    if (immediate) {
        animateLibrary = false;
    }
};

function setBuilderButtonStates(enabled) {
	document.getElementById("loadTracksToBuilderBtn").disabled = false;
	document.getElementById("cancelBuildBtn").disabled = false;

	document.getElementById("addRecordBtn").disabled = !enabled;
	document.getElementById("fetchMetadataBtn").disabled = !enabled;
	document.getElementById("uploadArtBtn").disabled = !enabled;
}

function showRecordInfo(recordObj) {
    const panel = document.getElementById('recordInfoPanel');
    panel.classList.remove('hidden');
    document.getElementById('albumTitle').innerText = recordObj.name || "Unknown Album";
    document.getElementById('artistName').innerText = recordObj.artist || "Unknown Artist";
    document.getElementById("editRecordBtn").onclick = async () => { // Make async
        // --- Load Howls before opening editor if needed ---
        await loadHowlsForRecord(recordObj);
        // ---
        editingRecord = recordObj;
        openBuilderForEditing(recordObj); // Now Howls are guaranteed to be loaded
        panel.classList.remove('visible');
    };
    
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
    };

    document.getElementById('closePanelBtn').onclick = () => {
        panel.classList.remove('visible');
    };

     panel.classList.add('visible');
}

async function openBuilderForEditing(recordObj) { // Make async
    // Clear any pending reset timeout when opening for edit
    if (resetBuilderTimeoutId) {
        clearTimeout(resetBuilderTimeoutId);
        resetBuilderTimeoutId = null;
        console.log("Cleared pending resetBuilder timeout on opening editor.");
    }

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

    editingRecord = recordObj; // Set the global variable *before* populating UI

    document.getElementById("builderTitle").value = recordObj.name;
    document.getElementById("builderArtist").value = recordObj.artist;

    // Copy data to the builder object
    recordBuilder.trackNames = [...recordObj.trackNames];
    recordBuilder.tracks = [...recordObj.tracks]; // Now contains Howls
    recordBuilder.startTimes = [...recordObj.startTimes];
    recordBuilder.duration = recordObj.duration;
    recordBuilder.trackPaths = [...recordObj.trackPaths]; // Keep paths too

    // Handle art display
    recordBuilder.art = null; // Reset builder art reference initially. If user uploads new art, this will be populated.
                              // If they don't, existing art on editingRecord is preserved on save.
    const builderArtImg = document.getElementById("builderAlbumArt");
    builderArtImg.src = "./defaultArt.png"; // Default

    if (recordObj.tempPreviewUrl && recordObj.tempPreviewUrl.startsWith('blob:')) {
        builderArtImg.src = recordObj.tempPreviewUrl;
    } else if (recordObj.art instanceof THREE.Texture && recordObj.art.image && recordObj.art.image.src) {
        builderArtImg.src = recordObj.art.image.src;
    } else if (isElectron && recordObj.artPath && userDataPath) {
        // This case is more for records loaded from disk, but good as a fallback.
        const fullArtPath = `file:///${userDataPath}/${recordObj.artPath}`.replace(/\\/g, '/');
        builderArtImg.src = fullArtPath;
    }
    // Note: The recordBuilder.art object itself is not populated here from recordObj.art.
    // This is intentional. If the user wants to change the art, they will use the "Upload Art" button,
    // which will populate recordBuilder.art. If they don't change it, the save logic
    // in addRecordBtn correctly uses the existing editingRecord.art (Texture) or artPath.

    // Render UI
    renderTrackListUI(); // This uses recordBuilder.tracks (now Howls)

    const addBtn = document.getElementById("addRecordBtn");
    addBtn.textContent = "Save Changes";
    setBuilderButtonStates(true); // Enable buttons as tracks are loaded
}

function resetBuilder() {
    console.log("Resetting builder..."); // Optional logging
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

    editingRecord = null; // Clear the editing state
    document.getElementById("addRecordBtn").textContent = "Add to Library";
    setBuilderButtonStates(false); // Disable action buttons initially
    resetBuilderTimeoutId = null; // Clear the stored ID as the timeout has fired
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

function applyAlbumArtToRecord(artSource, albumSleeveMesh, recordClass, isLabelUpdate) {

    // --- This function now primarily targets the SLEEVE mesh ---
    // Label art is handled in loadRecordToDeck / animateRecordLiftAndSpin

    if (isLabelUpdate) {
        return; // Do nothing here for label updates
    }

    if (!albumSleeveMesh) {
        console.warn(`Cannot apply art to sleeve for ${recordClass?.name}: Sleeve mesh is missing.`);
        return;
    }
    // Ensure the mesh has a material (it should if cloned correctly)
    if (!albumSleeveMesh.material) {
        console.warn(`Sleeve mesh ${albumSleeveMesh.uuid} is missing material. Creating default.`);
        albumSleeveMesh.material = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5, metalness: 0 });
    } else if (!albumSleeveMesh.material.isMeshStandardMaterial) {
        console.warn(`Sleeve mesh ${albumSleeveMesh.uuid} has unexpected material type. Replacing.`);
        albumSleeveMesh.material = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5, metalness: 0 });
    }


    if (artSource instanceof THREE.Texture) {
        // --- Case 1: Art source is already a THREE.Texture ---
        console.log(`Applying existing texture to sleeve mesh ${albumSleeveMesh.uuid} for ${recordClass?.name}`);
        albumSleeveMesh.material.map = artSource;
        albumSleeveMesh.material.roughness = 0.2; // Ensure desired roughness/metalness
        albumSleeveMesh.material.metalness = 0;
        albumSleeveMesh.material.color.set(0xffffff); // Reset color tint if any
        albumSleeveMesh.material.needsUpdate = true;
        if (recordClass) {
            recordClass.art = artSource; // Ensure recordClass has the texture reference
            // No longer deleting recordClass.tempPreviewUrl here
        }

    } else if (artSource && artSource.data && artSource.format) {
        // --- Case 2: Art source is raw data { data: Uint8Array, format: string } ---
        console.log(`Applying raw art data to sleeve mesh ${albumSleeveMesh.uuid} for ${recordClass?.name}`);
        try {
            const blob = new Blob([artSource.data], { type: artSource.format });
            const imageUrl = URL.createObjectURL(blob); // This URL is for the texture loader

            textureLoader.load(
                imageUrl,
                (texture) => { // onLoad
                    console.log(`Texture loaded from raw data for sleeve ${albumSleeveMesh.uuid}`);
                    texture.colorSpace = THREE.SRGBColorSpace;

                    albumSleeveMesh.material.map = texture;
                    albumSleeveMesh.material.roughness = 0.2;
                    albumSleeveMesh.material.metalness = 0;
                    albumSleeveMesh.material.color.set(0xffffff);
                    albumSleeveMesh.material.needsUpdate = true;
                    console.log(`Updated map on existing material for sleeve ${albumSleeveMesh.uuid}`);

                    if (recordClass) {
                        recordClass.art = texture; // Store the loaded texture
                        // No longer deleting recordClass.tempPreviewUrl here
                    }
                    URL.revokeObjectURL(imageUrl); // Clean up the loader's specific blob URL
                },
                undefined, // onProgress
                (err) => { // onError
                    console.error(`Error loading texture from raw data for sleeve ${albumSleeveMesh.uuid}:`, err);
                    URL.revokeObjectURL(imageUrl); // Clean up the loader's specific blob URL even on error
                    albumSleeveMesh.material.map = null;
                    albumSleeveMesh.material.color.set(0xcccccc);
                    albumSleeveMesh.material.roughness = 0.5;
                    albumSleeveMesh.material.metalness = 0;
                    albumSleeveMesh.material.needsUpdate = true;
                    if (recordClass) {
                        recordClass.art = null;
                        // No longer deleting recordClass.tempPreviewUrl here
                    }
                }
            );
        } catch (error) {
            console.error(`Error creating blob/URL from raw art data for sleeve ${albumSleeveMesh.uuid}:`, error);
            albumSleeveMesh.material.map = null;
            albumSleeveMesh.material.color.set(0xcccccc);
            albumSleeveMesh.material.roughness = 0.5;
            albumSleeveMesh.material.metalness = 0;
            albumSleeveMesh.material.needsUpdate = true;
            if (recordClass) {
                recordClass.art = null;
                // No longer deleting recordClass.tempPreviewUrl here
            }
        }

    } else {
        // --- Case 3: No valid art source ---
        console.warn(`No valid art source provided for sleeve mesh ${albumSleeveMesh.uuid} for ${recordClass?.name}. Applying default.`);
         albumSleeveMesh.material.map = null; // Remove texture map
         albumSleeveMesh.material.color.set(0xcccccc); // Set default color
         albumSleeveMesh.material.roughness = 0.5;
         albumSleeveMesh.material.metalness = 0;
         albumSleeveMesh.material.needsUpdate = true;
        if (recordClass) {
            recordClass.art = null; // Clear any previous art reference
            // No longer deleting recordClass.tempPreviewUrl here
        }
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

function moveCam(camPos, camTarget, controlsAreEnabled){

    mouseActive = true;
    clearTimeout(mouseActiveTimeout);
    mouseActiveTimeout = setTimeout(() => {
        mouseActive = false;
    }, powerDownDelay);

    // Generate a unique move ID for this camera move
    camMoveId++;
    const thisMoveId = camMoveId;

    if(!controlsAreEnabled){
        controls.maxDistance = 10;
        controls.minDistance = 0
        controls.maxPolarAngle = Math.PI;
        controls.minAzimuthAngle = Infinity;
        controls.maxAzimuthAngle = Infinity;
    }

    toneArmView = false;
    controls.enabled = controlsAreEnabled;
    
    gsap.to(camera.position, {
        x: camPos.position.x - 0.15,
        y: camPos.position.y,
        z: camPos.position.z,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            // Only fire if this is the latest move
            if (thisMoveId !== camMoveId) return;
            toneArmView = false;
            //camMoving = false;
            if(controlsAreEnabled){
                controls.maxDistance = 1.1;
                controls.minDistance = 0.3;
                controls.maxPolarAngle = 1.2;
                controls.minAzimuthAngle = -Math.PI / 4;
                controls.maxAzimuthAngle = Math.PI / 4;
                controls.update();
            }
        }
    });

    if(camTarget != toneArmNeedle){
        gsap.to(controls.target, {
            x: camTarget.position.x - 0.15,
            y: camTarget.position.y,
            z: camTarget.position.z,
            duration: 1.5,
            ease: "power2.inOut",
            // No onComplete needed here
        });
    } else {
        const needlePos = toneArmNeedle.getWorldPosition(new THREE.Vector3());
        gsap.to(controls.target, {
            x: needlePos.x,
            y: needlePos.y,
            z: needlePos.z,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
                // Only fire if this is the latest move
                if (thisMoveId !== camMoveId) return;
                toneArmView = true;
            }
        });
    }

}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '0':
            moveCam(environment.camPosDefault, environment.camTargetDefault, true);
            break;
        case '1':
            moveCam(environment.camPosRecord, environment.camTargetRecord, false);
            break;
        case '2':
            moveCam(environment.camPosSleeves, environment.camTargetSleeves, false);
            break;
        case '3':
            moveCam(environment.camPosNeedle, toneArmNeedle, false);
            break;
        default:
            break;
    }
});

function stopAllTracks() {
    if (trackQueue && Array.isArray(trackQueue)) {
        trackQueue.forEach(track => {
            if (track && typeof track.stop === 'function') {
                track.stop();
            }
        });
    }
}

render();