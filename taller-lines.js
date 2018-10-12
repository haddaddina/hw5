function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 380; i = i + 15) {
    line(i, i, i, 0);
  }
}
