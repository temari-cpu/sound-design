let mm;
let mm2;

let button;
let button1;
let button3;

let buttonPause;
let buttonPause1

let buttonJump;
let buttonJump2;
let buttonJump3;
let buttonJump4;

let vol;
let sliderRate;



let jumpV;
let amp;



function preload() {
  soundFormats("mp3", "ogg");
  mm2 = loadSound("letter.mp3");
  mm = loadSound("DASH.mp3");
}

function setup() {
  createCanvas(640, 640);

  
  amp=new p5.Amplitude();
  
  vol = 0.5;
  button = createButton("PLAY 1");
  button.mousePressed(playMusic);

  buttonPause = createButton("PAUSE 1");
  buttonPause.mousePressed(pauseMusic);
  
  
  buttonJump = createButton("<<");
  buttonJump.mousePressed(jumpSong2);
  buttonJump = createButton(">>");
  buttonJump.mousePressed(jumpSong);
  
  
  
  
  button1 = createButton("PLAY 2");
  button1.mousePressed(playMusic2);
  
  buttonPause1 = createButton("PAUSE 2");
  buttonPause1.mousePressed(pauseMusic2);
  
  buttonJump = createButton("<<");
  buttonJump.mousePressed(jumpSong4);
  buttonJump = createButton(">>");
  buttonJump.mousePressed(jumpSong3);
  
 
  slider = createSlider(0, 2, 0.5, 0.1);
  sliderRate = createSlider(0, 2, 1, 0.1);
  
  


  jumpV = 0;
}

function draw() {
  background(220);
  mm.setVolume(vol);
  vol = slider.value();
  mm.rate(sliderRate.value());
  
  mm2.setVolume(vol);
  
  mm2.rate(sliderRate.value());
  
  
  fill(255,255,255);
  ellipse(100,100,50,50);
  ellipse(300,100,50,50);
 
  
  
  fill(0,255,0);
  ellipse(100+amp.getLevel()*100,100,25,25);
  ellipse(300+amp.getLevel()*100,100,25,25);
  
  fill(255,0,0);
  ellipse(200,200,amp.getLevel()*1000,amp.getLevel()*1000);
  // console.log(jumpV);
  // if(jumpV > 173.424){
  //   mm.stop();
  //   button.html("PLAY");
  // }
}

function playMusic() {
  if (!mm.isPlaying()) {
    mm.play();
    button.html("STOP");
  } else {
    mm.stop();
    button.html("PLAY");
  }
}


function playMusic2() {
  if (!mm2.isPlaying()) {
    mm2.play();
    button.html("STOP");
  } else {
    mm2.stop();
    button.html("PLAY");
  }
}


function pauseMusic() {
  if (!mm.isPlaying()) {

  } else {
    mm.pause();
    button.html("PLAY");
  }
}

function pauseMusic2() {
  if (!mm2.isPlaying()) {

  } else {
    mm2.pause();
    button.html("PLAY");
  }
}



function jumpSong() {
  if(jumpV + 33.4 < 167){
    jumpV = jumpV + 33.4;
  }
  
  if(jumpV + 33.4 >= 167){
    jumpV = 167;
  }
  mm.jump(jumpV);
  
}

function jumpSong2() {
  
  jumpV = jumpV - 33.4;
  
  
  if(jumpV <= 33.4){
    jumpV = 0;
  }
  mm.jump(jumpV);
  
}


function jumpSong3() {
  if(jumpV + 36.8 < 184){
    jumpV = jumpV + 36.8;
  }
  
  if(jumpV + 36.8 >= 184){
    jumpV = 184;
  }
  mm2.jump(jumpV);
  
}

function jumpSong4() {
  jumpV = jumpV - 36.8;
  if(jumpV <= 36.8){
    jumpV = 0;
  }
  mm2.jump(jumpV);
  
}






