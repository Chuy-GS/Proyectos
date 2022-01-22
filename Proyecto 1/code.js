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


function draw() {
  background("lightblue");

var edifice1 = createSprite(380,390,30, 300);
edifice1.shapeColor="grey"

var edifice2 = createSprite(340,390,20, 370);
edifice2.shapeColor="grey"

var edifice3 = createSprite(310,390,20, 210);
edifice3.shapeColor="grey"

var edifice4 = createSprite(280,390,20, 250);
edifice4.shapeColor="grey"

var edifice5 = createSprite(250,390,20, 390);
edifice5.shapeColor="grey"

var edifice6 = createSprite(220,390,20, 370);
edifice6.shapeColor="grey"
var edifice7 = createSprite(190,390,20, 240);
edifice7.shapeColor="GRAY"

var edifice8 = createSprite(160,390,20, 190);
edifice8.shapeColor="GRAY"

var edifice9 = createSprite(130,390,20, 410);
edifice9.shapeColor="grey"

var edifice10 = createSprite(100,390,20, 450);
edifice10.shapeColor="grey"

var edifice11 = createSprite(70,390,20, 325);
edifice11.shapeColor="grey"

var edifice12 = createSprite(40,390,20, 270);
edifice12.shapeColor="grey"

var edifice13 = createSprite(10,390,20, 395);
edifice13.shapeColor="grey"

var sun = createSprite(350, 20, 50, 50);
sun.shapeColor= "yellow"

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
