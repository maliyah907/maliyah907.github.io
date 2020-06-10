var on = true;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(255, 187, 51);
  } else {
    background(187, 51, 255);
  }
  stroke(51, 107, 255);
  strokeWeight(4);
  noFill();
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    
      strokeWeight(10);
      fill(51, 255, 187);
    }
    rectMode(CENTER);
    rect(300, 200, 100, 100);
  }

  function mousePressed() {
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
      on = !on;
    }
}
