// AP CSP - Unit 1, Lesson 5
// A readout and a reset

let landerY = 40;
let speed = 2;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(16, 26, 43);
  noStroke();

  fill(91, 107, 130);
  rect(200, 355, 300, 26);

  fill(255, 170, 60);
  ellipse(200, landerY + 172, 28, 18);

  fill(120, 130, 150);
  ellipse(200, landerY + 156, 44, 22);

  fill(214, 222, 235);
  rect(200, landerY + 105, 60, 90);

  fill(224, 74, 74);
  triangle(200, landerY, 230, landerY + 60, 170, landerY + 60);

  fill(90, 169, 230);
  circle(200, landerY + 85, 26);

  fill(154, 169, 189);
  rect(174, landerY + 165, 8, 30);
  rect(226, landerY + 165, 8, 30);

  landerY = landerY + speed;

  // TODO 1: show ALTITUDE and the value of landerY
  //         in the top left. Draw it last.

}

// TODO 2: any key sends the rocket back to the top.

// TODO 3: the mouse stops it where it is.
//         What would you set speed to?


// =====================================================
// PUZZLES - do these after the three TODOs work.
// Each one is one or two lines. Skip any and move on.
// =====================================================
//
// 1. Move the altitude readout to the BOTTOM left.
//
// 2. Add a second line under it showing the speed.
//
// 3. Make the mouse SPEED IT UP instead of stopping it.
//
// 4. Make a key send it to the BOTTOM instead of the top.
//
// 5. Show the word FALLING on screen while it is moving.
