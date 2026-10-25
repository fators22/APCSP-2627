// Bouncing ball
// Concepts: variables, conditionals, the draw loop
// Click to change the ball's color.

let x, y;          // position
let xSpeed = 3;    // horizontal speed
let ySpeed = 2;    // vertical speed
let size = 40;
let ballColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  ballColor = color(31, 138, 126);
}

function draw() {
  background(243, 246, 250);

  // move
  x = x + xSpeed;
  y = y + ySpeed;

  // bounce off the edges
  if (x > width - size / 2 || x < size / 2) {
    xSpeed = -xSpeed;
  }
  if (y > height - size / 2 || y < size / 2) {
    ySpeed = -ySpeed;
  }

  noStroke();
  fill(ballColor);
  circle(x, y, size);
}

function mousePressed() {
  ballColor = color(random(255), random(255), random(255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
