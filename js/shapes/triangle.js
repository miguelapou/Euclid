function Tri(){
  this.x = 100;
  this.y = 400;
  this.boxSize = 20;
  this.overBox = false;
  this.locked = false;
  this.xOffset = 0.0; 
  this.yOffset = 0.0;
  this.disabled = false; 
  rectMode(RADIUS);

  function centroid(x, y) {
    var oX = ((x + (x + 20) + (x + 41)) / 3);
    var oY = ((y + (y - 40) + y) / 3);
    var pVector = new p5.Vector([oX],[oY]);
    return pVector
  } 

  this.display = function(){
    triangle(this.x, this.y, this.x + 20, this.y - 40, this.x + 40, this.y);
    fill(10, 120, 175);
  }
  this.cursorTest = function(){
    if (mouseX > centroid(this.x, this.y).x-this.boxSize && mouseX < centroid(this.x, this.y).x+this.boxSize && 
      mouseY > centroid(this.x, this.y).y-this.boxSize && mouseY < centroid(this.x, this.y).y+this.boxSize) {
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
      if(this.disabled === false) {
        if(!this.locked && this.overBox) { 
          this.locked = true; 
          fill(0, 100, 255);
          this.xOffset = mouseX-this.x; 
          this.yOffset = mouseY-this.y;
        }
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
    this.overBox = false;
  }
}