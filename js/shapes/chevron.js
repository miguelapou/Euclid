function Chevron(){
  this.x = 340;
  this.y = 140;
  this.boxSize = 20;
  this.overBox = false;
  this.locked = false;
  this.xOffset = 0.0; 
  this.yOffset = 0.0; 
  rectMode(RADIUS);

  this.display = function(){
    quad(this.x, this.y, this.x + 30, this.y - 40, this.x + 60, this.y, this.x + 30,  this.y - 15);
    fill(120, 220, 75);
  }
  this.cursorTest = function(){
    if (mouseX > this.x-this.boxSize && mouseX < this.x+this.boxSize && 
      mouseY > this.y-this.boxSize && mouseY < this.y+this.boxSize) {
      this.overBox = true;  
      if(!this.locked) { 
        stroke(255); 
        fill(255, 100, 255);
      } 
    }
    else {
      stroke(153);
      fill(155, 100, 255);
      this.overBox = false;
    }
  }
  this.canvasEdge = function(){
    if ((this.locked) && (mouseY >= height - (this.boxSize/2))) {
      this.y = height - (this.boxSize/2);
    }else if ((this.locked) && (mouseY <= 0 + (this.boxSize/2))){
      this.y = 0 + (this.boxSize/2);
    }else if ((this.locked) && (mouseX >= width - (this.boxSize/2))) {
      this.x = width - (this.boxSize/2);
    }else if ((this.locked) && (mouseX <= 0 + (this.boxSize/2))){
      this.x = 0 + (this.boxSize/2);
    }
  }
  this.mousePressed = function() {
    if(!this.locked && this.overBox) { 
      this.locked = true; 
      fill(0, 100, 255);
      this.xOffset = mouseX-this.x; 
      this.yOffset = mouseY-this.y;
    }
  }
  this.mouseDragged = function() {
    if(this.locked) {
      this.x = mouseX-this.xOffset; 
      this.y = mouseY-this.yOffset; 
    }
  }
  this.mouseReleased = function() {
    this.locked = false;
  }
}