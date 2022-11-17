var background,backgroundImg,ground,groundImg,ground1,ground1Img,bullet,bullet1Img,bullet2Img;
var zombie,zombieImg,cowboy,cowboyImg;



function preload(){
  backgroundImg = loadImage("background.jpg");
  bullet1Img = loadImage("bullet1.png");
  bullet2Img = loadImage("bullet2.png");
  zombieImg = loadImage("zombie.png");
  cowboyImg= loadImage("cowboy.png");
  groundImg = loadImage("ground.jpg")
  ground1Img = loadImage("ground1.jpg")
  zombie1Img = loadAnimation("zombie1.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  ground = createSprite(40,500,50,40)
  ground.addImage(groundImg)
  ground.scale = 0.07
  
   cowboy = createSprite(110, 305, 50, 40)
   cowboy.addImage(cowboyImg)
  cowboy.scale  = 0.2
  
  
  
    ground1 = createSprite(640, 400, 40, 20)
    ground1.addImage(ground1Img)
    ground1.scale = 0.08
  
  
  
    zombie = createSprite(640, 320, 40, 20)
  zombie.addImage(zombieImg)
    zombie.scale = 0.08
  zombie.debug = false;
 zombie.setCollider("rectangle",0,0,zombie.width,zombie.height);

  
}

function draw(){
  background(backgroundImg);
  

    
  if(keyDown("space")){
    bullet1 = createSprite(cowboy.x+100,cowboy.y+15,10,5);
    bullet1.addImage(bullet1Img);
    bullet1.scale = 0.08
    bullet1.velocityX = 10;
     bullet1.debug = false;
  
  
       
drawSprites();
  }
  
  
}
