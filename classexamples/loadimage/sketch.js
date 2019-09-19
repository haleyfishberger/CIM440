var hedgehog

function preload(){

    hedgehog = loadImage("hedgehog.jpg");
}




function setup() {
  // put setup code here

  createCanvas(400,400);
}

function draw() {
  // put drawing code here

  image(hedgehog,0,0);//full scale
  image(hedgehog, 100,100, hedgehog.width/4, puppies.height/4);
  image(hedgehog,200,200,125,200);

}
