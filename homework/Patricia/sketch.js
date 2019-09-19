var pointX = 0;
var pointY = 0;

var bodyColor = 'lightskyblue';
var earColor = 'lightskyblue';
var earSize = 50;
var eyeSize = 18;




function setup() {

  createCanvas(500,500);
  background('lemonchiffon');
  pointX = width/2;
  pointY = height/2;
  console.log('pointX ' + pointX + ' pointY ' + pointY );


  earButton = createButton("Click to style");
  earButton.position(20,20);
  earButton.mousePressed(function(){
  //your action goes in here
  //the button mousepressed function is tied to the general mouse pressed function
    earColor = "pink";


  });
}


function draw() {

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


//HOMEWORK: 2 interactive thangs

}

function keyPressed(){
  bodyColor = 'green';
  console.log("key " + key);


  if(key == 'g'){
     bodyColor = 'green';
 }

}
