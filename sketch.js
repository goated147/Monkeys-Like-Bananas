
var monkey , monkey_running,ground,groundImage,invisibleGround
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var score

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}




function setup() {
  createCanvas(600,600);
  
monkey= createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
ground=createSprite(400,350,900,10)
ground.veloctiyX=-4;
ground.x=ground.width/2;
console.log(ground.x)

  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  score = 0;
}

function draw() {
background("white");
text("Survival Time: "+ score, 500,50);
score = score + Math.round(getFrameRate()/60);  
if(ground.x<0){
  ground.x=ground.width/2;
}
      if(keyDown("space")){
      monkey.velocityY = -6
    }
 
  
    monkey.velocityY =monkey.velocityX + 0.8
  

monkey.collide(ground);
   
    spawnObstacles();
monkey.velocityY=0;
if (frameCount % 400 === 0) {
var banana = createSprite(180,120,40,10);
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.velocityX=-3
banana.scale = 0.1;
banana.lifetime=150;

}
  
  
  drawSprites();
}

  


function spawnObstacles() {
  if(frameCount % 300 === 0) {
var obstacle =createSprite(80,330,10,40);
obstacle.addAnimation("obstacle",obstacleImage)
  obstacle.x = Math.round(random(550,600));
    obstacle.velocityX = -(6 + 3*score/100);
    
            
    obstacle.scale = 0.1;
    obstacle.lifetime = 150;

  }
}







