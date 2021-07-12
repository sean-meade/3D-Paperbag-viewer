// Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth/window.innerHeight, 
  0.1, 
  1000
  );

// Create WebGL renderer
const renderer = new THREE.WebGLRenderer();

// Set size of renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Add renderer to body of website
document.body.appendChild(renderer.domElement)

// Create Geometry of box
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create Material 
const material = new THREE.MeshBasicMaterial( {color: 0xc19a6c});

// Create object cube (mesh)
const cube = new THREE.Mesh(geometry, material);

// add object to scene
scene.add(cube);

// reposition the camera
camera.position.z = 5;

// Create loop to display object
function animate() {
  requestAnimationFrame(animate);

  // render it all together
  renderer.render(scene, camera);
}

animate();