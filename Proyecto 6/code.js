var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4e259462-7887-4bed-aec4-1e496aae4bcf","7f12f2cf-783c-49b6-bac0-7abb8a67f466"],"propsByKey":{"4e259462-7887-4bed-aec4-1e496aae4bcf":{"name":"diamond","sourceUrl":null,"frameSize":{"x":50,"y":46},"frameCount":2,"looping":true,"frameDelay":12,"version":"jIt5Q2LHG5RLrPaBYOPnYU4cP.4t2lBy","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":92},"rootRelativePath":"assets/4e259462-7887-4bed-aec4-1e496aae4bcf.png"},"7f12f2cf-783c-49b6-bac0-7abb8a67f466":{"name":"thief","sourceUrl":null,"frameSize":{"x":51,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"mBPeJGoyZMF7XdRy2HaIM_q9FsDfKY4j","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":51},"rootRelativePath":"assets/7f12f2cf-783c-49b6-bac0-7abb8a67f466.png"}}};
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

var thief = createSprite(20, 380, 20, 20);
 thief.setAnimation("thief");

var diamond = createSprite(370, 30, 20, 20);
 diamond.setAnimation("diamond");

var laser1 = createSprite(60, 250, 100, 5);
 laser1.shapeColor =("red");
 
 var laser2 = createSprite(340, 175, 100, 5);
 laser2.shapeColor =("red");
 
  var laser3= createSprite(60, 100, 100, 5);
 laser3.shapeColor =("red");
 
  var laser4 = createSprite(340, 90, 100, 5);
 laser4.shapeColor =("red");
 

function draw() {
background("grey");
if (diamond.isTouching(thief)) {
fill("black");
textSize(24)
text("El ladron consiguio el diamante", 50, 200)}

if (diamond.isTouching(thief)) {
laser1.destroy(laser1);
laser2.destroy(laser2);
laser3.destroy(laser3);
laser4.destroy(laser4);
}

if (laser1.isTouching(thief)) {
 thief.x=20;
 thief.y=380;
}
if (laser2.isTouching(thief)) {
 thief.x=20;
 thief.y=380;
}
if (laser3.isTouching(thief)) {
 thief.x=20;
 thief.y=380;
}
if (laser4.isTouching(thief)) {
 thief.x=20;
 thief.y=380;
}



if (keyDown("UP_ARROW")) {
   thief.y=thief.y-10;
   
 }
 if (keyDown("DOWN_ARROW")) {
   thief.y=thief.y+10;
   
 }
 if (keyDown("RIGHT_ARROW")) {
   thief.x=thief.x+10;
   
 }
 if (keyDown("LEFT_ARROW")) {
   thief.x=thief.x-10;
   
 }
 
if(keyDown("space")){
 laser1.velocityX=10;
 laser1.velocityY=0;
}
if(keyDown("space")){
 laser2.velocityX=-10;
 laser2.velocityY=0;
}
if(keyDown("space")){
 laser3.velocityX=10;
 laser3.velocityY=0;
}
if(keyDown("space")){
 laser4.velocityX=-10;
 laser4.velocityY=0;
}

createEdgeSprites();

thief.bounceOff(edges)
laser1.bounceOff(rightEdge)
laser1.bounceOff(leftEdge)
laser2.bounceOff(rightEdge)
laser2.bounceOff(leftEdge)
laser3.bounceOff(rightEdge)
laser3.bounceOff(leftEdge)
laser4.bounceOff(rightEdge)
laser4.bounceOff(leftEdge)






 
drawSprites();
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
