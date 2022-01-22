var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ed540bc5-a13b-407b-90b2-befad60fc2ee","e660a2fc-2c9a-4bdc-9d9e-21638612bfb2","234212fc-10a4-4fa0-b39b-a5933fd7df5e","9a6c1100-0c54-4010-b7e3-4013230f1af0","3bb356ae-7908-4947-bdfe-bfab2951afb3","2971c69f-d6b7-4128-8555-36086ca7a516","54abf82a-b533-41cd-b6ef-3f4879d5030c","dc2e4ea4-c317-416d-ab5a-4250f0f86bd3","13391a9c-e26e-43dd-a087-42aad25c2d41","a3d9ce0e-f526-43d0-9b1d-ef40e7358754"],"propsByKey":{"ed540bc5-a13b-407b-90b2-befad60fc2ee":{"name":"82515 (1).png_1","sourceUrl":null,"frameSize":{"x":391,"y":672},"frameCount":5,"looping":true,"frameDelay":12,"version":"GkK6W9656FzzakzcON.z54LTDXoIee3D","loadedFromSource":true,"saved":true,"sourceSize":{"x":1173,"y":1344},"rootRelativePath":"assets/ed540bc5-a13b-407b-90b2-befad60fc2ee.png"},"e660a2fc-2c9a-4bdc-9d9e-21638612bfb2":{"name":"carrot","sourceUrl":null,"frameSize":{"x":50,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"S4Vi2fbJbn9dmzjVZ9I2E1YCJlCcbNW5","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":42},"rootRelativePath":"assets/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png"},"234212fc-10a4-4fa0-b39b-a5933fd7df5e":{"name":"tomato","sourceUrl":null,"frameSize":{"x":50,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"ABm.yT7d77khrxe25R7gNxyWEAFQTEJ6","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":42},"rootRelativePath":"assets/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png"},"9a6c1100-0c54-4010-b7e3-4013230f1af0":{"name":"pumpkin","sourceUrl":null,"frameSize":{"x":50,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"9zCyz9cGRIhug9LdeTbNQFsCwdgKRaLZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":42},"rootRelativePath":"assets/9a6c1100-0c54-4010-b7e3-4013230f1af0.png"},"3bb356ae-7908-4947-bdfe-bfab2951afb3":{"name":"potato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"Rzgh6Mztr62YRnYl_ySrTEo9xH6SIrOh","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png"},"2971c69f-d6b7-4128-8555-36086ca7a516":{"name":"watermelon","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"f8.Kdj1z9aY9dJaj3sc887GcbtDljr5T","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png"},"54abf82a-b533-41cd-b6ef-3f4879d5030c":{"name":"mushroom","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"e9L0xX5W0aK_AxqsH21FIRt4iAPcj0XL","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png"},"dc2e4ea4-c317-416d-ab5a-4250f0f86bd3":{"name":"onion","sourceUrl":null,"frameSize":{"x":30,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"0IXet5suqEoyzcbnDZtCJ3WhUeJdapDW","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":20},"rootRelativePath":"assets/dc2e4ea4-c317-416d-ab5a-4250f0f86bd3.png"},"13391a9c-e26e-43dd-a087-42aad25c2d41":{"name":"pepper","sourceUrl":null,"frameSize":{"x":50,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"T5OZQqjpogMXN3iiVRCvs9lr1iiJhB4g","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":51},"rootRelativePath":"assets/13391a9c-e26e-43dd-a087-42aad25c2d41.png"},"a3d9ce0e-f526-43d0-9b1d-ef40e7358754":{"name":"eggplant","sourceUrl":null,"frameSize":{"x":30,"y":53},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q1hqZxiHvfXIzcfnLQaZpcEF0osKdKdf","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":53},"rootRelativePath":"assets/a3d9ce0e-f526-43d0-9b1d-ef40e7358754.png"}}};
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

background("brown");

for (var i = 50; i < 400; i=i+50) 
{
  var tomate = createSprite(i, 250, 20, 20);
  tomate.setAnimation("tomato");

}
for (var i = 50; i < 400; i=i+50) 
{
  var cebolla = createSprite(i, 300, 20, 20);
  cebolla.setAnimation("onion");
}
for (var i = 50; i < 400; i=i+50) 
{
  var berenjena = createSprite(i, 150, 20, 20);
  berenjena.setAnimation("eggplant");
}
for (var i = 50; i < 400; i=i+50) 
{
  var pimientos = createSprite(i, 200, 20, 20);
  pimientos.setAnimation("pepper");
}
for (var i = 50; i < 400; i=i+50) 
{
  var zanahoria = createSprite(i, 100, 20, 20);
  zanahoria.setAnimation("carrot");

}

function draw() {

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
