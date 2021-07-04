const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var snows = [];

var bg,backgroundImg;
var santa,santaImg;
var rect;
var snow;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  santaImg = loadImage("santa.png");
 
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  santa = createSprite(680,280,60,60);
  rect = createSprite(400,280,10,200);
  rect.visible = false;

  snows.push(new Snow(400,450,60,60));
  
  
}



function draw() {
  Engine.update(engine);
  background(backgroundImg);

  santa.addImage(santaImg);
  santa.scale = 0.07;
  santa.velocityX = -1;
  if(santa.isTouching(rect)){
  santa.velocityX = 0;
  }
  for(var k = 0;k<snows.length;k++){
  snows[k].display();

  }
  
  
  drawSprites();
}