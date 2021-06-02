const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var bgImage,boyImage;
var snow1;
var snow2;

var snowflakes;
var snowflakes2;

var boy;
var walk;

function preload(){

bgImage=loadImage("snow1.jpg");
snow1=loadImage("snow4.webp");
snow2=loadImage("snow5.webp");

walk=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png",)

}


function setup() {
createCanvas(800,600);

engine=Engine.create();
world=engine.world;

boy=createSprite(10,500,10,10);
boy.addAnimation("walking",walk);
boy.scale=0.5;
boy.velocityX=2;

}

function draw() {
 
background("black");  
  
Engine.update(engine);


image(bgImage,0,0,800,800);

if (frameCount%20===0){
    snowflakes=createSprite(Math.round(random(10,790)),0,10,10);
    snowflakes.addImage(snow1);
    snowflakes.scale=0.05;
    snowflakes.velocityY=5;
    snowflakes.lifetime=120;

}
if (frameCount%20===0){
    snowflakes2=createSprite(Math.round(random(10,790)),0,10,10);
    snowflakes2.addImage(snow2);
    snowflakes2.scale=0.05;
    snowflakes2.velocityY=5;
    snowflakes2.lifetime=120;

}

if (boy.x>800){
    boy.x=-10;
}
drawSprites();
}