var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c5e2ac1b-f3a5-41ec-820c-130d5aea21b9"],"propsByKey":{"c5e2ac1b-f3a5-41ec-820c-130d5aea21b9":{"sourceSize":{"x":100,"y":100},"frameSize":{"x":100,"y":100},"frameCount":1,"frameDelay":12,"name":"cup","sourceUrl":null,"size":7991,"version":"DtX93FrMbzs_WxpSeKi5bwLOPQHpVjvQ","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/c5e2ac1b-f3a5-41ec-820c-130d5aea21b9.png"}}};
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

//Crear al jugador Sofía
var sofia = createSprite(10, 10, 20, 20);
 sofia.shapeColor=("orange");

//Crear las paredes del laberinto (wall1 - wall2)
 var wall1 = createSprite(50, 20, 20, 70);
 var wall2 = createSprite(75, 65, 70, 20);
 var wall3 = createSprite(75, 65, 70, 20);
 var wall4 = createSprite(115, 120, 20, 130);
 var wall5 = createSprite(10, 120, 50, 20);
 var wall6 = createSprite(180, 50, 20, 130);
 var wall7 = createSprite(200, 125, 60, 20);
 var wall8 = createSprite(230, 155, 20, 80);
 var wall9 = createSprite(260, 200, 80, 20);
 var wall10 = createSprite(270, 40, 20, 80);
 var wall11 = createSprite(250, 40, 50, 20);
 var wall12 = createSprite(365, 100, 70, 20);
 var wall13 = createSprite(20, 260, 200, 20);
 var wall14 = createSprite(120, 295, 20, 90);
 var wall15 = createSprite(360, 270, 140, 20);
 var wall16 = createSprite(280, 305, 20, 90);
 var wall17 = createSprite(230, 320, 90, 20);

//Crear la copa.
var cup = createSprite(360, 360, 20, 80);
  cup.setAnimation("cup");
   
   
function draw() {
  background("lightblue");
  drawSprites(); 


  if (keyDown("UP_ARROW")) {
   sofia.y=sofia.y-5;
 }
 if (keyDown("DOWN_ARROW")) {
   sofia.y=sofia.y+5;
 }
 if (keyDown("LEFT_ARROW")) {
   sofia.x=sofia.x-5;
 }
 if (keyDown("RIGHT_ARROW")) {
   sofia.x=sofia.x+5;
 }
createEdgeSprites();

sofia.bounceOff(edges)

sofia.bounceOff(wall1)
sofia.bounceOff(wall2)
sofia.bounceOff(wall3)
sofia.bounceOff(wall4)
sofia.bounceOff(wall5)
sofia.bounceOff(wall6)
sofia.bounceOff(wall7)
sofia.bounceOff(wall8)
sofia.bounceOff(wall9)
sofia.bounceOff(wall10)
sofia.bounceOff(wall11)
sofia.bounceOff(wall12)
sofia.bounceOff(wall13)
sofia.bounceOff(wall14)
sofia.bounceOff(wall15)
sofia.bounceOff(wall16)
sofia.bounceOff(wall17)

 fill("black");
 textSize(20);
 text("sofia", 0, 50);
 
 fill("black");
 textSize(25);
 text("Cup", 350, 320);
 
 if (sofia.bounceOff(cup)) {
 background("lightblue") 
fill("black");
textSize(40);
text("Good Game", 100, 200);
  playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3")}
}




  
 
 

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
