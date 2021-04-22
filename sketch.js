let array = [];

//let noiseOffset = 0.0;
//let strokeWidth = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(129, 174, 247);

  drawGrid();
  strokeWeight (5);
  noFill();

}

  drawGrid();
  strokeWeight (5);
  noFill();

function draw() {

//  background(129, 174, 247, 20);
//strokeWeight(strokeWidth);

//noiseOffset += 0.05;
//strokeWidth = noise(noiseOffset) * 100;


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

  function drawGrid(){
    numCells = 20;
    fillColor = 255;
    strokeWeight(0);
    for (let i = 0; i <= width; i += width / numCells){
      for (let j = 0; j <= height; j += height / numCells){
        if (fillColor === 255){
          fillColor = 200;
        } else {
          fillColor = 255;
        }
        fill(fillColor);
        rect(i, j, width / numCells, height / numCells);
      }

    }
    strokeWeight(5);
  }
//  return false;
