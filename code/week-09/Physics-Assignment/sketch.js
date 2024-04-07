let engine;
let shapes = [];
let colorOptions = ['#F564A9','#FEFDFF','#FA7921','#FDE74C'];


function setup() {
  createCanvas(600, 600);
  noStroke();
  rectMode(CENTER);

  engine = Matter.Engine.create();

  const ground = new Rect(engine.world,
    createVector(width/2, height),
    createVector(width,10),
    { isStatic: true },
    '#2E282A'
    )

  const firstBar = new Rect(engine.world, 
    createVector(width/2, height/3),
    createVector(width/4, 20), { isStatic: true });
  
  Matter.Runner.run(engine);
  shapes.push(firstBar);

  const secondBar = new Rect(engine.world, 
    createVector(width/2, height*2/3),
    createVector(width/2, 20), { isStatic: true });
  
  Matter.Runner.run(engine);
  shapes.push(secondBar);
}

function createShape(x, y, options = {}) {
  

  let shape;
  if (random() > 0.5) {
    shape = new Rect(engine.world,
      createVector(x, y),  
      createVector(random(10, 80), random(10,80)),
      options, color);
  } else {
    shape = new Circle(engine.world,
      createVector(x, y), 
      createVector(random(10, 80), random(10,80)),
      options, color);
  }
  shapes.push(shape);
}

function draw() {
  background('#5BC0EB');

  shapes.forEach( shape => {
    shape.display();
  });

  if (mouseIsPressed) {
   
    createShape(mouseX, mouseY, null);
    
  }
}