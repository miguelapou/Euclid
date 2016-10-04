var bx;
var by;
var boxSize = 75;
var overBox = false;
var locked = false;
var xOffset = 0.0; 
var yOffset = 0.0; 

var synth;

function setup() {
  createCanvas(500, 500);
  bx = width/2.0;
  by = height/2.0;
  rectMode(RADIUS); 

  synth = new Synth(); 
  synth.create();
}

function draw() {
  background(0);

  
  synth.control();
  
  // Test if the cursor is over the box 
  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
    if(!locked) { 
      stroke(255); 
      fill(153);
    } 
  } else {
    stroke(153);
    fill(153);
    overBox = false;
  }
  
  // Draw the shape
    canvasEdge();
}

function canvasEdge(){
  if ((locked) && (mouseY >= height - (boxSize/2))) {
    by = height - (boxSize/2);
  }else if ((locked) && (mouseY <= 0 + (boxSize/2))){
    by = 0 + (boxSize/2);
  }else if ((locked) && (mouseX >= width - (boxSize/2))) {
    bx = width - (boxSize/2);
  }else if ((locked) && (mouseX <= 0 + (boxSize/2))){
    bx = 0 + (boxSize/2);
  }
  ellipse(bx, by, boxSize, boxSize);
}

function mousePressed() {
  if(overBox) { 
    locked = true; 
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  
  xOffset = mouseX-bx; 
  yOffset = mouseY-by; 

}

function mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset; 
    by = mouseY-yOffset; 
  }
}

function mouseReleased() {
  locked = false;
}