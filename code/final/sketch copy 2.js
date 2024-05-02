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
  randomColor = random(['#009FFD', '#CCC9DC', '#F4D35E', '#3A86FF', '#E5F993']);
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
  if (adviceText) {
    let formattedText = fitText(adviceText, width - 40, height - 40); // Generate formatted text
    let yPos = 100; // Start y-position for the text
    textSize(30); // Assume a fixed text size for simplicity, adjust as needed
    textLeading(34); // Set line height

    fill(0); // Set text color to black for visibility
    stroke(255); // White stroke can help with visibility on complex backgrounds
    strokeWeight(0.5); // Light stroke weight

    // Draw each line of the formatted text
    formattedText.forEach(line => {
      text(line, 20, yPos, width - 40); // Draw text with padding
      yPos += 34; // Increment y position by line height
    });
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
 
function fitText(inputText, maxWidth, maxHeight) {
  let fontSize = 72; // Start with a reasonable font size
  textSize(fontSize);
  textLeading(fontSize * 1.4);

  // Adjust font size based on width
  while (textWidth(inputText) > maxWidth && fontSize > 10) {
    fontSize--;
    textSize(fontSize);
    textLeading(fontSize * 1.4);
  }
  let lines = splitTextIntoLines(inputText, maxWidth, fontSize);
  let textHeight = lines.length * (fontSize * 1.4); // 1.2 accounts for line spacing
  // Adjust font size based on height
  while (textHeight > maxHeight && fontSize > 10) {
    fontSize--;
    textSize(fontSize);
    textLeading(fontSize * 1.4);
    lines = splitTextIntoLines(inputText, maxWidth, fontSize);
    textHeight = lines.length * (fontSize * 1.4);
  }
  return lines;

  adviceText = lines.join('\n'); // Update text to be drawn
  let yPos = 100; // Start position for text, adjust as needed
  for (let line of lines) {
    text(line, 10, yPos, maxWidth); // Draw each line
    yPos += fontSize * 1.4; // Move to next line position
  }  
  redraw(); // Redraw with adjusted settings
  console.log(lines.length,fontSize,textHeight, maxWidth, maxHeight);

}

function splitTextIntoLines(inputText, maxWidth, fontSize) {
  textSize(fontSize); // Ensure the textSize is set for correct measurements
  let words = inputText.split(' '); // Split the input text into words
  let lines = [];
  let currentLine = words[0]; // Start with the first word

  for (let i = 1; i < words.length; i++) {
      let word = words[i];
      let testLine = currentLine + ' ' + word;
      // Check if adding this word would exceed the maxWidth
      if (textWidth(testLine) > maxWidth) {
        lines.push(currentLine); // Push the current line to the lines array
        currentLine = word;
      } else {
          currentLine = testLine; // Start a new line with the current word
      }
  }
  lines.push(currentLine); // Push the last line to the array
  return lines; // Return the array of lines
}


function mouseClicked() {

  console.log(poster);

  if (mouseX >= 40 && mouseX <= width-40 && mouseY >= 300 && mouseY <= height-40) {
    showImage = false;
    redraw();
    posterVersions = ['lines','bubbles', 'gears','gradient',5,6];
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