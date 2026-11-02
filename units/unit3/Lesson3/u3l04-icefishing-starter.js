// AP CSP · Unit 3 · Lesson 4 · Ice Fishing · STARTER
// Name: ____________________
//
// Given: the variables and drawFish(). You fill in the empty functions.
// Do the TODOs in order (1 to 7). Save before every Run.

let cols = 3;
let rows = 3;
let s = 120;          // spacing between holes
let startx = 150;     // grid start x (first hole)
let starty = 150;     // grid start y (first hole)

let fishrow = -1;     // which row the fish is in
let fishcol = -1;     // which column the fish is in
let fishx = 0;        // fish's x on the canvas
let fishy = 0;        // fish's y on the canvas
let fv = false;       // fish visible?

let score = 0;
let lives = 3;
let f = 60;           // frames between fish moves (60 = 1 second)

function setup() {
  // TODO 1: createCanvas(600, 600) and frameRate(60)
  //   Run: a blank canvas.

  // TODO 4 (later): call moveFish()

}

function draw() {
  // TODO 1: background('#e3f2fd')   (the ice)

  // TODO 7 (later): call drawReadout()

  // TODO 5 (later): every f frames, call moveFish()
  //   Hint: frameCount % f is 0 once every f frames.

  // TODO 2: call drawGrid()

}

function drawGrid() {
  // TODO 2: ONE row of ice holes
  //   fill('#0d47a1') and noStroke()
  //   Loop c from 0 while c < cols:
  //     x = startx + c * s      y = starty
  //     ellipse(x, y, 80, 40)
  //   Run: 3 holes.

  // TODO 3: wrap your TODO 2 loop in a loop for r (use rows)
  //   Now y = starty + r * s
  //   Predict how many holes, then run.

  // TODO 4 (later): after the loops, if fv is true, call drawFish()

}

function moveFish() {
  // TODO 4: put the fish in a random hole
  //   fishcol = floor(random(cols))
  //   fishrow = floor(random(rows))
  //   fishx   = same formula as x in your loop, but with fishcol
  //   fishy   = same formula as y in your loop, but with fishrow
  //   fv      = random(1) > 0.2      (shows up 80% of the time)
  //   Run a few times: a different hole each time.

}

function mousePressed() {
  // TODO 6: catch or miss
  //   let d = dist(mouseX, mouseY, fishx, fishy - 15);
  //   If the fish is visible AND d < 30:
  //     add 1 to score, set fv to false, call moveFish()

}

function drawReadout() {
  // TODO 7: fill(0), noStroke(), textSize(24), textAlign(RIGHT, TOP)
  //   text("Score: " + score, width - 20, 20)

}

// ============================================================
// GIVEN - do not change
// ============================================================

function drawFish() {
  push();
  translate(fishx, fishy);
  stroke('#ff7043');
  strokeWeight(4);

  line(-25, -15, 0, -28);    // body, top
  line(0, -28, 20, -15);
  line(-25, -15, 0, -2);     // body, bottom
  line(0, -2, 20, -15);

  line(20, -15, 35, -27);    // tail
  line(35, -27, 35, -3);
  line(35, -3, 20, -15);

  stroke(0);
  strokeWeight(5);
  line(-13, -17, -11, -17);  // eye

  pop();
}

// Last line of your file: // TODO: and what you would add next
