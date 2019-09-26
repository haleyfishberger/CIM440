// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// Alpaca image "IMG_0214" by neurdy is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/af636a14-4316-4d3e-a09a-264dfccadb33
// lemur image "Ring-Tailed Lemur" by guppiecat is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/c1c30f8e-2188-4cfb-aa11-7760c312f16e

var sloth, puppy, dinosaur, alpacas, lemur;

var sButton, pButton, dButton, aButton, lButton;

var currentImage = 0;

var curImage;

function preload(){
  sloth = loadImage("images/sloth.jpg");
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  alpacas = loadImage("images/alpacas.jpg");
  lemur = loadImage("images/lemur.jpg");
}


function setup() {
  // put setup code here
  createCanvas(400,400);

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){

    currentImage = 0;


  });

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){

    currentImage = 1;


  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){

    currentImage = 2;


  });

  aButton = createButton("Alpacas");
  aButton.mousePressed(function(){

    currentImage = 3;



  });

  lButton = createButton("Lemur");
  lButton.mousePressed(function(){

    currentImage = 4;


  });

  curImage = sloth;

}

function draw() {

  background(255);

  console.log("currentImage " + currentImage);
  // put drawing code here

  image(curImage,0,0,curImage.width/4,curImage.height/4);

  if(currentImage == 0){
    curImage = sloth;
  }else if(currentImage == 1){
    curImage = puppy;
  }else if(currentImage == 2){
    curImage = dinosaur;
  }else if(currentImage == 3){
    curImage = alpacas;
  }else if(currentImage == 4){
    curImage = lemur;
  }







}
