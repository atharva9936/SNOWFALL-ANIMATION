var ground;

function setup() {
  
  createCanvas(1000,800);
  

  

  snow = createSprite(500,1,50,50);
  snow.addImage(snowImg);
  snow.scale=0.2;

  snow1 = createSprite(100,1,50,50);
  snow1.addImage(snowImg);
  snow1.scale=0.2;

  snow2 = createSprite(200,1,50,50);
  snow2.addImage(snowImg);
  snow2.scale=0.2;

  snow3 = createSprite(300,1,50,50);
  snow3.addImage(snowImg);
  snow3.scale=0.2;

  snow4 = createSprite(400,1,50,50);
  snow4.addImage(snowImg);
  snow4.scale=0.2;

  snow5 = createSprite(800,1,50,50);
  snow5.addImage(snowImg);
  snow5.scale=0.25;

  snow6 = createSprite(600,1,50,50);
  snow6.addImage(snowImg);
  snow6.scale=0.2;

  snow7 = createSprite(700,1,50,50);
  snow7.addImage(snowImg);
  snow7.scale=0.2;

  snow8 = createSprite(900,1,50,50);
  snow8.addImage(snowImg);
  snow8.scale=0.2;

  snow9 = createSprite(1000,1,50,50);
  snow9.addImage(snowImg);
  snow9.scale=0.2;

  snow10 = createSprite(1100,1,50,50);
  snow10.addImage(snowImg);
  snow10.scale=0.2;

  ground = createSprite(800,800,1000,10);
}

function preload(){
  
  bg          = loadImage("snow3.jpg");
  snowImg     = loadImage("snow5.webp");
}

function draw() {
 background(255,255,255);  
 image(bg,50,1,1000,800);  
  drawSprites();
  fill("white");
  ground.display();
  
  
}
function keyPressed(){
  if(keyCode===32){
    snow.velocityY = 400/200;
    snow1.velocityY = 400/200;
    snow2.velocityY = 400/200;
    snow3.velocityY = 400/200;
    snow4.velocityY = 400/200;
    snow5.velocityY = 400/200;
    snow6.velocityY = 400/200;
    snow7.velocityY = 400/200;
    snow8.velocityY = 400/200;
    snow9.velocityY = 400/200;
    snow10.velocityY = 400/200;

  }

  
}
