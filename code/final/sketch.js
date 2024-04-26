let data;
let adviceText;
let randomColor;
let confettiColor = ['#F564A9','#FEFDFF','#FA7921','#FDE74C'];
let cookie;
let crack;
let showImage = true;
let resetButton;
let engine;



function preload() {
  myFont = loadFont('../assets/ChronicleDispComp-Semibold.otf'); 
  cookie = loadImage('../assets/cookie.png'); 
  crack = loadImage('../assets/crack.png')
}

function setup() {
  engine = Matter.Engine.create();

  const ground = new Rect(engine.world,
    createVector(width/2, height),
    createVector(width,10),
    { isStatic: true },
    '#2E282A'
    )
    push();
    noFill();
    const wall = new Rect(engine.world,
      createVector(width/2, height/2 - 30),
      createVector(width,5),
      { isStatic: true }
      )
    pop();
  randomColor = random(['#009FFD', '#CCC9DC', '#F4D35E', '#3A86FF']);
  // noLoop();
  let cnv = createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  background(randomColor);
  resetButton = createButton('Reset');
  resetButton.position(19, 19);
  resetButton.mousePressed(resetSketch);
}

function draw() {
  background(randomColor); 
  textFont(myFont);
  fill('#FFFFEA')
  strokeWeight(2);
  stroke('#EF5D60');
  if (showImage) {
    image(cookie, 0, 0, width, height);   
  }

  if (adviceText) {
    // Split the adjusted text back into lines for drawing
    let lines = adviceText.split('\n');
    let fontSize = parseInt(textSize(), 10); // Get current font size
    let textHeight = lines.length * (fontSize * 1.2); // Total text block height
    let startY = (height - textHeight) / 2 + fontSize / 2; // Calculate start Y position

    for (let i = 0; i < lines.length; i++) {
      text(lines[i], width / 2, startY + i * fontSize * 1.2); // Draw each line
    }
  }

  if (mouseIsPressed) {
   
    createShape(width/2, height, null);
    
  }

}
 
function fitText(text, maxWidth, maxHeight) {
  let fontSize = 60; // Start with a reasonable font size
  textSize(fontSize);

  // Adjust font size based on width
  while (textWidth(text) > maxWidth-20 && fontSize > 0) {
    fontSize--;
    textSize(fontSize);
  }

  // Calculate height needed for text
  let lines = splitTextIntoLines(text, maxWidth, fontSize);
  let textHeight = lines.length * (fontSize * 1.2); // 1.2 accounts for line spacing

  // Adjust font size based on height
  while (textHeight > maxHeight && fontSize > 0) {
    fontSize--;
    textSize(fontSize);
    lines = splitTextIntoLines(text, maxWidth, fontSize);
    textHeight = lines.length * (fontSize * 1.2);
  }

  adviceText = lines.join('\n'); // Update text to be drawn
  redraw(); // Redraw with adjusted settings
}

function splitTextIntoLines(text, maxWidth, fontSize) {
  textSize(fontSize);
  let words = text.split(' ');
  let lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let width = textWidth(currentLine + ' ' + word);
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

function mouseClicked() {
  if (mouseX >= 20 && mouseX <= width-20 && mouseY >= 20 && mouseY <= height-20) {
    showImage = false;
    fetchAdvice();
    push();
      fill('#FFFFEA');
      //rect(width/2 - 50, height/2 - 50, width-20, 40);
    pop();
    //image(crack, width/3,30, width, height);
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
  background(randomColor);
  showImage = true;
  fetchAdvice();
}