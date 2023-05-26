

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background('purple');
  
  //The Ground
  noStroke();
  fill('green');
  rect(0,400,windowWidth,100);


  //The House
  fill('yellow');
  stroke('blue');
  rect(50,200,220,200);

  //Windows
  fill('white');
  strokeWeight(10);
  stroke('black');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Triangle
  fill('brown');
  triangle(50,200, 100,100,270,200);


//door
  rect(135,323,50,70);

//
  fill('yellow');
circle(27,24,100,100);







  //
  fill('blue');
 ellipse(385,402,200,75);








  
    //This line of code displays the mouse coordinates
  noStroke();
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}