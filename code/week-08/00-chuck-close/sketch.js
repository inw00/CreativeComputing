let birds = [];
let mPressed;
let mCurrent;
let birdSize = 50;
let mDragging = false;


function setup() {
    createCanvas(600,600);
    
}

function draw() {
    background(200);
    ps.update()
    ps.display();
}

function mousePressed() {
    ps.addParticles(10, createVector(mouseX))
}