
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload(){
}

function setup() {
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof1=new roof(450,200,450,50);
  
   bob1=new Bob(330,500,30);
   bob2=new Bob(390,500,30);
   bob3=new Bob(450,500,30);
   bob4=new Bob(510,500,30);
   bob5=new Bob(570,500,30);

   //rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0);
   rope1=new rope(bob1.body,roof1.body,-175,20);
  rope2=new rope(bob2.body,roof1.body,-90, 20);
  rope3=new rope(bob3.body,roof1.body,-5, 20);
  rope4=new rope(bob4.body,roof1.body, 80, 20);
  rope5=new rope(bob5.body,roof1.body, 165, 20);
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
 rope3.display();
  rope4.display();
  rope5.display();
}



function keyPressed() {
   if (keyCode === UP_ARROW) { 
     Matter.Body.applyForce(bob1.body,bob1.body.pos,{x:-50,y:-250});
     }
    }
     

