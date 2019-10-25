var pointX = 0;
var pointY = 0;

var bodyColor = 'lightskyblue';
var earColor = 'lightskyblue';
var earSize = 50;
var eyeSize = 18;




//var quote = [];
var quoteText = ["GO CANES","LIVE IN THE MOMENT","YO"];

var quotePosition = (100,100);

var random = [2];

var currentQuote=0;

var showQuote = false;



var showOrHide = false;

var hitSize = 60;

var hitX = 321;
var hitY = 270;







function setup() {

  createCanvas(500,500);
  background('lavender');
  pointX = width/2;
  pointY = height/2;
  console.log('pointX ' + pointX + ' pointY ' + pointY );

  show = createButton("CLICK ME");
  show.position(width/2 - 50,height/2);
  show.mousePressed(function(){
    showOrHide = true;
    show.hide();

  });




}
  //your action goes in here
  //the button mousepressed function is tied to the general mouse pressed function




function draw() {
  background('lavender');



  if(showOrHide == true){




  strokeWeight(1);
  fill(bodyColor);
  rect(pointX - 65,pointY - 40,130,80,20);//face

  fill(earColor);
  ellipse(pointX - 67,pointY - 60,earSize,earSize);//left ear

  fill(earColor);
  ellipse(pointX + 67,pointY - 60,earSize,earSize);//right ear

  fill(255);
  ellipse(pointX - 30,pointY - 20,eyeSize,eyeSize);//left eye

  ellipse(pointX + 30,pointY - 20,eyeSize,eyeSize);//right eye

  fill(0);
  strokeWeight(3);
  point(pointX - 27,pointY - 20);//left pupil

  point(pointX + 25,pointY - 20);//right pupil

  ellipse(pointX,pointY,17,15);//nose

  strokeWeight(2);
  noFill();
  arc(pointX,pointY + 12,30,20,0,PI);//smile

  strokeWeight(1);
  fill(bodyColor);
  rect(pointX - 20,pointY + 40,40,60);

  strokeWeight(3);
  line(pointX + 70,pointY + 40,pointX + 21,pointY + 70);//right arm

  line(pointX - 70,pointY + 40,pointX - 21,pointY + 70);//left arm


  strokeWeight(1)
  fill(255)
  rect(hitX,hitY,hitSize,hitSize);
  fill("black");
  text("READ ME" , 323,300);


  if(showQuote == true){
  text(quoteText[currentQuote],10,10);
}//endofshowquote

}//end of show or hide


}//end of draw



function mousePressed(){

 if hitzone(mouseX > hitX && mouseX < hitX + hitSize && mouseY > hitY && mouseY < hitY + hitSize){
 currentQuote= Math.floor(random(quoteText.length));
 showQuote = true;
}













}
