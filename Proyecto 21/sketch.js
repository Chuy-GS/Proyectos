var Ship, ShipImg;
var Ufo, UfoImg;
var UfoG;
var Space, SpaceImg;
var gameOver, gameOverImg;
var PLAY;
var END;


function preload(){
 ShipImg = loadImage("Ship.png");
 UfoImg = loadImage("Ufo.png");
 SpaceImg = loadImage("Space.png");
 gameOverImg = loadImage("gameOver.png");
}

function setup() {
 createCanvas(1000,800);
 
 Space = createSprite(200,200);
 Space.addImage(SpaceImg);
 Space.velocityY = 5;
 Space.scale = 0.6;

 Ship = createSprite(200,200);
 Ship.addImage(ShipImg);
 Ship.scale = 0.6;

 Ufo = createSprite(200,200); 
 Ufo.addImage(UfoImg);
 Ufo.scale = 0.7;

 gameOver = createSprite(200,200);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.6;
}

function draw() {
 
 if (keyDown(Space)){
   gameState = "PLAY";
 }

    if(gameState === PLAY){
   gameOver.visible = false;
   Ship.y = WorldMouse.y;

   edges = createEdgesSprites();
   Ship.collide(edges);
  
   if(Space.y > 400){
     Space.y = height/2;
   }

   if(Ship.isTouching(Ufo)){
     gameState = "END"
     Ship.velocityY = 0;
     Ship.destroy();
   }
 if (gameState = "END"){
   gameOver.visible = true;
 }
    

 }
 
}