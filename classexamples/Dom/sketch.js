var pointX = 0;
var pointY = 0;

var bodyColor = 'lightskyblue';
var earColor = 'lightskyblue';
var earSize = 50;
var eyeSize = 18;




//var quote = [];
var quoteText = ["I'm thinking about growing a MOUSE-STACHE","HAVE A MICE DAY!","THINK BEFORE YOU SQUEAK", "How many mice does it take to change a lightbulb?   NONE. Mice can't change lightbulbs!", "I dated a rat once. BIG MOUSETAKE."];

var quotePosition = (300,100);

var random = [2];

var currentQuote=0;

var showQuote = false;



var showOrHide = false;

var hitSize = 60;

var hitX = 321;
var hitY = 270;








function setup() {
  // put setup code here
  var cnv = createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;
  console.log('pointX ' + pointX + ' pointY ' + pointY );

  show = createButton("CLICK ME");
  show.position(width/2 + 400,height/2);
  show.mousePressed(function(){
    showOrHide = true;
    show.hide();

  });

  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id = container0
  //.html injects html or text into another html tag
  select("#container0").html("<h1>Patricia: The Pun Mouse</h1>");
  //.style("css property", "value")

  select("#container0").style("width", "400px");//setting width of container0
  select("#container0").style("margin", "20px auto");//center our container, margin: 0 auto; 0 refers to the top and bottom spacing of our container, the auto refers to the left and right spacing of our container
  //To center our container, you need to set a width and margin: 0 auto;
  cnv.parent("#container0");

//  select("#container0").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/yPWkPOfnGsw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  select('body').style("background-color","red");
  //select('body').style("background-image", "url('assets/image.jpg')");
}






function draw() {
  // put drawing code here
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
  text(quoteText[currentQuote],20,100);
  }//endofshowquote

  }//end of show or hide


  }//end of draw



  function mousePressed(){

  if (mouseX > hitX && mouseX < hitX + hitSize && mouseY > hitY && mouseY < hitY + hitSize){
  currentQuote= Math.floor(random(quoteText.length));
  showQuote = true;
  }













  }
