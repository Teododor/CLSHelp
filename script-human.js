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

// Create the humanoid mesh
const geometry = new THREE.Group();

// Head
const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const headMaterial = new THREE.MeshPhongMaterial({ color: 0xffccaa });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1.8;
geometry.add(head);

// Body
const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.8, 1.5, 32);
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x99ccff });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
geometry.add(body);

// Arms
const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1, 32);
const armMaterial = new THREE.MeshPhongMaterial({ color: 0x99ccff });
const leftArm = new THREE.Mesh(armGeometry, armMaterial);
leftArm.position.x = 0.6;
leftArm.position.y = 0.5;
geometry.add(leftArm);

const rightArm = new THREE.Mesh(armGeometry, armMaterial);
rightArm.position.x = -0.6;
rightArm.position.y = 0.5;
geometry.add(rightArm);

// Legs
const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
const legMaterial = new THREE.MeshPhongMaterial({ color: 0x99ccff });
const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
leftLeg.position.x = 0.25;
leftLeg.position.y = -1.2;
geometry.add(leftLeg);

const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
rightLeg.position.x = -0.25;
rightLeg.position.y = -1.2;
geometry.add(rightLeg);

// Add the humanoid mesh to the scene
scene.add(geometry);

// Set the camera position
camera.position.z = 5;

// Animate the avatar
function animate() {
  requestAnimationFrame(animate);

  // Rotate the arms
  leftArm.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.25;
  rightArm.rotation.z = Math.cos(Date.now() * 0.005) * Math.PI * 0.25;

  // Rotate the legs
  leftLeg.rotation.z = Math.cos(Date.now() * 0.005) * Math.PI * 0.1;
  rightLeg.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.1;

  renderer.render(scene, camera);
}
animate();
