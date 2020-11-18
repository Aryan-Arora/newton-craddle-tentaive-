
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




var roof1;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var chain1;
var chain2;
var chain3;
var chain4;
var chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	//Create the Bodies Here.
roof1=new roof(500,200,300,20)
bob1= new bob(200,300,60)
bob2= new bob(210,300,60)
bob3=new bob(220,300,60)
bob4=new bob(230,300,60)
bob5=new bob(240,300,60)
chain1 = new chain(bob1.body,roof1.body,2*2,0);
chain2=new chain(bob2.body,roof1.body,7*2,0);
chain3=new chain(bob3.body,roof1.body,12*2,0);
chain4=new chain(bob4.body,roof1.body,17*2,0);
chain5=new chain(bob5.body,roof1.body,22*2,0);

	Engine.run(engine);
	World.add(world,roof1)  
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if(keyCode===UP_ARROW){
    Matter.body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85})

  }

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}



