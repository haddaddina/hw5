function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect (30, 30, 200, 200);
  	for (var i = 10; i <= 600; i = i + 10) {
    line(i, 0, i, 600);
   for (var o = 30; o <= 230; o = o + 10) {
      line(30, o, 230, o);
  }
  }
}
