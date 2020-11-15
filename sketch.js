var monkey , monkey_running;
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {  
 monkey=createSprite(80, 315, 20, 20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400, 350, 900, 10)
  ground.velocityX=-4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100, 50)
  
  banana();
  obstacle();
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space") && monkey.y >=160){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);

 if(monkey.isTouching(obstacleGroup)){
   ground.velocityX = 0;
   monkey.velocityY = 0; 
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
   obstacleGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);
 }
  
 drawSprites(); 
}  

function banana() {
  if(frameCount % 100 === 0){
  var banana = createSprite(400,Math.round(random(120,200)), 10,10);
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 150;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount % 150 === 0){
    var obstacle = createSprite(300, 325, 20, 20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 150;
    obstacle.scale =0.1;
    obstacleGroup.add(obstacle);
  }
}