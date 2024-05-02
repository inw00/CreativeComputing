function lines() {
    //console.log(randomY);
    push();
        for (let i = 0; i < 40; i++) {
            randomY1 = random(height-20);
            randomY2 = random(height-20);
            randommX1 = random(width-20);
            stroke('#EC4E20');
            strokeWeight(20);
            line(10, randomY1, width-10, randomY2);
            line(randomX1,10, randomX2, height-10);
        }

    pop();
    noLoop();
}

function bubbles() {
    // console.log(randomX);
    push();
        for (let i = 0; i < 100; i++) {
            randomX = random(width);
            randomY1 = random(height-20);
            fill('#0496FF');
            strokeWeight(1);
            circle(randomX1, randomY1,108);
            noLoop();
        }
    pop();
    console.log(randomX1, randomY1)
    noLoop();
}

function gears() {
    function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }      

    // white pattern
    for (j=0; j<100; j++) {
        for (i=0; i<20; i++) {
            push(); 
                noStroke();
                translate(20 + i* width/20, 20 + j* height/20);            
                fill('#F4FAFF');
                rotate(-frameCount / 100.0);
                star(0, 0, 10, 10, 5);
            pop();
        }
    }
    push(); // green
         noStroke();
        translate(width * 0.2, height * 0.6);            
        fill('#7EE081');
        rotate(frameCount / 200.0);
        star(0, 0, 100, 300, 50);
    pop();

    push(); // purple
        noStroke();
        translate(width * 0.7, height * 0.3);            
        fill('#A14EBF');
        rotate(-frameCount / 100.0);
        star(0, 0, 150, 200, 50);
    pop();

    push(); // blue
        noStroke();
        translate(width * 0.2, height * 0.2);            
        fill('#7CC6FE');
        rotate(-frameCount / 100.0);
        star(0, 0, 150, 30, 45);
    pop();

    push(); // white 
        noStroke();
        translate(width * 0.7, height * 0.7);            
        fill('#5BC8AF');
        rotate(-frameCount / 100.0);
        star(0, 0, 150, 70, 30);
    pop();

    push(); // white 
        noStroke();
        translate(width * 0.8, height * 0.9);            
        fill('#F1FAEE');
        rotate(-frameCount / 100.0);
        star(0, 0, 100, 40, 30);
    pop();
}

function gradient() {
    let cols = 60;
    let rows = 60;
    let colSpacing = width / cols;
    let rowSpacing = height / rows;

    
    let startColor = color('#EE6352');
    let endColor = color('#08B2E3');
    push(); 
        noStroke();
        for (let i=0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let lerpAmt = (i + j * cols) / (cols * rows - 1);

                let interColor = lerpColor(startColor, endColor, lerpAmt);
                fill(interColor);

                let x = i * colSpacing + colSpacing / 2;
                let y = j * rowSpacing + rowSpacing / 2;
                circle(x,y,30);
            }
        }
        fill('#ffffff');
        circle(width/2,height/4, 400);
        circle(width/2,height*3/4, 400);

    pop();
}

function triColor() {
    push();
        noStroke();
        push();
            fill('#FFC6D9');
            triangle(0,0,0,width, height, 0);
        pop();
        push();
            fill('#C3BEF7');
            triangle(width/2,height/2,width,0, 0, height);
        pop();
    pop();
}

function flat() {
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

        shapes.forEach( shape => {
            shape.display();
          });

        createShape(width/2, 0, null);

      }
    pop();
}



function gradientBars() {
    let cols = 60;
    let rows = 60;
    let colSpacing = width / cols;
    let rowSpacing = height / rows;

    
    let startColor = color('#F51AA4');
    let endColor = color('#EBF5EE');
    push(); 
        noStroke();
        for (let i=0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let lerpAmt = (i + j * cols) / (cols * rows - 1);

                let interColor = lerpColor(startColor, endColor, lerpAmt);
                fill(interColor);

                let x = i * colSpacing + colSpacing / 2;
                let y = j * rowSpacing + rowSpacing / 2;
                circle(x,y,10);
            }
        }
    pop();
    cols = 60;
    rows = 60;
    colSpacing = width / cols;
    rowSpacing = height / rows;

    
    startColor = color('#EBF5EE');
    endColor = color('#F51AA4');
    push(); 
        noStroke();
        for (let i=0; i < cols; i+=2) {
            for (let j = 0; j < rows; j++) {
                let lerpAmt = (i + j * cols) / (cols * rows - 1);

                let interColor = lerpColor(startColor, endColor, lerpAmt);
                fill(interColor);

                let x = i * colSpacing + colSpacing / 2;
                let y = j * rowSpacing + rowSpacing / 2;
                circle(x,y,10);
            }
        }
}
