'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup(){
  cnv = createCanvas(w, h);

  textFont('monospace');

player = new Player();

coin = new Coin();


}

function draw() {

  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
    case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    break;
    case 'you win':
    youWin();
    cnv.mouseClicked(youWinMouseClicked);
    break;
    default:
    break;
  }
}
  //if (state === 'title') {
  //  title();
  //  cnv.mouseClicked(titleMouseClicked);
//  } else if (state === 'level 1') {
  //  level1();
  //  cnv.mouseClicked(level1MouseClicked);


function title(){
  background(100);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w/2, h/5);

textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background(50, 150, 200);
  //text('click for points', w/2, h - 30);

  player.display();
  coin.display();
  coin.move();


}

function level1MouseClicked(){
    console.log('points = ' + points);
    points += 1;

    if (points >= 10){
      state = 'you win';
    }
}

function youWin(){
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

textSize(30);
  text('click anywhere to play again', w/2, h * 3/4);
}
function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}

//function setup() {

//  cakepic = loadImage('drawingcake.png');
//  createCanvas(500, 500);
//  strokeWeight (5);

//  background(cakepic);
//}

//function draw() {
//  if (mouseIsPressed) {
//    strokeWeight(5);
  //  line(mouseX, mouseY, pmouseX, pmouseY);
  //}
//}

//function keyTyped() {
//  if (key === 's') {
    // save this image
  //  saveCanvas('fileName', 'png');
//  } else if (key === 'c') {
  //  clear();
  //  }
  //  endShape();
 //}
