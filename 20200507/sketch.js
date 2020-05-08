let offset = 0;
let touchOffset = 0;
let myFont;
let mySound;
let gameover = false;

function preload(){
  soundFormats('mp3');
  myFont = loadFont('assets/Inconsolata-Black.otf');
  mySound = loadSound('assets/b');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  textFont(myFont);
  textSize(32);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(0);
  
  
  rotateX(0);
  rotateY(-10);
  noFill();
  stroke(255);
  
  offset += -0.02*(touchOffset*4);
  
  for(let i=0;i<40;i++){
    beginShape();
    for(let j=0;j<100;j++){
      let p= createVector(-230+j*5,-150+i*8);
      let n= noise(i*10,j*0.1+offset) + 0.5*noise(i*20,j*0.3+offset)+0.25*noise(i*40,j*0.3+offset);
      let f = pow((1-cos(j/100*TWO_PI))/2,2.5);
      p.y+=f*n*(-50) + n*(-4);
      vertex(p.x,p.y);
    }
    endShape();
  }
  // blendMode(LIGHTEST);
  let time = millis();
  let rot = 1.5755+touchOffset*2+10;
  if(rot > 10 && !gameover){
    
    rotateX(0);
    rotateY(rot);
    // console.log(1.5755+touchOffset*1.6-10);
    
  }
  else{
    rotateX(0);
    rotateY(10);
  }
  
  fill("#d5ff00");
    noStroke();
    let winText = text("HI",0,200,10);
  // console.log(rot);
  if(rot <= 10 && !gameover){
    // console.log(1.5+touchOffset*2);

    mySound.play();
    gameover = true;
  }
}

function touchMoved(){
  touchOffset = (mouseX - width/2)/(width/2);
}