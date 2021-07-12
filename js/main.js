import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, cube, controls;

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
  const geometry = new THREE.BoxGeometry(1, 1.2, 0.5, 80, 80, 80);


  // Create Material 
  // const material = new THREE.MeshBasicMaterial( {color: 0xc19a6c});
  const texture = new THREE.TextureLoader().load('textures/paperbag.png');
  const material = new THREE.MeshBasicMaterial( { map: texture });

  

  // Create object cube (mesh)
  cube = new THREE.Mesh(geometry, material);

  // add object to scene
  scene.add(cube);

  // Create material from logo
  const texture2 = new THREE.TextureLoader().load('logo/precious-packaging-logo.png');
  const decalMaterial = new THREE.MeshBasicMaterial( { map: texture2 });

  // Create input for DecalGeometry
  const position = new THREE.Vector3( 0, 0, 0 );
  const orientation = new THREE.Euler( 0, 0, 0, 'XYZ' );
  const size = new THREE.Vector3( 0.5, 0.5, 0.5);

  // Create DecalGeometry
  var decalGeometry = new THREE.DecalGeometry( cube, position, orientation, size );

  // add DecalGeometry and material to scene
  var decal = new THREE.Mesh( decalGeometry, decalMaterial );
  scene.add( decal );

  // reposition the camera
  camera.position.z = 5;

  // Add controls to rotate and zoom
  controls = new OrbitControls(camera, renderer.domElement)

  // Add controls for resizing bag
  var gui = new dat.GUI();

  var box = gui.addFolder('Bag Demensions');
  box.add(cube.scale, 'x', 0, 3).name('Width').listen();
  box.add(cube.scale, 'y', 0, 3).name('Height').listen();
  box.add(cube.scale, 'z', 0, 3).name('Length').listen();
  box.open();

}

// Create loop to display object
function animate() {
  requestAnimationFrame(animate);

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