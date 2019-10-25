
var questions = ["Is Iceland always covered in ice?","What ocean lies east of the US?"];
var options = ["1) True 2) False","1) Pacific 2) Eastern 3) Indian 4) Atlantic"];

var answers = [1,3];

var currentOption = -1; //refers to what button the user has pressed

var buttons = [];

var currentQuestion = 0;

var answerText = "";

var showAnswer = false;

var interval = 5000;
var prevMillis = 0;


function setup() {
  // put setup code here
  createCanvas(400,400);

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;

  });//end of mousePressed

  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;

  });//end of mousePressed

  buttons[2] = createButton("3");
  buttons[2].position(100,300);
  buttons[2].mousePressed(function(){
    currentOption = 2;

  });//end of mousePressed

  buttons[3] = createButton("4");
  buttons[3].position(150,300);
  buttons[3].mousePressed(function(){
    currentOption = 3;

  });//end of mousePressed
}

function draw() {
  // put drawing code here
  background(255);

  text(questions[currentQuestion], 20,100);
  text(options[currentQuestion], 20,150);

  if(showAnswer == true){
    text(answerText, 20,200);


    //start timer
    if(millis()-prevMillis > interval){
      prevmillis = millis();
      showAnswer = false;

    }
  }//end of showAnswer == true


  if(currentQuestion == 0){
    buttons[2].hide();
    buttons[3].hide();
  }//hide buttons

  if(currentQuestion == 1){
    buttons[2].show();
    buttons[3].show();
  }//show buttons


  //if currentOptionis not equal to -1
  if(currentOption != -1){
    //do something if current option is not equal to -1
    console.log("currentOption " + currentOption);
    if(currentOption == answers[currentQuestion]){
      //incorrect
      console.log("correct");
      answerText = "correct";
      currentQuestion = currentQuestion + 1
        //if(currentQuestion == 2){
        //currentQuestion = 0;
        //array.length counts how many items are in the imageArray
        //questionslength has 2 items

      if(currentQuestion == questions.length){
        currentQuestion = 0;


      }//setting array limit

    }else{
      console.log("incorrect");
      answerText = "incorrect";

    }//check for correct or incorrect

    currentOption = -1;
    showAnswer = true;
    prevMillis = millis();

  }//end of currentOption != -1




}
