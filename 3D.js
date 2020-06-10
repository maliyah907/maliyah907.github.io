function setup() {
  createCanvas(600, 600, WEBGL);
}

var angle = 0.0

function draw() {
  orbitControl()
  background(150, 35, 250);

  
  
  //smooth()
  //noFill()
  //rotateY(angle)
  //box(150) 
  //angle += 0.01
  
  smooth()
  noFill()
  //translate(200,100,0)
  rotateY(angle)
  box(50)
  angle += 0.01
  
  smooth()
  noFill()
  translate(200,0,0)
  sphere(100)
  
  
  fill(255,0,0)
  smooth()
  translate(-350,-200,0)
  cylinder(50)
  
  
  
}
