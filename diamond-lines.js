function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var startX = 195;
	var endX = 205
  for(var i = 10; i <= 200; i = i + 10){
    line(startX, i, endX, i);
    startX = startX - 10
    endX = endX + 10
      }
  for(var i = 210; i <= 400; i = i + 10){
    line(startX, i, endX, i);
    startX = startX + 10
    endX = endX - 10
      }
}
