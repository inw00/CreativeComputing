let box;
let ground;
let engine;

function setup() {
    createCanvas(600,600);
    rectMode(CENTER);

    engine = Matter.Engine.create();
    box = Matter.Bodies.rectangle(width/2, 40, 80, 80);
    ground = Matter.Bodies.rectangle(width/2, height, width-10, 20,
    { isStatic: true});

    Matter.Composite.add(engine.world, [box, ground]);
    Matter.Runner.run(engine);
}

function draw() {
    background(200);

    rect(box.position.x, box.position.y, 80,80);
    rect(ground.position.x,ground.position.y, width-10, 30)
}

