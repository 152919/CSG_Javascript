function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
  fill(0,0,255,0.3);
  rect(0,150,450,150);
  rect(0,0,150,450);
  rect(75,0,375,450);
  circle(450,225,450);
  fill(0,225,0,0.3);
  triangle(225,0,225,450,450,225);
  // the red block is not visible because it is coverd by the other blocks
}