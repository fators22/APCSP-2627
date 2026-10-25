// AP CSP - Unit 1, Lesson 5
// Classwork: a readout, and a key that resets

let headY = 90;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(24, 38, 60);
  noStroke();

  fill(190, 200, 215);
  rect(200, headY, 160, 150);

  fill(70, 130, 200);
  circle(165, headY - 25, 34);
  circle(235, headY - 25, 34);

  fill(40, 50, 70);
  ellipse(200, headY + 42, 90, 30);

  headY = headY + 1;

  // TODO 1: show HEIGHT and the value of headY in the top left.
  //         Draw it LAST so nothing covers it.

}

// TODO 2: below draw(), write keyPressed() so any key
//         sends the robot back to the top.
