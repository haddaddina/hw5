function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
for (var x = 5; x < height; x = x + 10){
  ellipse ( 200, 200, x, x);
  noFill()
}
}
