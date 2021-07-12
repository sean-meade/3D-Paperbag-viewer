let scene, canera, renderer, cube;

// function to keep everything dynamic
function init() {
  // Create Scene
  scene = new THREE.Scene();

  // Create Camera
  camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight, 
    0.1, 
    1000
    );

  // Create WebGL renderer
  renderer = new THREE.WebGLRenderer({
    // sharpen image
    antialias: true
  });

  // Set size of renderer
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add renderer to body of website
  document.body.appendChild(renderer.domElement)

  // Create Geometry of box
  const geometry = new THREE.BoxGeometry(1, 1.2, 0.5);

  // Create Material 
  const material = new THREE.MeshBasicMaterial( {color: 0xc19a6c});

  // Create object cube (mesh)
  cube = new THREE.Mesh(geometry, material);

  // add object to scene
  scene.add(cube);

  // reposition the camera
  camera.position.z = 5;

}

// Create loop to display object
function animate() {
  requestAnimationFrame(animate);

  // rotate object
  cube.rotation.y += 0.01;

  // render it all together
  renderer.render(scene, camera);
}

// Create function to resize everything on window resize
function onWindowResize() {
  // reset aspect ratio
  camera.aspect = window.innerWidth/window.innerHeight;
  // Update camera
  camera.updateProjectionMatrix();
  // reset renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// add event listener for resize to call onWindowResize
window.addEventListener('resize', onWindowResize, false);

init();
animate();