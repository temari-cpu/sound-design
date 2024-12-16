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
  background(0);
  mm.setVolume(vol);
  vol = slider.value();
  mm.rate(sliderRate.value());
  
  mm2.setVolume(vol);
  
  mm2.rate(sliderRate.value());
  
  
  fill(34, 139, 34); // 초록색
  
  triangle(320, 200, 100, 500, 540, 500); // 아래쪽 삼각형
  triangle(320, 100, 130, 380, 510, 380); // 위쪽 삼각형
  triangle(320, 80, 160, 260, 480, 260); // 위쪽 삼각형
  
  fill(139, 69, 19); // 갈색
  rect(270, 500, 100, 140);
  
  
  fill(255,255,255); //왼쪽 눈
  ellipse(70,100+amp.getLevel()*800,20,20);
  ellipse(180,150+amp.getLevel()*800,20,20);
  ellipse(50,200+amp.getLevel()*800,20,20);
  ellipse(120,300+amp.getLevel()*800,20,20);
  ellipse(90,400+amp.getLevel()*800,20,20);
  ellipse(190,400+amp.getLevel()*800,20,20);
  ellipse(30,600+amp.getLevel()*800,20,20);
  
  
  fill(255,255,255); //오른쪽 눈
  ellipse(570,100+amp.getLevel()*800,20,20);
  ellipse(460,150+amp.getLevel()*800,20,20);
  ellipse(590,200+amp.getLevel()*800,20,20);
  ellipse(520,300+amp.getLevel()*800,20,20);
  ellipse(550,400+amp.getLevel()*800,20,20);
  ellipse(450,400+amp.getLevel()*800,20,20);
  ellipse(610,600+amp.getLevel()*800,20,20);
  
  fill(255,255,255); //왼쪽 구름
  ellipse(100,100,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(200,100,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(150,50,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(150,150,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(150,100,amp.getLevel()*500,amp.getLevel()*500);
 
  
  
  fill(0,0,0); //왼쪽 구름
  ellipse(100,100,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(200,100,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(150,50,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(150,150,amp.getLevel()*400,amp.getLevel()*400);
  
  
  
  fill(255,255,255); //오른쪽 구름
  ellipse(540,100,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(440,100,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(490,50,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(490,150,amp.getLevel()*500,amp.getLevel()*500);
  ellipse(490,100,amp.getLevel()*500,amp.getLevel()*500);
 
  
   
  fill(0,0,0); //오른쪽 구름
  ellipse(540,100,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(440,100,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(490,50,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(490,150,amp.getLevel()*400,amp.getLevel()*400);
  
  
  
  fill(0,0,255); 
  ellipse(260,250,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(380,250,amp.getLevel()*400,amp.getLevel()*400);
  ellipse(320,400,amp.getLevel()*400,amp.getLevel()*400);
  
 
  
  
  fill(255,0,255); 
  ellipse(260,250,amp.getLevel()*200,amp.getLevel()*200);
  ellipse(380,250,amp.getLevel()*200,amp.getLevel()*200);
  ellipse(320,400,amp.getLevel()*200,amp.getLevel()*200);
  
  
 
  
  
  fill(255,0,0);
  ellipse(100,500,amp.getLevel()*200,amp.getLevel()*200);
  fill(255,0,0);
  ellipse(540,500,amp.getLevel()*200,amp.getLevel()*200);
  
  fill(255, 255, 0);
  drawDiamond(320, 80, 40);
  
}

function drawDiamond(x, y, size) {
  beginShape();
  vertex(x, y - size); // 위
  vertex(x + size, y); // 오른쪽
  vertex(x, y + size); // 아래
  vertex(x - size, y); // 왼쪽
  endShape(CLOSE);
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
  
  jumpV = jumpV + 33;
  
  
  if(jumpV + 33 >= 167){
    jumpV = 167;
  }
  mm.jump(jumpV);
  
}

function jumpSong2() {
  
  jumpV = jumpV - 33;
  
  
  if(jumpV <= 33){
    jumpV = 0;
  }
  mm.jump(jumpV);
  
}


function jumpSong3() {
  
    jumpV = jumpV + 36;
  
  
  if(jumpV + 36 >= 184){
    jumpV = 184;
  }
  mm2.jump(jumpV);
  
}

function jumpSong4() {
  jumpV = jumpV - 36;
  if(jumpV <= 36){
    jumpV = 0;
  }
  mm2.jump(jumpV);
  
}






