// AP CSP - Unit 1, Lesson 4B
// Single drone with drone-shaped shadow

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(24, 38, 60);
  noStroke();

  // ---- SHADOW ----

  fill(10, 15, 25);

  let shadowSize = mouseY / 4 + 20;

  // shadow body
  rect(mouseX, 370, shadowSize, 8);

  // shadow arms
  rect(mouseX - shadowSize / 2, 365, shadowSize / 2, 5);
  rect(mouseX + shadowSize / 2, 365, shadowSize / 2, 5);

  // shadow rotors
  ellipse(mouseX - shadowSize, 363, shadowSize, 5);
  ellipse(mouseX + shadowSize, 363, shadowSize, 5);


  // ---- DRONE ----

  // body
  fill(214, 222, 235);
  rect(mouseX, mouseY, 60, 24);

  // camera
  fill(224, 74, 74);
  circle(mouseX, mouseY + 18, 16);

  // left arm
  fill(136, 148, 168);
  rect(mouseX - 48, mouseY - 14, 40, 6);

  // right arm
  rect(mouseX + 48, mouseY - 14, 40, 6);

  // rotors
  fill(90, 169, 230);
  ellipse(mouseX - 68, mouseY - 18, 80, 8);
  ellipse(mouseX + 68, mouseY - 18, 80, 8);
}