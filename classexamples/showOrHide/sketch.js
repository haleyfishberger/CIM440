var hedgehog

var showOrHide = false;

function preload(){

    hedgehog = loadImage("hedgehog.jpg");
}

    show = createButton("Show Hedgehog");
    show.mousePressed(function(){

      showOrHide = true;
    });

    hide = createButton("Hide Puppy");
    hide.mousePressed(function(){

      showOrHide = false;
    })



function setup() {
  // put setup code here

  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background(255);
  if(showOrHide == true){
    image(hedgehog, 100, 100, hedgehog.width/4, puppies.height/4);

  }
    text("Click on the buttons to see a cute puppy", 10,10);
  }
