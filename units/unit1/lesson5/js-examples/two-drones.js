// AP CSP - Unit 1, Lesson 4B
// second drone
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(24, 38, 60);
  noStroke();

  // ---- SHADOW ----
  fill(10, 15, 25);
  ellipse(mouseX, 370, 80, 12);

  // ---- FIRST DRONE ----

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

  // wider rotors
  fill(90, 169, 230);
  ellipse(mouseX - 68, mouseY - 18, 80, 8);
  ellipse(mouseX + 68, mouseY - 18, 80, 8);


  // ---- SECOND DRONE ----
  // 100 pixels to the left of the first drone

  fill(214, 222, 235);
  rect(mouseX - 100, mouseY, 60, 24);

  // camera
  fill(224, 74, 74);
  circle(mouseX - 100, mouseY + 18, 16);

  // left arm
  fill(136, 148, 168);
  rect(mouseX - 148, mouseY - 14, 40, 6);

  // right arm
  rect(mouseX - 52, mouseY - 14, 40, 6);

  // rotors
  fill(90, 169, 230);
  ellipse(mouseX - 168, mouseY - 18, 80, 8);
  ellipse(mouseX - 32, mouseY - 18, 80, 8);
}