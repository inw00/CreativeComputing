let btn;
let numOfCircle = 0;

function setup(){
createCanvas(windowWidth,windowHeight);
btn = createButton("click me");
btn.addClass('my-button');
btn.mousePressed(btnPressed);
}

function btnPressed {
    for (let i = 0; i < numOfCircle; i++) {
        circle(random(width), random(height), random(5,15));
    }
}

