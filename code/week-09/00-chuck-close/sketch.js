let birds = [];
let mPressed;
let mCurrent;
let birdSize = 50;
let mDragging = false;
let myImg;
function preload() {
    myImg = loadImage('./assets/chuck.png');
}

function setup() {
    createCanvas(667,851);
    ps = new ParticleSystem(myImg);
    myImg.loadPixels();
    noStroke();
}

function draw() {
    background(0);
    ps.update()
    ps.display();
}

function mousePressed() {
    ps.addParticles(10, createVector(mouseX, mouseY))
}