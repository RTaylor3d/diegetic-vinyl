import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let mesh = null;
var env1X = 0.3;
var env1Y = 0.0541;
var env1Z = -0.13;

var env2X = 0.288;
var env2Y = -0.153;
var env2Z = -0.195;

class Environment {
    
    constructor(threeScene, background, lights, recordX, recordY, recordZ){
        this.threeScene = threeScene;
        this.background = background;
        this.lights = lights;
        this.recordX = recordX;
        this.recordY = recordY;
        this.recordZ = recordZ;
    }    

    changeScene(){
        this.clearScene();

        const loader = new GLTFLoader().setPath('./');
                
        if(this.background === 1){
            loader.load('groundPlane_01.glb', (gltf) => {
                gltf.scene.traverse( function( child ) { 
                    if ( child.isMesh ) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        child.frustumCulled = false;
                    }
                });  
                
                mesh = gltf.scene;
                mesh.position.set(-0.15, 0, 0);
                const ground = mesh.getObjectByName("ground");
                ground.material.dithering = true;
                this.threeScene.add(mesh);
            });

            this.recordX = env1X;
            this.recordY = env1Y;
            this.recordZ = env1Z;
        }

        if(this.background === 2){
            loader.load('env_01.glb', (gltf) => {
                gltf.scene.traverse( function( child ) { 
                    if ( child.isMesh ) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        child.frustumCulled = false;
                    }
                });  
                
                mesh = gltf.scene;
                mesh.position.set(-0.15, 0, 0);
                this.threeScene.add(mesh);
            });

            this.recordX = env2X;
            this.recordY = env2Y;
            this.recordZ = env2Z;
        }

        this.lights = this.getLights(this.background);

        this.lights.forEach(light => {
            this.threeScene.add(light);
        });
    }

    clearScene(){
        if(this.lights){
            this.lights.forEach(light => {
                this.threeScene.remove(light);
                if(light.dispose) {
                    light.dispose();
                }
            });
            this.lights = [];
        }


        if(mesh){
            mesh.traverse(child => {
                if (child.isMesh) {
                    if (child.geometry) {
                        child.geometry.dispose();
                    }
                    if (child.material) {
                        // If material is an array, dispose each one
                        if (Array.isArray(child.material)) {
                            child.material.forEach(material => {
                                if (material.map) material.map.dispose();
                                // Dispose other potential textures (normalMap, envMap, etc.) if used
                                material.dispose();
                            });
                        } else {
                            // Dispose single material
                            if (child.material.map) child.material.map.dispose();
                            // Dispose other potential textures
                            child.material.dispose();
                        }
                    }
                }
            });
            this.threeScene.remove(mesh);
            mesh = null; // Clear the module-level reference
        }
    }

    getLights(scene){
        
        if(scene === 1){
            // Scene 1 (original)
            const scene1Light1 = new THREE.DirectionalLight(0xC67385, 4.25)
            scene1Light1.position.set(-1, 4, -1);
            scene1Light1.castShadow = true;
            scene1Light1.shadow.mapSize.width = 1024;
            scene1Light1.shadow.mapSize.height = 1024;
            scene1Light1.shadow.camera.near = 0.1;
            scene1Light1.shadow.camera.far = 7;
            scene1Light1.shadow.camera.left = -2;
            scene1Light1.shadow.camera.right = 2;
            scene1Light1.shadow.camera.top = 2;
            scene1Light1.shadow.camera.bottom = -2;
            scene1Light1.shadow.bias = -0.0005;
            scene1Light1.shadow.radius = 2;
            scene1Light1.shadow.blurSamples = 8;

            const scene1Light2 = new THREE.DirectionalLight(0xFFFFF, 2.25)
            scene1Light2.position.set(1, 4, 1);
            scene1Light2.castShadow = true;
            scene1Light2.shadow.mapSize.width = 1024;
            scene1Light2.shadow.mapSize.height = 1024;
            scene1Light2.shadow.camera.near = 0.1;
            scene1Light2.shadow.camera.far = 7;
            scene1Light2.shadow.camera.left = -2;
            scene1Light2.shadow.camera.right = 2;
            scene1Light2.shadow.camera.top = 2;
            scene1Light2.shadow.camera.bottom = -2;
            scene1Light2.shadow.bias = -0.0005;
            scene1Light2.shadow.radius = 2;
            scene1Light2.shadow.blurSamples = 8;

            const scene1Light3 = new THREE.DirectionalLight(0xFFFFFF, 0.04)
            scene1Light3.position.set(2, 2, -2);
            scene1Light3.castShadow = false;

            const scene1Light4 = new THREE.DirectionalLight(0xede2b4, 3.5)
            scene1Light4.position.set(5.6, 1.7, 6.3);
            scene1Light4.castShadow = false;

            const sceneLights = [scene1Light1, scene1Light2, scene1Light3, scene1Light4];
            return sceneLights;
        }

        if(scene === 2){
            // Scene 2 (living room)
            const scene2Light1 = new THREE.DirectionalLight(0xede2b4, 11)
            scene2Light1.position.set(5.6, 1.7, 6.3);
            scene2Light1.castShadow = true;
            scene2Light1.shadow.mapSize.width = 2048;
            scene2Light1.shadow.mapSize.height = 2048;
            scene2Light1.shadow.camera.near = 4;
            scene2Light1.shadow.camera.far = 10;
            scene2Light1.shadow.camera.left = -1.2;
            scene2Light1.shadow.camera.right = 1.5;
            scene2Light1.shadow.camera.top = 1;
            scene2Light1.shadow.camera.bottom = -1;
            scene2Light1.shadow.bias = -0.002;
            scene2Light1.shadow.radius = 2;
            scene2Light1.shadow.blurSamples = 32;

            const scene2Light2 = new THREE.DirectionalLight(0xb4c6d3, 0.05)
            scene2Light2.position.set(1, 0.8, -1);
            scene2Light2.castShadow = false;

            const scene2Light3 = new THREE.DirectionalLight(0xFFFFFF, 0.5)
            scene2Light3.position.set(0, 0.7, 0);
            scene2Light3.castShadow = true;
            scene2Light3.shadow.mapSize.width = 1024;
            scene2Light3.shadow.mapSize.height = 1024;
            scene2Light3.shadow.camera.near = 0.5;
            scene2Light3.shadow.camera.far = 1.4;
            scene2Light3.shadow.camera.left = -0.5;
            scene2Light3.shadow.camera.right = 1;
            scene2Light3.shadow.camera.top = 0.3;
            scene2Light3.shadow.camera.bottom = -0.3;
            scene2Light3.shadow.bias = -0.0001;
            scene2Light3.shadow.radius = 3;
            scene2Light3.shadow.blurSamples = 16;
            scene2Light3.shadow.intensity = 1.6;

            const sceneLights = [scene2Light1, scene2Light2, scene2Light3];
            return sceneLights;
        }
    }
}

export { Environment };