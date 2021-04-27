function setup() {

  cakepic = loadImage('drawingcake.png');
  createCanvas(500, 500);
  strokeWeight (5);

  background(cakepic);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    clear();
    }
    endShape();
 }
