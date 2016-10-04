var osc;

function Synth(){

  this.create = function(){
    this.osc = new p5.Oscillator(440, 'sine'); // set frequency and type
    this.osc.amp(.5);
    this.osc.start();
  }

  this.control = function(){
    var freq = map(mouseX, 0, width, 40, 880);
    this.osc.freq(freq);

    var amp = map(mouseY, 0, height, 1, .01);
    this.osc.amp(amp);
  }
}