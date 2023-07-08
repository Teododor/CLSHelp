// Initialize the scene, camera, and renderer
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

// Add a simple geometry as the avatar (e.g., a cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const avatar = new THREE.Mesh(geometry, material);
scene.add(avatar);

// Set the camera position
camera.position.z = 5;

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  avatar.rotation.x += 0.01;
  avatar.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
