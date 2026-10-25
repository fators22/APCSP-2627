// AP CSP - Unit 1, Lesson 4A
// Make the rocket fall
//
// landerY is the tip of the nose cone.
// Some parts already follow it. Three do not.

let landerY = 40;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(16, 26, 43);
  noStroke();

  // The pad does not move, so it keeps a fixed number
  fill(91, 107, 130);
  rect(200, 355, 300, 26);

  // ---- these already follow landerY ----

  fill(255, 170, 60);
  ellipse(200, landerY + 172, 28, 18);      // 172 below the tip

  fill(120, 130, 150);
  ellipse(200, landerY + 156, 44, 22);      // 156 below the tip

  fill(214, 222, 235);
  rect(200, landerY + 105, 60, 90);         // 105 below the tip

  fill(224, 74, 74);
  triangle(200, landerY, 230, landerY + 60, 170, landerY + 60);

  // ---- these three do NOT ----
  //
  // Right now they are written as fixed numbers, the same way
  // the robot's eyes were. Run the sketch first and watch what
  // happens to them.

  fill(90, 169, 230);
  circle(200, 125, 26);                     // window

  fill(154, 169, 189);
  rect(174, 205, 8, 30);                    // left leg
  rect(226, 205, 8, 30);                    // right leg


  // TODO 1: add one line here to make landerY grow

}

// TODO 2: the window and the legs stay behind. Fix them.
//
// The body is at landerY + 105 and the numbers above were
// measured from the same tip. Work out the offset for each
// one - the window is at 125 and landerY starts at 40.

// Then try:
//   make it fall faster
//   make it fall slower
//   make it go up
