function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(var i = 10; i < 400; i = i + 10){
      line(200, i, i, 200);
      }
}
