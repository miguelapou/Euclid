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
  tri = new Tri();
  chevron = new Chevron();
  
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
  tri.display();
  chevron.display();
  
  if (mouseIsPressed) {
    //Square Methods
    if(square.locked) {
      chevron.disabled = true;
      circle.disabled = true;
      diamond.disabled = true;
      tri.disabled = true;
    } else if (chevron.locked) {
      square.disabled = true;
      circle.disabled = true;
      diamond.disabled = true;
      tri.disabled = true;
    } else if (circle.locked) {
      chevron.disabled = true;
      square.disabled = true;
      diamond.disabled = true;
      tri.disabled = true;
    } else if (diamond.locked) {
      chevron.disabled = true;
      circle.disabled = true;
      square.disabled = true;
      tri.disabled = true;
    } else if (tri.locked) {
      chevron.disabled = true;
      circle.disabled = true;
      diamond.disabled = true;
      square.disabled = true;
    } else {
      tri.disabled = false;
      chevron.disabled = false;
      circle.disabled = false;
      diamond.disabled = false;
      square.disabled = false;
    }
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
    //Triangle Methods
    tri.mousePressed(); 
    tri.cursorTest(); 
    tri.mouseDragged();
    tri.canvasEdge();
    //Chevron Methods
    chevron.mousePressed(); 
    chevron.cursorTest(); 
    chevron.mouseDragged();
    chevron.canvasEdge();
  }

  if (!mouseIsPressed) {
    square.mouseReleased();
    circle.mouseReleased();
    diamond.mouseReleased();
    tri.mouseReleased();
    chevron.mouseReleased();
  }

  //synth methods
  synth.control();
}