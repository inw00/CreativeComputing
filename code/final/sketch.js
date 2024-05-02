let data;
let inputText;
let shapes = [];
let adviceText;
let adviceTextUpper;
let randomColor;
let confettiColor = ['#F564A9','#FEFDFF','#FA7921','#FDE74C'];
let cookie;
let showImage = true;
let resetButton;
let engine;
let randomX;
let randomY1;
let randomY2;
let randomX1;
let randomX2;
let posterVersions = [];
let poster;
let currentGraphic = null; // This will store the function reference of the current graphic


function preload() {
  myFont = loadFont('./assets/Druk Cond-Super copy.otf'); 
  cookie = loadImage('./assets/cookie.png'); 
  arrow = loadImage('./assets/arrow.png'); 
}

function setup() {
  engine = Matter.Engine.create();

  const ground = new Rect(engine.world,
    createVector(width/2, height),
    createVector(width,10),
    { isStatic: true },
    '#2E282A'
    )

  colorMode(HSB);
  randomColor = random(['#009FFD', '#AF2BBF', '#F4D35E', '#3A86FF', '#E5F993']);
  // noLoop();
  let cnv = createCanvas(600, 800);
  textAlign(CENTER, CENTER);
  background(randomColor);
  resetButton = createButton('Reset');
  resetButton.position(8, 820);
  resetButton.mousePressed(resetSketch);

  saveButton = createButton('Save');
  saveButton.position(100, 820);
  saveButton.mousePressed(saveSketch);

  resetButton.style('background-color', '#FF6347');  // Tomato red background
    resetButton.style('color', 'white');              // White text color
    resetButton.style('font-size', '16px');           // Font size
    resetButton.style('border', 'none');              // No border
    resetButton.style('border-radius', '10px');        // Rounded corners
    resetButton.style('padding', '10px 20px'); 
     
  saveButton.style('background-color', '#FF6347');  // Tomato red background
    saveButton.style('color', 'white');              // White text color
    saveButton.style('font-size', '16px');           // Font size
    saveButton.style('border', 'none');              // No border
    saveButton.style('border-radius', '10px');        // Rounded corners
    saveButton.style('padding', '10px 20px'); 
  
  textWrap(WORD);
}



function draw() {
  if (showImage) {
    background(randomColor);
    initialScreen();
  } else {
    clear();
    background(randomColor);
    if (typeof currentGraphic === 'function') {
      currentGraphic(); // Execute the current graphic function
    }
    displayAdviceText(); // Ensure this is called to display advice text
  }
}

function displayAdviceText() {
  push();
  fill('#FAFF00');
  if (adviceText) {
    push(); 
      let maxWidth = width - 40;  // Adjusted for padding
      let maxHeight = height -40; // Adjusted for demonstration, set according to your UI design
      let fontSize = 5000/adviceText.length;
       if (fontSize > 300){
          fontSize = 300;
       } 
      textSize(fontSize);
      textFont(myFont);
      textWrap(WORD);

      /*
      // Dynamically adjust text size to fit within maxWidth
      while (textWidth(adviceText) > maxWidth && fontSize > 10) {
        fontSize--;
        textSize(fontSize);
      }
      */

      // Set text leading to be slightly more than the font size for clear readability
      textLeading(fontSize * 0.8);

      fill(0); // Set text color to black for visibility
      noStroke(); // No outline for the text
      textAlign(LEFT, TOP); // Align text to the left and top

      // Calculate starting y-position based on total height to vertically center
      let textHeight = fontSize * adviceText.split(' ').length;
      let yPos = (height - textHeight) / 2 + height / 4; // Adjust yPos to center the text vertically
      if (yPos < 20) {
        yPos = 50;
      }
      if (fontSize < 80) {
        yPos = 20;
      }
      
      console.log(height, fontSize, textLeading(),adviceText.split(' ').length,textHeight, yPos);

      text(adviceTextUpper, 20, yPos, maxWidth); // Draw text within specified bounds
    pop();
    }

}


function initialScreen() {
  textFont(myFont);
  fill('#FFFFEA');
  strokeWeight(2);
  stroke('#EF5D60');
  image(cookie, 0, 240, width, width);   
  push();
    noStroke();
    fill('#EB7BC0');
    textFont(myFont);
    textSize(80);
    textLeading(65);
      push();
        fill('#0CCA4A');
        textSize(150);
        text('CLICK', width/2, 80);
      pop();
    text('FOR SOME\n  RANDOM ADVICE!', width/2, 210);
    image(arrow, width -200, 200, 200, 200);
  pop();
}

function mouseClicked() {

  console.log(poster);

  if (mouseX >= 40 && mouseX <= width-40 && mouseY >= 300 && mouseY <= height-40) {
    showImage = false;
    redraw();
    posterVersions = ['lines','bubbles', 'gears','gradient','triColor','flat', 'gradientBars'];
    let poster = random(posterVersions);
  
    switch (poster) {
      case 'lines':
        currentGraphic = lines;
        break;
      case 'bubbles':
        currentGraphic = lines;
        break;
      case 'gears':
        currentGraphic = gears;
        break;
      case 'gradient':
        currentGraphic = gradient;
        break;
      case 'triColor':
        currentGraphic = triColor;
        break;
      case 'flat':
        currentGraphic = flat;
        break;  
      case 'gradientBars':
        currentGraphic = gradientBars;
        break;      
      default:
        currentGraphic = null;
    }

    redraw();
    
    fetchAdvice();
    // if (adviceText) {
    //  fitText(adviceText);
   // }
  

  }
  
  
  
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



function resetSketch() {
  randomColor = random(['#009FFD', '#DB2955', '#CCC9DC', '#F4D35E', '#3A86FF', '#E5F993']);
  clear();
  background(randomColor);

  adviceText = '';

  showImage = true;

  redraw();
}

function saveSketch() {
  saveCanvas('Advice', 'png');
}