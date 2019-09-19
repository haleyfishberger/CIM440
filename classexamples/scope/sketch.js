//global variabkes, these are available throughout progrM


var pointY = 0;

var faceColor = 'purple';


function setup() {
  // put setup code here
  //if you declare a variable inside of block of code ie {}, that variable will only be available inside of that block

  var message = "Hello";

  console.log(message);
}

function draw() {
  // put drawing code here
//console.log(message); Error: not define, becaused message variable scope is only inside of the setup

  var drawMessage = "this message is in the draw loop";

  console.log(drawMessage);


}
