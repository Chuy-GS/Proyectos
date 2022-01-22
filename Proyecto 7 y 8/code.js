var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["867ac5d8-7a0a-4e24-bf60-4a74c7a22d63"],"propsByKey":{"867ac5d8-7a0a-4e24-bf60-4a74c7a22d63":{"name":"ball","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"pCYLprzoOf3Wqom4weuNsncgT_MF3S8P","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/867ac5d8-7a0a-4e24-bf60-4a74c7a22d63.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle = createSprite(200, 40, 60, 10);
  playerPaddle.shapeColor=("blue")
var computerPaddle = createSprite(200, 360, 60, 10);
  computerPaddle.shapeColor=("red")
var Goal1 = createSprite(200, 10,100,20);
 Goal1.shapeColor=("yellow")
var Goal2 = createSprite(200, 390,100,20);
 Goal2.shapeColor=("yellow")

var ball = createSprite(200,200,10,10);
ball.setAnimation("ball");


var playerScore=0;
var compScore=0;

var gameState = "serve";
var gameState = "play";
var gameState = "end";

function draw() {
background("green") 
   textSize(30);
  fill("black");
 text(playerScore, 10, 190);
 text(compScore, 10, 220);

if (gameState=="serve") {
  if (keyDown("space")) {
    ball.velocityX=10
    ball.velocityY=5}
    fill("black");
    textSize(20);
    text("Presione espacio para empezar :)", 80, 170); }
      if (keyDown("space")) {
    ball.velocityX=10
    ball.velocityY=5
     gameState="play"}
  
  computerPaddle.x=ball.x; 




 
  if(keyDown("left")){
    playerPaddle.x = playerPaddle.x-10;
    
  }
  
  if(keyDown("right")){
    playerPaddle.x = playerPaddle.x+10;
    
  }
  
if (ball.isTouching(Goal1)) {
 playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3");
  ball.x=200;
  ball.y=200;
  ball.velocity.x=10;
  ball.velocity.y=10;
  compScore=compScore+1;
 }

if (ball.isTouching(Goal2)) {
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3");
  ball.x=200;
  ball.y=200;
  ball.velocity.x=10;
  ball.velocity.y=10;
  playerScore=playerScore+1;
 }
 
if(compScore==5){
  if(gameState == "play"){
  gameState="end";
  playSound("assets/category_achievements/puzzle_game_achievement_big_03.mp3", false);
  ball.velocityX=0;
  ball.velocityY=0;
  ball.x=200;
  ball.y=200;
  fill("black");
   textSize(20);}
   text("Game over :( ", 120, 100);}
 
  

  createEdgeSprites();
  
  ball.bounceOff(edges);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  playerPaddle.bounceOff(edges)
  
  for (var i = 0; i < 400; i=i+30) {
    line(i,200,i+10,200);
  } 
drawSprites();}
    

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
