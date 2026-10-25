// AP CSP - Unit 1, Lesson 4B
// Make the drone follow your cursor
//
// Pick one point. Write every part as a distance from it.
// Here the point is the body, and the body is the mouse.

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(24, 38, 60);
  noStroke();

  // ---- already converted ----

  // body - this IS the point everything else measures from
  fill(214, 222, 235);
  rect(mouseX, mouseY, 60, 24);

  // camera, 18 below the body
  fill(224, 74, 74);
  circle(mouseX, mouseY + 18, 16);

  // left arm, 48 left and 14 up
  fill(136, 148, 168);
  rect(mouseX - 48, mouseY - 14, 40, 6);


  // ---- your turn ----
  // Convert these three. The offsets are:
  //
  //   right arm     48 right, 14 up
  //   left rotor    68 left,  18 up
  //   right rotor   68 right, 18 up

  // TODO 1: right arm
  rect(248, 186, 40, 6);

  fill(90, 169, 230);

  // TODO 2: left rotor
  ellipse(132, 182, 56, 8);

  // TODO 3: right rotor
  ellipse(268, 182, 56, 8);

}

// Only POSITIONS follow the mouse. The sizes - 60, 24, 40, 6,
// 56, 8 - stay exactly as they are. A drone does not get bigger
// when it flies right.

// ---- CHECK YOURSELF ----
// Move the mouse into all four corners. Anything left behind
// still has a fixed number.

// ---- IF YOU FINISH ----
// 1. A second drone that stays 100 to the left of the first.
// 2. Wider rotors - only two numbers change.
// 3. A shadow on the ground: same x, but always at y = 370.
