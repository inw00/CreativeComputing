let shapes = [];
let engine;

function setup() {
    createCanvas(600,600);
    rectMode(CENTER);

    engine = Matter.Engine.create();
    const box = new Rect(engine.world, 
        createVector(width/2, 40),
        createVector(80,80));
    const ground = new Rect(engine.world,
        createVector(width/2, height),
        createVector(width -10,20), { isStatic: true});

    Matter.Runner.run(engine);
    shapes.push(box);
    shapes.push(ground);
}

function draw() {
    background(200);

    shapes.forEach( shape => {
        shape.display();
    });
}