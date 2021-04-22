//let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(129, 174, 247);


  noFill();
}

function draw() {

  background(129, 174, 247, 20);
strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 100;


  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  //  background(0);
  //  array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    clear();
  //} else if (key === 'd') {
    //background(255);
    //beginShape();
  //  for(let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
//  return false;
