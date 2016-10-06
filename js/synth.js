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
//modulator
var modulator; 

function Synth(){
  this.create = function(){
    this.osc = new p5.Oscillator(440, 'sine');
    env = new p5.Env();
    filter = new p5.LowPass();
    this.osc.disconnect();
    this.osc.connect(filter);
    this.osc.start();
    this.osc.amp(env);

    // try changing the type to 'square', 'sine' or 'triangle'
    modulator = new p5.Oscillator('sine');
    modulator.start();

    // add the modulator's output to modulate the carrier's frequency
    modulator.disconnect();
    this.osc.freq( modulator );

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
    //Variables for freq and amp
    var freq = map(square.x, 0, width, 0, 150);
    var amp = map(square.y, 0, height, .9, 0);
    //Rhythm Variables
    rhythm = map(diamond.x, 0, width, 50, 1000);
    var envTime = map(diamond.y, 0, height, .4, .005);
    //Filter Variables
    var filtFreq = map(circle.x, 0, width, 75, 10000);
    var filterRes = map(circle.y, 0, height, 40, 0);
    ///FM Variables
    var modMaxFreq = 100;
    var modMaxDepth = 3000;
    var modFreq = map(tri.x, width, 0, modMaxFreq, 0);
    var modDepth = map(tri.y, height, 0, 0, modMaxDepth);

    //Filter Control
    filter.freq(filtFreq);
    filter.res(filterRes);
    //Amplitude control
    env.setRange(amp, releaseLevel);
    env.setADSR(envTime, decayTime, susPercent, envTime);
    //Carrier frequency control
    this.osc.freq(scale(freq));
    //Frequency Modulation Control
    modulator.freq(scale(freq)*modulationRatio(modFreq));
    modulator.amp(modDepth);
  }

  function modulationRatio(modFreq){
    if(modFreq >= 0 && modFreq <10){
      return 0.5;
    }
    else if(modFreq >= 10 && modFreq <20){
      return 1;
    }
    else if(modFreq >= 20 && modFreq <30){
      return 2;
    }
    else if(modFreq >= 30 && modFreq <40){
      return 3;
    }
    else if(modFreq >= 40 && modFreq <50){
      return 4;
    }
    else if(modFreq >= 50 && modFreq <60){
      return 5;
    }
    else if(modFreq >= 60 && modFreq <70){
      return 6;
    }
    else if(modFreq >= 70 && modFreq <80){
      return 7;
    }
    else if(modFreq >= 80 && modFreq <90){
      return 8;
    }
    else if(modFreq >= 90 && modFreq <100){
      return 9;
    } 
  }

  function scale(freq){
   //frequency control
    if(freq >= 0 && freq <10){
      return A;
    }
    else if(freq >= 10 && freq <20){
      return B;
    }
    else if(freq >= 20 && freq <30){
      return C;
    }
    else if(freq >= 30 && freq <40){
      return D;
    }
    else if(freq >= 40 && freq <50){
      return E;
    }
    else if(freq >= 50 && freq <60){
      return F;
    }
    else if(freq >= 60 && freq <70){
      return G;
    }
    else if(freq >= 70 && freq <80){
      return A*2;
    }
    else if(freq >= 80 && freq <90){
      return B*2;
    }
    else if(freq >= 90 && freq <100){
      return C*2;
    }
    else if(freq >= 100 && freq <110){
      return D*2;
    }
    else if(freq >= 110 && freq <120){
      return E*2;
    }
    else if(freq >= 120 && freq <130){
      return F*2;
    }
    else if(freq >= 130 && freq <140){
      return G*2;
    }
    else if(freq >= 140 && freq <150){
      return A*4;
    }
  }
}

