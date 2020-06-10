function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  lollipop(100, 100, 50);
  lollipop(300, 200, 150);
  lollipop(500, 150, 75);
}

function lollipop(x, y, diameter) {
  fill(104, 184, 25);
  rect(x - 10, y, 20, 150);

  fill(184, 25, 25);
  ellipse(x, y, diameter, diameter);
}
