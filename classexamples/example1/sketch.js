var eyeSize = 20;



function setup() {
  // put setup
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {

//Default:
//fill('white');
//stroke(0);
//strokeWeight(1);

strokeWeight(1);
fill('blue');
ellipse(100,100,eyeSize,eyeSize);//left eye

ellipse(140,100,20,20);//right eye

fill(255,0,0);//rgb color
rect(80,200,100,30);//mouth

fill(255);//grayscale color
strokeWeight(5);
point(72,382);//singular pixel/point/mole


strokeWeight(1);
line(80,215,180,215);//mouth split/smile

//width and height
//console.log("width " + width);
//console.log("height " + height);

//triangle(width/2,height/2,width/2 + 10, height/2 + 10, width/2 - 10, width/2 + 10);//p1,p2,p3

arc(300,300,50,50,0,PI);
arc(400,400,50,50,0,PI + HALF_PI,0);
arc(300,150,50,50,0,TWO_PI);


//Newtriangle
//first point, add/subtract 20 from original point
triangle(100,400,120,420,80,420);

line(100,200,100,300);//vertical line use common x
line(100,300,200,300);//horizontal line use common y





}
