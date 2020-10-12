const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  var particles = [];
  var plinkos = [];
  var divisions = [];

  
  ground = new Ground(240,height,480,50);
  division1 = new Division(10,675,10,200);
  division2 = new Division(80,675,10,200);
  division3 = new Division(150,675,10,200);
  division4 = new Division(240,675,10,200);
  division5 = new Division(320,675,10,200);
  division6 = new Division(410,675,10,200);
  division7 = new Division(470,675,10,200);



var divisionHeight = 300;
for(var k = 0; k <= innerWidth; k = k +88){
  divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
}
}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  drawSprites();
}