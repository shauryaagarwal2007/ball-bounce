const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //.world
  myworld = myengine.world;
  
  ground=new GROUND();

  box1 = new BOX(200,100,50,70);
  box2 = new BOX(230,200,70,80);
}

function draw() {
  background("yellow");  

  Engine.update(myengine)

  box1.display();
  box2.display();

  ground.display();
}