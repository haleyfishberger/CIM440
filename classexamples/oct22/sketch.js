function setup() {
  // put setup code here
  createCanvas(400,400);

  hello();
  goodbye("zeven");

}

function draw() {
  // put drawing code here
//frameRate(1); good for testing but too slow to actually use. to make it slower, use millis
  background(255);

  if(circleHitzone(100,100) == true){
    circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));

    for(var i = 0; i < 500; i++){
      circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));
    }

  }
//order of parameters is important!


  fill("black");
  ellipse(mouseX,mouseY, 20,20);

  console.log(circleHitzone(200,200));
}//end of draw

circleHitzone(300,300);
if(hitzone3 == true){
  rect(100,100,100,100);
}

function mousePressed(){
  if(circleHitzone(300,300 == true)){
  //  rect(100,100,100,100);
  hitzone3 = true;
}else{
  hitzone3 = false;
}

}

function hello(){
  console.log("hello");
  }

function goodbye(message){
  console.log("goodbye " + message);
}

function circleColor(xpos, ypos, csize, r, g, b){
  fill(r, g, b);
  ellipse(xpos,ypos, csize,csize);

}

function circleHitzone(distX, distY){
  var curDist = dist(mouseX,mouseY, distX, distY);
  console.log("curDist " + curDist);
  ellipse(distX,distY,10,10);

  //return curDist

  if(curDist < 10){
    return true;
  }else{
    return false;
  }
}
