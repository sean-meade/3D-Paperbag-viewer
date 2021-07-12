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

