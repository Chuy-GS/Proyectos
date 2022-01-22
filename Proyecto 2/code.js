var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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



var pin1 = createSprite(200,300,20,20);
var pin2 = createSprite(180,320,20,20);
var pin3 = createSprite(220,320,20,20);
var pin4 = createSprite(160,340,20,20);
var pin5 = createSprite(200,340,20,20);
var pin6 = createSprite(240,340,20,20);
  

squariad=createSprite(200, 50, 20, 20);
squariad.shapeColor = "write";
  squariad.velocityX = 4;
  squariad.velocityY = 0.5;





function draw() {
  
background("lightblue"); 



 
createEdgeSprites();

 squariad.bounceOff(edges);
 pin1.bounceOff(edges);
 pin2.bounceOff(edges);
 pin3.bounceOff(edges);
 pin4.bounceOff(edges);
 pin5.bounceOff(edges);
 pin6.bounceOff(edges);

 
 pin1.bounce(squariad);
 pin2.bounce(squariad);
 pin3.bounce(squariad);
 pin4.bounce(squariad);
 pin5.bounce(squariad);
 pin6.bounce(squariad);
 
 pin1.bounce(pin2);
 pin2.bounce(pin3);
 pin3.bounce(pin4);
 pin4.bounce(pin5);
 pin5.bounce(pin6);
 pin6.bounce(pin1);
 pin6.bounce(pin2);
 pin6.bounce(pin3);
 pin6.bounce(pin4);
 pin5.bounce(pin3);
 pin5.bounce(pin2);
 pin4.bounce(pin6);
 pin4.bounce(pin2);
 pin4.bounce(pin1);
 pin3.bounce(pin1);
 
 
 
 
 
 

 
 

 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
