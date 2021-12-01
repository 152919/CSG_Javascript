function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function TekenKerk(){
  noStroke();
  rect(0,350,75,100);
  fill('green');
  triangle(0,350,75,350,37,210);
  fill('blue');
  translate(100,0);
  
}

function draw(){
  TekenKerk();
  TekenKerk();
  TekenKerk();
}




