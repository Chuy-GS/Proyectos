var sea, ship
var seaImng, shipImg

function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,400);
  sea.addImage("sea", seaImg);
  sea.velocityX=10;
}

function draw() {
  background("blue");
 
}