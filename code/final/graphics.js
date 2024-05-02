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
        star(0, 0, 150, 300, 50);
    pop();

    push(); // purple
        noStroke();
        translate(width * 0.7, height * 0.3);            
        fill('#313B72');
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
        fill('#F4FAFF');
        rotate(-frameCount / 100.0);
        star(0, 0, 150, 70, 30);
    pop();
}

function gradient() {
    let cols = 20;
    let rows = 20;
    let spacing = width / cols;
    
    let startColor = color('#DB2955');
    let endColor = color('#B98389');
    push(); 
        for (let i=0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let lerpAmt = (i + j * cols) / (cols * rows - 1);

                let interColor = lerpColor(startColor, endColor, lerpAmt);
                fill(interColor);

                let x = i * spacing + spacing / 2;
                let y = j * spacing + spacing / 2;
            circle(x,y,20);
            }
    }
    pop();
}