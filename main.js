import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
// import { DecalGeometry } from "https://threejs.org/examples/jsm/geometries/DecalGeometry.js";

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
  const geometry = new THREE.BoxGeometry(1, 1.2, 0.5);


  // Create Material 
  // const material = new THREE.MeshBasicMaterial( {color: 0xc19a6c});
  const texture = new THREE.TextureLoader().load('textures/paperbag.png');
  const material = new THREE.MeshBasicMaterial( { map: texture });

  

  // Create object cube (mesh)
  cube = new THREE.Mesh(geometry, material);

  // add object to scene
  scene.add(cube);

  const texture2 = new THREE.TextureLoader().load('logo/precious-packaging-logo.png');
  const decalMaterial = new THREE.MeshBasicMaterial( { map: texture2 });
  const position = new THREE.Vector3( 0, 0, 0.2 );
  const orientation = new THREE.Euler( 0, 0, 0, 'XYZ' );
  const size = new THREE.Vector3( 0.5, 0.5, 0.5);

  var decalGeometry = new THREE.DecalGeometry( cube, position, orientation, size );
						
  var decal = new THREE.Mesh( decalGeometry, decalMaterial );
  scene.add( decal );

  // reposition the camera
  camera.position.z = 5;

  controls = new OrbitControls(camera, renderer.domElement)

  var gui = new dat.GUI();

  var box = gui.addFolder('Cube');
  box.add(cube.scale, 'x', 0, 3).name('Width').listen();
  box.add(cube.scale, 'y', 0, 3).name('Height').listen();
  box.add(cube.scale, 'z', 0, 3).name('Length').listen();
  box.open();

}

// let isRotating = false;
// let mouseX = 0;
// let mouseY = 0;
// let targetX = 0;
// let targetY = 0;
// // use the center of the screen coords
// const windowX = window.innerWidth / 2;
// const windowY = window.innerHeight / 2;

// const grabObject = window;

// // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// // Add the event listeners for mousedown, mousemove, and mouseup
// grabObject.addEventListener('mousedown', e => {
//   mouseX = (e.clientY - windowX);
//   mouseY = (e.clientX - windowY);
//   isRotating = true;
// });

// grabObject.addEventListener('mousemove', e => {
//   if (isRotating === true) {
//     rotate(mouseX, mouseY);
//     mouseX = (e.clientY - windowX);
//     mouseY = (e.clientX - windowY);
//   }
// });

// window.addEventListener('mouseup', e => {
//   if (isRotating === true) {
//     rotate(mouseX, mouseY);
//     mouseX = 0;
//     mouseY = 0;
//     isRotating = false;
//   }
// });

// function rotate(mouseX, mouseY) {

//   targetX = mouseX * .01;
//   targetY = mouseY * .01;

//   cube.rotation.x += 0.05 * (targetX - cube.rotation.x);
//   cube.rotation.y -= 0.05 * (targetY + cube.rotation.y);
// }



// Create loop to display object
function animate() {
  requestAnimationFrame(animate);

  // rotate object
  // cube.rotation.y += 0.01;



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