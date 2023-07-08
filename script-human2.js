// Set up the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Add lighting to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Load the 3D model using GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.glb', function(gltf) {
  const model = gltf.scene;
  
  // Optional: Scale, position, or rotate the model to fit your scene
  model.scale.set(0.1, 0.1, 0.1);
  model.position.set(0, 0, 0);
  model.rotation.set(0, Math.PI, 0);
  
  // Add the model to the scene
  scene.add(model);

  // Animate the avatar
  function animate() {
    requestAnimationFrame(animate);

    // ... Other animations or transformations

    renderer.render(scene, camera);
  }
  animate();
});

// Set the camera position
camera.position.z = 5;
