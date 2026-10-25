// AP CSP - Unit 1, Lesson 4A
// Classwork: make the robot move

let bulbY = 70;
let headY = 190;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(24, 38, 60);
  noStroke();

  // Antenna stalk
  fill(150, 160, 175);
  rect(200, 92, 8, 46);

  // Antenna bulb
  fill(230, 90, 90);
  circle(200, bulbY, 26);

  // Head
  fill(190, 200, 215);
  rect(200, headY, 160, 150);

  // Eyes
  fill(70, 130, 200);
  circle(165, 165, 34);
  circle(235, 165, 34);

  // Mouth
  fill(40, 50, 70);
  ellipse(200, 232, 90, 30);

  // TODO 1: make bulbY grow

  // TODO 2: make headY grow. What happens to the face?

  // TODO 3: fix it. The eyes and mouth have to follow headY too.

}
