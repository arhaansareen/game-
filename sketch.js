const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  


  if(keyDown("RIGHT_ARROW")) {
    
    ballRIGHT();

  }

  if(keyDown("LEFT_ARROW"))
  {

    ballUP();

  }




  ground =new Ground(200,390,400,20);
  ground2 = new Ground(300,200,10,80);
  ground3 = new Ground(350,240,100,10);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball = Bodies.circle(200,200,20,20);
  World.add(world,ball);
}

function draw() 
{
  background(51);
  ground.show();
  ground2.show();
  ground3.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);
}
function ballUP()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
function ballRIGHT()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
