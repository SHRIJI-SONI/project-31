const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;

var score=0;
var divisions=[]
var particles=[]
var plinkos=[]
var divisionHeight=300

function setup() {

  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,height,width,20);
  // leftborder = new Ground(10,540,20,1200);
  // rightborder = new Ground(470,540,20,1200);
  // topborder = new Ground(200,10,1200,20);
  // division1 = new Divisions(20,590,10,350)
  // division2 = new Divisions(100,590,10,350)
  // division3 = new Divisions(180,590,10,350)
  // division4 = new Divisions(260,590,10,350)
  // division5 = new Divisions(340,590,10,350)
  // division6 = new Divisions(420,590,10,350)
  // plinko1 = new Plinko(40,60,10)
  // plinko2 = new Plinko(80,60,10)
  

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   

   
}









  


function draw() {
  background(0,0,0);  
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if (frameCount%60===0) {
    particles = new Particle(random(width/2-10,width/2+10),10,10)
   } 
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  ground.display();
  // leftborder.display();
  // rightborder.display();
  // topborder.display();
  // division1.display();
  // division2.display();
  // division3.display();
  // division4.display();
  // division5.display();
  // division6.display();
  // particles.display(); 
  // plinko1.display(); 
  // plinko2.display(); 
  //drawSprites();
}
