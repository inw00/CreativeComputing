let resPromise; // response promise
let data;
//let btn;

// function preload() {
//     data = loadJSON('data.json');
// }

async function setup(){
    createCanvas(400,400);

    /* btn = createButton('click me');
    btn.position(0,430);
    btn.mousePressed(event => background(random(255))); // not using curly brackets because it's one line of code
    */
    // myFunc(400);

    let res = await fetch('data.json');
    data = await res.json();
}


function draw() {
    background(220); 
    if (!data) return;


   /* for  (i = 0; i < data.shapes.length; i++) {
        const shapeObj = data.shapes[i];
        fill(shapeObj.color);
        if (shapeObj.shape === 'circle') {
            circle(shapeObj.pos[0], shapeObj.pos[1],100);
        } else {
            rect(shapeObj.pos[0], shapeObj.pos[1],100, 100);
        }
    } */

    data.shapes.sort((a,b) => (a.pos[0] - b.pos[0]));

    const filtered = data.shapes.filter(item => item.pos[0] > 10);

    data.shapes.forEach( (shapeObj) => {
        fill(shapeObj.color);
        if (shapeObj.shape === 'circle') {
            circle(shapeObj.pos[0], shapeObj.pos[1],100);
        } else {
            rect(shapeObj.pos[0], shapeObj.pos[1],100, 100);
        }
    })
}


