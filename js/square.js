function Square(){
  this.boxSize = 75;
  this.overBox = false;
  this.locked = false;
  this.xOffset = 0.0; 
  this.yOffset = 0.0; 
  rectMode(RADIUS);

  this.display = function(){
    // console.log(bx, by);
    rect(bx, by, this.boxSize, this.boxSize);
  }
  this.cursorTest = function(){
    if (mouseX > bx-this.boxSize && mouseX < bx+this.boxSize && 
      mouseY > by-this.boxSize && mouseY < by+this.boxSize) {
      this.overBox = true;  
      if(!this.locked) { 
        stroke(255); 
        fill(255, 100, 255);
      } 
    }
    else {
      stroke(153);
      fill(153);
      this.overBox = false;
    }
  }

  this.canvasEdge = function(){
    if ((this.locked) && (mouseY >= height - (this.boxSize/2))) {
      by = height - (this.boxSize/2);
    }else if ((this.locked) && (mouseY <= 0 + (this.boxSize/2))){
      by = 0 + (this.boxSize/2);
    }else if ((this.locked) && (mouseX >= width - (this.boxSize/2))) {
      bx = width - (this.boxSize/2);
    }else if ((this.locked) && (mouseX <= 0 + (this.boxSize/2))){
      bx = 0 + (this.boxSize/2);
    }
  }

  this.mousePressed = function() {
    if(this.overBox) { 
      this.locked = true; 
      fill(0, 100, 255);
    } else {
      this.locked = false;
    }
    this.xOffset = mouseX-bx; 
    this.yOffset = mouseY-by;
  }
  this.mouseDragged = function() {
    if(this.locked) {
      bx = mouseX-this.xOffset; 
      by = mouseY-this.yOffset; 
    }
  }
  this.mouseReleased = function() {
    this.locked = false;
  }
}