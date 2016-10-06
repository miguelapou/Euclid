var osc;

///Note Variables
var A = 220;
var B = 246.94;
var C = 277.18;
var D = 293.66;
var E = 329.63;
var F = 369.99;
var G = 392.00;

///Envelope
var releaseLevel = 0;
var decayTime = 0.02;
var susPercent = 0.02;
//Rhythm
var rhythm = 400;
//envelope
var env;
//Filter
var filter;

function Synth(){
  this.create = function(){
    this.osc = new p5.Oscillator(440, 'triangle'); // set frequency and type
    env = new p5.Env();
    filter = new p5.LowPass();
    this.osc.disconnect();
    this.osc.connect(filter);
    this.osc.start();
    this.osc.amp(env);

    //setInterval(envAttack, rhythm);
    function synRhythm(){
      env.play();
      setTimeout(synRhythm, rhythm);
  }
    synRhythm();
  }

  function envAttack(){
    env.play();
  }

  this.control = function(){
    //Variables for freq, amp, and rhythm
    var freq = map(square.x, 0, width, 0, 150);
    var amp = map(square.y, 0, height, .9, 0);
    rhythm = map(diamond.x, 0, width, 50, 1000);
    var envTime = map(diamond.y, 0, height, .4, .005);
    var filtFreq = map(circle.x, 0, width, 75, 10000);
    var filterRes = map(circle.y, 0, height, 40, 0);
    filter.freq(filtFreq);
    filter.res(filterRes);



    //frequency control
    if(freq >= 0 && freq <10){
      freq= A;
    }
    else if(freq >= 10 && freq <20){
      freq= B;
    }
    else if(freq >= 20 && freq <30){
      freq= C;
    }
    else if(freq >= 30 && freq <40){
      freq= D;
    }
    else if(freq >= 40 && freq <50){
      freq= E;
    }
    else if(freq >= 50 && freq <60){
      freq= F;
    }
    else if(freq >= 60 && freq <70){
      freq= G;
    }
    else if(freq >= 70 && freq <80){
      freq= A*2;
    }
    else if(freq >= 80 && freq <90){
      freq= B*2;
    }
    else if(freq >= 90 && freq <100){
      freq= C*2;
    }
    else if(freq >= 100 && freq <110){
      freq= D*2;
    }
    else if(freq >= 110 && freq <120){
      freq= E*2;
    }
    else if(freq >= 120 && freq <130){
      freq= F*2;
    }
    else if(freq >= 130 && freq <140){
      freq= G*2;
    }
    else if(freq >= 140 && freq <150){
      freq= A*4;
    }
    this.osc.freq(freq);
    //Amplitude control
    env.setRange(amp, releaseLevel);
    env.setADSR(envTime, decayTime, susPercent, envTime);  
  }
}