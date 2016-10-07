function Diamond(){
  this.x = 225;
  this.y = 400;
  this.boxSize = 20;
  this.overBox = false;
  this.locked = false;
  this.xOffset = 0.0; 
  this.yOffset = 0.0;
  this.disabled = false; 
  //this.rhythm = 400;
  rectMode(RADIUS);

  function centroid(x, y) {
    var oX = ((x + (x + 19) + (x + 40) + (x + 20)) / 4);
    var oY = ((y + (y - 20) + y + (y + 35)) / 4);
    var pVector = new p5.Vector([oX],[oY]);
    return pVector
      console.log(oX)
  } 

  this.display = function(){
    quad(this.x, this.y, this.x + 20, this.y - 20, this.x + 40, this.y, this.x + 20, this.y + 35);
    fill(247, 64, 73);
    // this.rhythm = map(diamond.x, 0, width, 100, 4000);
    // console.log('rhythm',this.rhythm);
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