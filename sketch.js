// 음악 하나 확인하실 때마다 다시 재생해서 확인해주세요! (1재생 1음악) 
// 1재생 2음악으로 하면 오류가 납니다..

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
  ellipse(245,217,amp.getLevel()*200,amp.getLevel()*200); 
  fill(200, 100, 255);
  ellipse(245,217,amp.getLevel()*100,amp.getLevel()*100);
  
  fill(0,0,255); 
  ellipse(338,246,amp.getLevel()*200,amp.getLevel()*200); 
  fill(200, 100, 255);
  ellipse(338,246,amp.getLevel()*100,amp.getLevel()*100);

  
  
  fill(255,0,255);
  triangle(255, 345, 199+amp.getLevel()*100, 313+amp.getLevel()*100, 259+amp.getLevel()*100, 286+amp.getLevel()*100); // 리본
  
  triangle(255, 345, 255+amp.getLevel()*100, 391+amp.getLevel()*100, 315+amp.getLevel()*100, 374+amp.getLevel()*100);
  
  triangle(255, 345, 182+amp.getLevel()*100, 323+amp.getLevel()*100, 192+amp.getLevel()*100, 349+amp.getLevel()*100); // 리본
  triangle(255, 345, 213+amp.getLevel()*100, 375+amp.getLevel()*100, 238+amp.getLevel()*100, 391+amp.getLevel()*100);
  
  
  
  fill(34, 139, 34) //분홍색 리본
  triangle(255, 345, 223+amp.getLevel()*100, 315+amp.getLevel()*100, 246+amp.getLevel()*100, 307+amp.getLevel()*100); // 리본
  triangle(255, 345, 266+amp.getLevel()*100, 375+amp.getLevel()*100, 289+amp.getLevel()*100, 369+amp.getLevel()*100);
  
  
  fill(255, 165, 0); //주황색 리본
  triangle(342, 307, 342+amp.getLevel()*100, 284+amp.getLevel()*100, 318+amp.getLevel()*100, 290+amp.getLevel()*100); // 리본
  
  triangle(342, 307, 344+amp.getLevel()*100, 329+amp.getLevel()*100, 367+amp.getLevel()*100, 318+amp.getLevel()*100);
  
  fill(255, 165, 0); //주황색 리본
  triangle(398, 280, 401+amp.getLevel()*100, 253+amp.getLevel()*100, 379+amp.getLevel()*100, 267+amp.getLevel()*100); // 리본
  
  triangle(398, 280, 403+amp.getLevel()*100, 308+amp.getLevel()*100, 423+amp.getLevel()*100, 297+amp.getLevel()*100);
 
  
  fill(255, 255, 0);
  ellipse(309,464, amp.getLevel()*200,amp.getLevel()*200);
  fill(34, 139, 34); // 초록색
  ellipse(309,464, amp.getLevel()*100,amp.getLevel()*100);
  

  
  
 
  
  

  
  fill(255, 255, 0);
  drawDiamond(320, 80, 40);
  
  
  
  fill(150, 200, 250); // 색상 설정
  noStroke(); // 외곽선 없음

  // 마우스 위치에 따라 기울어진 사각형 그리기
  let x1 = 230, y1 = 182;
  let x2 = 246, y2 = 163; 
  let x4 = 428, y3 = 261;
  let x3 = 446, y4 = 259;
  

  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  
  
  fill(150, 200, 250); // 색상 설정
  noStroke(); // 외곽선 없음

  // 마우스 위치에 따라 기울어진 사각형 그리기
  let x5 = 428, y5 = 261;
  let x6 = 438, y6 = 276; 
  let x7 = 164, y7 = 379;
  let x8 = 185, y8 = 379;
  

  quad(x5, y5, x6, y6, x7, y7, x8, y8);
  
  
  fill(150, 200, 250); // 색상 설정
  noStroke(); // 외곽선 없음

  // 마우스 위치에 따라 기울어진 사각형 그리기
  let x9 = 187, y9 = 381;
  let x10 = 177, y10 = 394; 
  let x11 = 539, y11 = 499;
  let x12 = 531, y12 = 499;
  

  quad(x9, y9, x10, y10, x11, y11, x12, y12);
  
  
  fill(150, 200, 250); // 색상 설정
  noStroke(); // 외곽선 없음

  // 마우스 위치에 따라 기울어진 사각형 그리기
  let x13 = 230, y13 = 182;
  let x14 = 246, y14 = 163; 
  let x15 = 389, y15 = 163;
  let x16 = 396, y16 = 168;
  

  quad(x13, y13, x14, y14, x15, y15, x16, y16);
  
  
  
  stroke(230, 230, 250); // 선의 색상 (빨강)
  strokeWeight(4); // 두꺼운 선
  line(100, 499, 450, 380); // 대각선
  
  
  
  fill(255,0,0); //빨간 장식
  ellipse(100,500,amp.getLevel()*200,amp.getLevel()*200);
  fill(255,0,0);
  ellipse(540,500,amp.getLevel()*200,amp.getLevel()*200);
  
  //  fill(225); // 텍스트 색상
  // textSize(16); // 텍스트 크기
  // text(`X: ${mouseX}, Y: ${mouseY}`, mouseX + 10, mouseY - 10);
  
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






