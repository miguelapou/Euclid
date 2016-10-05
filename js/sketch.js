var bx;
var by;

function setup() {
  var cnv = createCanvas(500, 500);
  bx = width/2.0;
  by = height/2.0;

  //Instantiating Objects
  square = new Square();
  circle = new Circle();
  diamond = new Diamond();
  
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
  diamond.display();
  
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
    //Diamond Methods
    diamond.mousePressed(); 
    diamond.cursorTest(); 
    diamond.mouseDragged();
    diamond.canvasEdge();
  }

  if (!mouseIsPressed) {
    square.mouseReleased();
    circle.mouseReleased();
    diamond.mouseReleased();
  }

  //synth methods
  synth.control();
}