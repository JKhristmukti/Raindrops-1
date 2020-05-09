const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var r1,r2,r3,world,engine;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.World;

    r1 = new Raindrop1(0,0,3,10);   

    r2 = new Raindrop2(0,-10,3,10);   

    r3 = new Raindrop3(0,-20,3,10);   

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  for (let r1 = 0; r1 < array.length; r1++) {
    const element = array[r1];   
  }

  for (let r2 = 0; r2 < array.length; r2++) {
    const element = array[r2];   
  }

  for (let r3 = 0; r3 < array.length; r3++) {
    const element = array[r3];   
  }

  r1.display();
  r2.display();
  r3.display(); 
  drawSprites();
}