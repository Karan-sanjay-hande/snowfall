
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 


var snow=[];
 var engine , world;

function preload()
{
  backgroundImg=loadImage("snow1.jpg");
}

function setup() 
{
  createCanvas(1200,600);

  engine= Engine.create();
  world = engine.world;
 

}

function draw() 
{ 
  background(backgroundImg);
   
  Engine.update(engine);
 
  player = createSprite(300,500,40,40);  
  player1 = createSprite(200,500,40,40);


  if(frameCount%60 === 0){
    snow.push(new Snow(random(width/4,1100),10,10));
  }
  
  for(i = 0 ; i< snow.length ; i ++)
  {
    snow[i].display();
  } 


  drawSprites();

}
//player setting
function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    player.x-=5;
  }
  if(keyCode === RIGHT_ARROW)
  {
    player.x += 5;
  }
  
  
  //player1 setting
  if(keyCode === UP_ARROW)
  {
    player1.x-=5
  }
  if(keyCode === DOWN_ARROW)
  {
    player1.x += 5
  }
}

