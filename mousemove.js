let isRotating = false;
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
// use the center of the screen coords
const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

const myPics = document.body;

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  mouseX = (e.clientX - windowX);
  mouseY = (e.clientY - windowY);
  isRotating = true;
});

myPics.addEventListener('mousemove', e => {
  if (isRotating === true) {
    rotate(mouseX, mouseY);
    mouseX = (e.clientX - windowX);
    mouseY = (e.clientY - windowY);
  }
});

window.addEventListener('mouseup', e => {
  if (isRotating === true) {
    rotate(mouseX, mouseY);
    mouseX = 0;
    mouseY = 0;
    isRotating = false;
  }
});

function rotate(mouseX, mouseY) {

  targetX = mouseX * .001;
  targetY = mouseY * .001;

  cube.rotation.x += 0.5 * targetX;
  cube.rotation.y += 0.5 * targetY;
}