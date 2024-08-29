function setup() {
  createCanvas(400, 400);
  background("#560464");
}

function draw() {
  fill("rgb(72,199,72)");
  stroke("red");
  if(mouseIsPressed) { rect(mouseX, mouseY, 20, 20);}
}
