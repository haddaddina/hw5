function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(3);
	stroke(220);
  noFill();
  ellipse(200, 200, 380, 380);
  rect(10, 10, 380, 380);
  triangle(100, 390, 10, 390, 100, 20);
  triangle(300, 390, 390, 390, 300, 20);
  line(200, 10, 10, 390);
  line(200, 10, 390, 390);
  line(300, 390, 390, 10);
}
