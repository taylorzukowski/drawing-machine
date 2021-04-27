//let array = [];

//let noiseOffset = 0.0;
//let strokeWidth = 5;
//let firstTime = 0;

function setup() {

  cakepic = loadImage('drawingcake.png');
  createCanvas(500, 500);
//firstTime = 0;
//  background(199, 252, 211,0);

//  drawGrid();
  strokeWeight (5);
  //noFill();

}

  //drawGrid();
  //strokeWeight (5);
  //noFill();


function draw() {

    background(cakepic);

  if (mouseIsPressed) {
strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  //  background(0);
  //array.push([mouseX, mouseY]);
  }
  //background(199, 252, 211, 0);



//strokeWeight(strokeWidth);

//noiseOffset += 0.05;
//strokeWidth = noise(noiseOffset) * 100;



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
      //curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
  function drawMiddlestand(){
     //middle stand
    noStroke();
    fill(199, 220, 252);
    beginShape();
    vertex(width * .43, height * 1);
    vertex(width * .43, height * .98);
    vertex(width * .57, height * .98);
    vertex(width * .57, height * 1);
    endShape(CLOSE);

     noStroke();
    fill(199, 220, 252);
    beginShape();
    vertex(width * .48, height * 1);
    vertex(width * .48, height * .72);
    vertex(width * .52, height * .72);
    vertex(width * .52, height * 1);
    endShape(CLOSE);

    noStroke();
    fill(199, 220, 252);
    beginShape();
    vertex(width * .32, height * .72);
    vertex(width * .32, height * .7);
    vertex(width * .68, height * .7);
    vertex(width * .68, height * .72);
    endShape(CLOSE);
  }

  function drawCakebottom(){
     //cake bottom
    noStroke();

    fill(255, 255, 255);

    beginShape();
    vertex(width * .35, height * .7);
    vertex(width * .35, height * .53);
    vertex(width * .65, height * .53);
    vertex(width * .65, height * .7);
    endShape(CLOSE);
  }

  function drawCakemiddle(){
     //cake middle
    noStroke();

    fill(255, 255, 255);

    beginShape();
    vertex(width * .38, height * .53);
    vertex(width * .38, height * .35);
    vertex(width * .62, height * .35);
    vertex(width * .62, height * .53);
    endShape(CLOSE);
  }

  function drawCaketop(){
     //cake top
    noStroke();

    fill(255, 255, 255);

    beginShape();
    vertex(width * .41, height * .35);
    vertex(width * .41, height * .2);
    vertex(width * .59, height * .2);
    vertex(width * .59, height * .35);
    endShape(CLOSE);
  }

  //function drawGrid(){
  //  numCells = 20;
  //  fillColor = 255;
  //  strokeWeight(0);
  //  for (let i = 0; i <= width; i += width / numCells){
  //    for (let j = 0; j <= height; j += height / numCells){
    //    if (fillColor === 255){
    //      fillColor = 200;
    //    } else {
    //      fillColor = 255;
    //    }
    //    fill(fillColor);
    //    rect(i, j, width / numCells, height / numCells);



  //  strokeWeight(5);

//  return false;
