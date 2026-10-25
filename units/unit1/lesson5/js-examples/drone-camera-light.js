// AP CSP - Unit 1, Lesson 4B
// Single drone with camera light and ground light

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(24, 38, 60);
  noStroke();

  // ---- CAMERA LIGHT ----

  fill(255, 80, 80, 40);

  triangle(
    mouseX - 40, 370,
    mouseX + 40, 370,
    mouseX, mouseY + 25
  );

  // ---- LIGHT SPOT ON GROUND ----

  // Higher drone = larger light spot
  let lightSize = mouseY / 3 + 30;

  fill(255, 80, 80, 100);
  ellipse(mouseX, 370, lightSize, 12);

  // ---- SHADOW ----
  // fill(10, 15, 25);

  // let shadowSize = mouseY / 4 + 20;

  // rect(mouseX, 370, shadowSize, 8);

  // rect(mouseX - shadowSize / 2, 365, shadowSize / 2, 5);
  // rect(mouseX + shadowSize / 2, 365, shadowSize / 2, 5);

  // ellipse(mouseX - shadowSize, 363, shadowSize, 5);
  // ellipse(mouseX + shadowSize, 363, shadowSize, 5);

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