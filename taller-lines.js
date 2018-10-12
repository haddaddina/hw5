function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var startX = 0;
	var endX = 0
  for(var x = 10; x <= 400; x = x + 5){
    line(x, startX, x, endX);
    startX = startX + 30
    endX = endX - 20
      }
}
