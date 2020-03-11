var spot = {
    x: 100,
    y: 50
}

var col = {
    r: 255,
    g: 0,
    b: 0
}

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    col.r = random(100,255);
    col.g = 0;
    col.b = random(100,190);
    spot.x = random(0,width);
    spot.y = random(0,height);
    fill(col.r, col.g, col.b,100);
    noStroke();
    ellipse(spot.x, spot.y, 24, 24);

}

{var ballX = 200.0
    var ballY = 100.0
    var ballSpeedY = 0.0

    var gravity = 0.1;

    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(150, 200, 250);

        //to make the ball "fall" down, every frame we increase its speed by a tiny amount. We call this amount gravity.

        ballSpeedY = ballSpeedY+gravity

        ballY = ballY+ballSpeedY

        fill(255, 0, 0)
        ellipse(ballX, ballY, 20.0, 20.0)

        if (ballY >= height) {
            ballSpeedY = ballSpeedY *-.9
        }
    }

}