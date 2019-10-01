// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// Alpaca image "IMG_0214" by neurdy is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/af636a14-4316-4d3e-a09a-264dfccadb33
// lemur image "Ring-Tailed Lemur" by guppiecat is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/c1c30f8e-2188-4cfb-aa11-7760c312f16e

//var sloth, puppy, dinosaur, alpacas, lemur;

var imageArray = [];

var hitX = [100,200];

var hitY = [300,300];

var hitSize = 50;


//var sButton, pButton, dButton, aButton, lButton;

var currentImage = 0;



function preload(){
  imageArray[0] = loadImage("images/sloth.jpg");
  imageArray[1] = loadImage("images/puppy.jpg");
  imageArray[2] = loadImage("images/dinosaur.jpg");
  imageArray[3] = loadImage("images/alpacas.jpg");
  imageArray[4] = loadImage("images/lemur.jpg");
}


function setup(){
  // put setup code here
  createCanvas(400,400);





}

function draw(){

  background(255);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);

}


function mousePressed(){

  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Clicked button 0");
    currentImage = currentImage - 1;
    if(currentImage == -1){
      currentImage = 4;

  }//check length
  }//end of hit{0}click

  if(mouseX > hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
    console.log("Clicked button 1");
    currentImage = currentImage + 1;
    if(currentImage == 5){
      currentImage = 0;

  }//check length
  }//end of hit{0}click
}//end of mouse pressed
