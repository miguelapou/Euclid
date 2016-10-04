var bx;
var by;

//object variables
var synth;
var square;

function setup() {
  var cnv = createCanvas(800, 500);
  bx = width/2.0;
  by = height/2.0;

  square = new Square();
  
  
  synth = new Synth(); 
  synth.create();
  cnv.parent('sketch-holder');
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