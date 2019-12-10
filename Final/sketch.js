//"May 17, 2011 Full Moon" by spiderman (Frank) is licensed under CC BY-SA 2.0
//"October 27, 2015" by osseous is licensed under CC BY 2.0
//"Ubiquitous Moon" by jpstanley is licensed under CC BY-NC-SA 2.0
//"half a pie but one quarter slice" by circulating is licensed under CC BY-NC-SA 2.0
//"My first Moon shot" by Cassandre Derory is licensed under CC BY 2.0
//<a href="https://www.freeiconspng.com/img/618">Gold Star Png | New Calendar Template Site</a>
//"Luna 2016-04-17" by cafuego is licensed under CC BY-SA 2.0 




var pointX = 0;
var pointY = 0;

var soundFile = [];

var newMPlay = false;
var waxingCPlay = false;
var waxingQPlay = false;
var waxingGPlay = false;
var fullMPlay = false;
var waningGPlay = false;
var waningQPlay = false;
var waningCPlay = false;

var newM, waningC, waningQ, waningG, fullM, waxingG, waxingQ, waxingC, funnyMan;

var showOrHide = false;


function preload(){
  newM = loadImage("Moons/newM.jpg");
  waningC = loadImage("Moons/waningC.jpg");
  waningQ = loadImage("Moons/waningQ.png");
  waningG = loadImage("Moons/waningG.png");
  fullM = loadImage("Moons/fullM.jpg");
  waxingG = loadImage("Moons/waxingG.png");
  waxingQ = loadImage("Moons/waxingQ.png");
  waxingC = loadImage("Moons/waxingC.jpg");
  funnyMan = loadImage("Moons/funnyman.jpg");

  play1 = loadImage('assets/play.png');
  pause1 = loadImage('assets/pause.png');

  play2 = loadImage('assets/play.png');
  pause2 = loadImage('assets/pause.png');
  play3 = loadImage('assets/play.png');
  pause3 = loadImage('assets/pause.png');
  play4 = loadImage('assets/play.png');
  pause4 = loadImage('assets/pause.png');
  play5 = loadImage('assets/play.png');
  pause5 = loadImage('assets/pause.png');
  play6 = loadImage('assets/play.png');
  pause6 = loadImage('assets/pause.png');
  play7 = loadImage('assets/play.png');
  pause7 = loadImage('assets/pause.png');
  play8 = loadImage('assets/play.png');
  pause8 = loadImage('assets/pause.png');

  soundFile[0] = loadSound('assets/01_Aphrodisiac.mp3');
  soundFile[1] = loadSound('assets/02_Eclipse10.6.mp3');
  soundFile[2] = loadSound('assets/03_Ghost10.15.mp3');
  soundFile[3] = loadSound('assets/04_neverleaveme.mp3');
  soundFile[4] = loadSound('assets/05_alone.mp3');
  soundFile[5] = loadSound('assets/06_spacedemo.mp3');
  soundFile[6] = loadSound('assets/07_Sparkle.mp3');
  soundFile[7] = loadSound('assets/08_FoundMyself.m4a');

  starImage1 = loadImage("assets/star.jpg");
  starImage2 = loadImage("assets/star.jpg");



}

function setup() {
  // put setup code here

  createCanvas(500,500);




  pointX = width/2;
  pointY = height/2;
  console.log('pointX ' + pointX + ' pointY ' + pointY );

  //soundFile[0].play();
  show = createButton("Surprise");
  show.position(5,480);
  show.mousePressed(function(){

    showOrHide = true;
  });

  hide = createButton("Hide Surprise");
  hide.position(410,480);
  hide.mousePressed(function(){

    showOrHide = false;
  });
//your action goes in here
//the button mousepressed function is tied to the general mouse pressed function

}


function draw() {
  // put drawing code here
  background(0);
  image(newM,pointX-50,pointY-235,newM.width/7,newM.height/7);//new moon
  image(waningC,pointX-170,pointY-180,waningC.width/9,waningC.height/9);// waningc
  image(waningG,pointX-280,pointY+8,waningG.width/13,waningG.height/13);
  image(waningQ,pointX-245,pointY-70,waningQ.width/8,waningQ.height/8);
  image(fullM,pointX-55,pointY+130,fullM.width/6,fullM.height/6);
  image(waxingG,pointX+85,pointY+55,waxingG.width/13,waxingG.height/13);
  image(waxingQ,pointX+145,pointY-68,waxingQ.width/9,waxingQ.height/8);
  image(waxingC,pointX+90,pointY-180,waxingC.width/8,waxingC.height/8);




  //new moon
  if(newMPlay == false){
    image(play1,pointX-15,pointY-213,play1.width/10,play1.height/10);// play1

  }else{
    image(pause1,pointX-15,pointY-213,pause1.width/10,pause1.height/10);// pause1
    fill('grey');
    textSize(11);
    text('New Moon' ,230,120);
  }
//waxing crescent
  if(waxingCPlay == false){
    image(play2,pointX+131,pointY-160,play2.width/10,play2.height/10);// play2
  }else{
    image(pause2,pointX+131,pointY-160,pause2.width/10,pause2.height/10);// pause2
    fill('grey');
    textSize(11);
    text('Waxing Crescent' ,365,60)
  }
  //waxing Quarter
  if(waxingQPlay == false){
    image(play3,pointX+185,pointY-38,play3.width/10,play3.height/10);// play3
  }else{
    image(pause3,pointX+185,pointY-38,pause3.width/10,pause3.height/10);// pause3
    fill('grey');
    textSize(11);
    text('Waxing Quarter' ,400,176)
}
//waxing Gib
if(waxingGPlay == false){
  image(play4,pointX+115,pointY+85,play4.width/10,play4.height/10);// play4
}else{
  image(pause4,pointX+115,pointY+85,pause4.width/10,pause4.height/10);// pause4
  fill('grey');
  textSize(11);
  text('Waxing Gibbous' ,400,410)
}
//full moon
if(fullMPlay == false){
  image(play5,pointX-20,pointY+155,play5.width/10,play5.height/10);// play5
}else{
  image(pause5,pointX-20,pointY+155,pause5.width/10,pause5.height/10);// pause5
  fill('grey');
  textSize(11);
  text('Full Moon' ,228,375);
}
//waning G
if(waningGPlay == false){
  image(play6,pointX-155,pointY+80,play6.width/10,play6.height/10);// play6
}else{
  image(pause6,pointX-155,pointY+80,pause6.width/10,pause6.height/10);// pause6
  fill('grey');
  textSize(11);
  text('Waning Gibbous' ,40,410)
}
//waningQ
if(waningQPlay == false){
  image(play7,pointX-225,pointY-43,play7.width/10,play7.height/10);// play7

}else{
  image(pause7,pointX-225,pointY-43,pause7.width/10,pause7.height/10);// pause7
  fill('grey');
  textSize(11);
  text('Waning Quarter' ,19,175);
}
//waning C
if(waningCPlay == false){
  image(play8,pointX-167,pointY-160,play8.width/10,play8.height/10);// play8

}else{
  image(pause8,pointX-167,pointY-160,pause8.width/10,pause8.height/10);// pause8
  fill("grey");
  textSize(11);
  text("Waning Crescent" ,50,60);
}

fill("white");
textSize(18);
textFont('Georgia');
text("MOON  SONGS" ,190,225);

fill('grey');
textSize(14);
text("Click a moon for a tune" ,182,250)


image(starImage1,pointX-100,pointY-100,starImage1.width/20,starImage1.height/20);
image(starImage2,pointX+50,pointY+60,starImage2.width/20,starImage2.height/20);

if(showOrHide == true){
  image(funnyMan,pointX-230,pointY-220,funnyMan.width/7,funnyMan.height/8);
  fill('white');
  textFont('helvetica');
  text('EP available on all streaming platforms in 2020! ' , pointX-60,pointY+95);
}
}
function mousePressed(){
  //new moon
  if(dist(mouseX,mouseY,pointX-50,pointY-235) < 100){
    console.log("newMoon");
    if(newMPlay == false){
      soundFile[0].play();
      newMPlay = true;
      text("hey");
    }else{
      newMPlay = false;
      soundFile[0].stop();
    }
}
  if(dist(mouseX,mouseY,pointX+130,pointY-160) < 50){
    console.log("waxingCrescent");
    if(waxingCPlay == false){
      soundFile[1].play();
      waxingCPlay = true;
    }else{
      waxingCPlay = false;
      soundFile[1].stop();
}
}
//waxing Quarter
if(dist(mouseX,mouseY,pointX+185,pointY-38) < 50){
  console.log("waxingQuarter");
  if(waxingQPlay == false){
    soundFile[2].play();
    waxingQPlay = true;
  }else{
    waxingQPlay = false;
    soundFile[2].stop();
}
}
//waxing G
if(dist(mouseX,mouseY,pointX+115,pointY+85) < 50){
  console.log("waxingGib");
  if(waxingGPlay == false){
    soundFile[3].play();
    waxingGPlay = true;
  }else{
    waxingGPlay = false;
    soundFile[3].stop();
}
}
//full Moon
if(dist(mouseX,mouseY,pointX-20,pointY+155) < 50){
  console.log("fullMoon");
  if(fullMPlay == false){
    soundFile[4].play();
    fullMPlay = true;
  }else{
    fullMPlay = false;
    soundFile[4].stop();
}
}
//waning G
if(dist(mouseX,mouseY,pointX-155,pointY+80) < 50){
  console.log("waningGib");
  if(waningGPlay == false){
    soundFile[5].play();
    waningGPlay = true;
  }else{
    waningGPlay = false;
    soundFile[5].stop();
}
}
//waning Q
if(dist(mouseX,mouseY,pointX-225,pointY-43) < 50){
  console.log("waningQuarter");
  if(waningQPlay == false){
    soundFile[6].play();
    waningQPlay = true;
  }else{
    waningQPlay = false;
    soundFile[6].stop();
}
}

//waning C
if(dist(mouseX,mouseY,pointX-167,pointY-160) < 50){
  console.log("waningCrescent");
  if(waningCPlay == false){
    soundFile[7].play();
    waningCPlay = true;
  }else{
    waningCPlay = false;
    soundFile[7].stop();
}
}


}
