//Carrier Oscillator
var osc;
//Rhythm
var rhythm = 400;
//envelope
var env;
//Filter
var filter;
//modulator
var modulator; 
//delay
var delay;
//recorder
var recorder;
var soundFile;
var state = 0;

function Synth(){
  //creates sythn and synth modules
  this.create = function(){
    //instantiating objects
    this.osc = new p5.Oscillator(440, 'sine');
    env = new p5.Env();
    filter = new p5.LowPass();
    delay = new p5.Delay();
    recorder = new p5.SoundRecorder();
    soundFile = new p5.SoundFile();
    //initial parameters
    this.osc.disconnect();
    this.osc.connect(filter);
    delay.process(this.osc, .12, .7, 2300);
    delay.setType('pingPong');
    recorder.setInput();
    this.osc.start();
    this.osc.amp(env);

    // try changing the type to 'square', 'sine' or 'triangle'
    modulator = new p5.Oscillator('sine');
    modulator.start();

    // add the modulator's output to modulate the carrier's frequency
    modulator.disconnect();
    this.osc.freq( modulator );

    //Reset rhythms
    function synRhythm(){
      env.play();
      setTimeout(synRhythm, rhythm);
    }
    synRhythm();
  }
  //triggers envelope
  function envAttack(){
    env.play();
  }
  //controls synths parameters
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
    var modMaxDepth = 3000;
    var modFreq = map(tri.x, width, 0, 100, 0);
    var modDepth = map(tri.y, height, 0, 0, modMaxDepth);
    //Delay Variables
    var delTime = map(chevron.x, 0, width, 0.0, 1.0);
    var delAmp = map(chevron.y, height, 0, 0, 0.75);

    //Filter Control
    filter.freq(filtFreq);
    filter.res(filterRes);
    //Amplitude control
    var releaseLevel = 0;
    var decayTime = 0.02;
    var susPercent = 0.02;
    env.setRange(amp, releaseLevel);
    env.setADSR(envTime, decayTime, susPercent, envTime);
    //Carrier frequency control
    this.osc.freq(scale(freq));
    //Frequency Modulation Control
    modulator.freq(scale(freq)*modulationRatio(modFreq));
    modulator.amp(modDepth);
    //Delay controls
    delay.delayTime(delTime);
    delay.amp(delAmp);

    // record();
  }
  //scales ratios for the modulator
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
  //scales frequencies for carrier oscillator
  function scale(freq){
    ///Note Variables
    var A = 220;
    var B = 246.94;
    var C = 277.18;
    var D = 293.66;
    var E = 329.63;
    var F = 369.99;
    var G = 392.00;
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
  //record and download function
  function keyPressed(){
    record(SoundFile);
  }
  function record(soundFile){
    if (state === 0 && keyIsDown(LEFT_ARROW)){
      recorder.record(soundFile);
      state++;
    }
    else if(state === 1 && keyIsDown(OPTION)){
      recorder.stop();
      state++;
    }
    else if(state === 2 && keyIsDown(RIGHT_ARROW)){
      recorder.stop();
      state = 0;
    }
    console.log(state);
  }
}

