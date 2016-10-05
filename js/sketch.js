var bx;
var by;

//object variables
var synth;
var square;

function setup() {
  var cnv = createCanvas(500, 500);
  bx = width/2.0;
  by = height/2.0;

  //Instantiating Objects
  square = new Square();
  circle = new Circle();
  
  synth = new Synth(); 
  synth.create();
  cnv.parent('sketch-holder');
}

function draw() {
  clear();
  // background(0,0,0);
  
  //square methods
  square.display();
  circle.display();
  
  if (mouseIsPressed) {
    //Square Methods
    square.mousePressed(); 
    square.cursorTest(); 
    square.mouseDragged();
    square.canvasEdge();
    //Circle Methods
    circle.mousePressed(); 
    circle.cursorTest(); 
    circle.mouseDragged();
    circle.canvasEdge();
  }

  if (!mouseIsPressed) {
    square.mouseReleased();
    circle.mouseReleased();
  }

  //synth methods
  synth.control();
}