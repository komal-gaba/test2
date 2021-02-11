var alien , alienrun,alienend;
var moon , moonimg;
var vamp , vampimg;
var fvamp , fvampimg;
var ground,groundimg;
var mummy,mummyimg;

function preload(){
  
  moonimg = loadImage("moon.gif");
  alienrun = loadImage("alien.gif");
  alienend = loadImage("alien2.gif");
  vampimg = loadImage("vampire.gif");
  fvampimg = loadImage("vamp.gif");
  groundimg = loadImage("x.gif");
  mummy = loadImage("mummy.gif");
  
}
function setup() {
  createCanvas(400, 300);
  
moon = createSprite(250,30,10,10);
  moon.addImage(moonimg);
  moon.scale = 0.2;
  
  ground = createSprite(200,270,10,10);
  ground.addImage(groundimg);
  ground.velocityX = -4;
  ground.scale = 3;
  
  alien = createSprite(150,270,10,10);
  alien.addImage(alienend);
  alien.scale = 0.15;

}

function draw() {
background("black");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(201,246,10,40);
   obstacle.velocityX = -6;
   
    //generate random obstacles
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(mummy);
        obstacle.scale = 0.2;
              break;
     case 2: obstacle.addImage(vampimg);
        obstacle.scale = 0.2;
              break;
      case 3: obstacle.addImage(fvampimg);
        obstacle.scale = 0.2;
              break;
      default: break;
    }
 }
}