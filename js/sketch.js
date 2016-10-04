var bx;
var by;

//object variables
var synth;
var square;

function setup() {
  createCanvas(500, 500);
  bx = width/2.0;
  by = height/2.0;

  square = new Square();
  
  
  synth = new Synth(); 
  synth.create();
}

function draw() {
    background(0);
  //square methods
  square.display();
  
  square.canvasEdge();
  square.mousePressed();
  square.cursorTest();
  square.mouseDragged();
  square.mouseReleased();
  //synth methods
  synth.control();
}