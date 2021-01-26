const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0

function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground();
  stand1 = new Stand(390,600,250,10);
  stand2 = new Stand(900,500,200,10);
 
 
  block1 = new Block(300,575,30,40);
  console.log(block1);
  block2 = new Block(330,575,30,40);
  block3 = new Block(360,575,30,40);
  block4 = new Block(390,575,30,40);
  block5 = new Block(420,575,30,40);
  block6 = new Block(450,575,30,40);
  block7 = new Block(480,575,30,40);
  
  block8 = new Block(330,535,30,40);
  block9 = new Block(360,535,30,40);
  block10 = new Block(390,535,30,40);
  block11 = new Block(420,535,30,40);
  block12 = new Block(450,535,30,40);
  
  block13 = new Block(360,495,30,40);
  block14 = new Block(390,495,30,40);
  block15 = new Block(420,495,30,40);
  
  block16 = new Block(390,455,30,40);

  
  blocks1 = new Block(840,475,30,40);
  blocks2 = new Block(870,475,30,40);
  blocks3 = new Block(900,475,30,40);
  blocks4 = new Block(930,475,30,40);
  blocks5 = new Block(960,475,30,40);
 
  blocks6 = new Block(870,435,30,40);
  blocks7 = new Block(900,435,30,40);
  blocks8 = new Block(930,435,30,40);
  
  blocks9 = new Block(900,395,30,40);

 
  ball = Bodies.circle(50,400,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:400});

}
function draw() {
  background("black"); 
 
  textSize(30)
  fill("hotpink")
  strokeWeight(3)
  stroke("white")
  text("SCORE :"+score,100,200)
  
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke("white");
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 
  block13.display();
  block14.display();
  block15.display();
 
  block16.display();
 
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  blocks9.display();
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,80,80);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}