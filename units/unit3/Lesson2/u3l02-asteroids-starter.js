// AP CSP - Unit 3, Lesson 2 : EXACTLY N TIMES  -  STARTER
// Name: ____________________   Period: ____
//
// Goal: a moving asteroid field. Every TODO is a for loop that runs an
// exact number of times.
//
// HOW TO WORK
//   1. Do the TODOs in order: 1, 2, 3, 4, 5.
//   2. Each TODO has steps. Do one step, then Run.
//   3. Lines that start with //  are switched off. To switch one on, delete
//      the // at the front. Replace every ___ with the right value.
//   4. The sketch runs right now. If it stops running, undo your last step.
//
// Arrow keys move the ship. That part is done for you.


let rocks = 6;
let lives = 3;
let shipX = 400;
const SHIP_Y = 520;


function setup() {
  createCanvas(800, 600);
  textFont("monospace");
  textSize(18);
}


function draw() {
  background(8, 10, 24);
  moveShip();
  drawStars();
  drawRocks();
  drawShields();
  drawShip();
  drawLives();
  drawReadouts();
}


// Done for you. Read it: this is x = x + speed for one object.
function moveShip() {
  if (keyIsDown(LEFT_ARROW)) {
    shipX = shipX - 6;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    shipX = shipX + 6;
  }
  if (shipX < 30) {
    shipX = 30;
  }
  if (shipX > width - 30) {
    shipX = width - 30;
  }
}


// =========================================================================
// TODO 1 - 200 STARS THAT SCROLL DOWN
// You know exactly how many (200), so use a for loop.
//
//   Step 1. Switch on the for line and the closing }. Fill in the blanks so
//           the loop runs 200 times. (Start at 0, use <.)
//   Step 2. Switch on the size, x and y lines.
//   Step 3. Switch on the circle line. Run. You should see 200 stars.
//   Step 4. Watch them move. Big stars move faster. Why? Look at the y line.
//
// CHECK: Change 200 to 20 and Run. Count them. Then change it back.
// =========================================================================
function drawStars() {
  randomSeed(3);
  noStroke();
  fill(255);

  // for (let i = ___; i < ___; i = i + 1) {
  //   let size = random(1, 3);
  //   let x = random(width);
  //   let y = (random(height) + frameCount * size * 0.5) % height;
  //   circle(x, y, size);
  // }
}


// =========================================================================
// TODO 2 - ONE ROCK PER ROCK
// The number of rocks is in the variable rocks (line 17).
// Use the VARIABLE in the loop, not the number 6. TODO 4 will show you why.
//
//   Step 1. Switch on the for line and the closing }. The question part
//           should compare i to rocks.
//   Step 2. Switch on the four let lines (x, size, speed, y).
//   Step 3. Switch on fill and circle. Run. You should see 6 falling rocks.
//   Step 4. Make a rock turn red when it touches the ship:
//           switch on the if / else, and DELETE the plain fill line above it.
//
// CHECK: Change line 17 to  let rocks = 10;  Run. 10 rocks? Change it back.
// =========================================================================
function drawRocks() {
  randomSeed(11);
  noStroke();

  // for (let i = 0; i < ___; i++) {
  //   let x = random(40, width - 40);
  //   let size = random(30, 70);
  //   let speed = random(1, 3);
  //   let y = (random(height) + frameCount * speed) % (height + 100) - 50;
  //
  //   fill(130, 120, 110);
  //
  //   // Step 4
  //   // if (dist(x, y, shipX, SHIP_Y) < size / 2 + 20) {
  //   //   fill(230, 60, 60);
  //   // } else {
  //   //   fill(130, 120, 110);
  //   // }
  //
  //   circle(x, y, size);
  // }
}


// =========================================================================
// TODO 3 - REWRITE THE WHILE AS A FOR
// This while loop works. It draws 3 lives in the top right corner.
// Your job: turn it into a for loop that draws the same thing.
//
//   Step 1. Find the 3 lines that only COUNT: where count starts,
//           the question, and the update. Mark them with // COUNT.
//   Step 2. Move those 3 jobs into one for header:
//             for (let count = ___; count < ___; count++) {
//   Step 3. Delete the old  let count = 0;  and  count = count + 1;
//   Step 4. Run. Still 3 lives in the same place?
//
// WATCH OUT: x is NOT the counter. Keep  let x = 640;  before the loop
// and keep  x = x + 40;  inside it.
// =========================================================================
function drawLives() {
  fill(242, 183, 5);
  noStroke();

  let x = 640;
  let count = 0;
  while (count < lives) {
    triangle(x, 18, x - 10, 42, x + 10, 42);
    x = x + 40;
    count = count + 1;
  }
}


// =========================================================================
// TODO 5 - THREE SHIELD RINGS   (do TODO 4 first - it is at the bottom)
// The AP exam version:
//
//     d <- 60
//     REPEAT 3 TIMES
//     {
//       draw a circle around the ship with diameter d
//       d <- d + 30
//     }
//
//   Step 1. Switch on  let d = 60;  It goes BEFORE the loop. Why?
//   Step 2. Switch on the for line and the closing }. REPEAT 3 TIMES means
//           the loop runs 3 times.
//   Step 3. Switch on the circle line and the d = d + ___ line. Fill in 30.
//           Run. Three rings around the ship?
//   Step 4. Make the rings pulse: change  let d = 60;  to
//             let d = 60 + (frameCount % 30);
//
// CHECK: Move the ship with the arrow keys. Do the rings follow it?
// =========================================================================
function drawShields() {
  noFill();
  stroke(90, 200, 255);
  strokeWeight(2);

  // let d = 60;
  // for (let i = 0; i < ___; i++) {
  //   circle(shipX, SHIP_Y, d);
  //   d = d + ___;
  // }

  noStroke();
}


function drawShip() {
  fill(242, 183, 5);
  triangle(shipX, SHIP_Y - 25, shipX - 18, SHIP_Y + 15, shipX + 18, SHIP_Y + 15);
}


function drawReadouts() {
  fill(255);
  text("rocks  " + rocks, 20, 30);
  text("lives  " + lives, 20, 54);
}


// =========================================================================
// TODO 4 - ADD AND REMOVE ROCKS WITH THE KEYBOARD
// No loop here, just if statements.
//
//   Step 1. Switch on the first if. Pressing  a  should add 1 to rocks.
//   Step 2. Switch on the second if. Pressing  d  should take 1 away,
//           but never go below 0. Fill in the blank with the right test.
//   Step 3. Run. Click the canvas first, then press a and d.
//           Watch the rocks readout in the top left.
//
// THINK: This only works because TODO 2 uses  i < rocks  and not  i < 6.
// =========================================================================
function keyPressed() {
  // if (key == "a") {
  //   rocks = rocks + 1;
  // }
  // if (key == "d" && rocks ___ 0) {
  //   rocks = rocks - 1;
  // }
}


// =========================================================================
// SELF-CHECK - tick each one before you turn it in
//   [ ] 200 stars scroll down; big ones move faster
//   [ ] 6 rocks fall and come back at the top
//   [ ] A rock turns red when it touches the ship
//   [ ] a adds a rock, d removes one, and rocks never goes below 0
//   [ ] Lives use a for loop, not a while loop
//   [ ] Three shield rings follow the ship and pulse
//   [ ] No ___ left anywhere in the file
//
// PUZZLE - predict first, then test
//   In TODO 2, change  let i = 0  to  let i = 1.
//   How many rocks now? Write your guess here: ____
//   Now also change  <  to  <= .  How many?    ____
//   Change both back when you're done.
//
// WHY DON'T THE ROCKS JUMP AROUND WHEN YOU PRESS a?
//   Write your answer here:
//   ______________________________________________________________
//
// EARLY FINISHERS
//   1. Press  l  to lose a life (never below 0). When lives is 0, show
//      GAME OVER in the middle of the screen.
//   2. Make the number of shield rings match lives.
//      Hint: one number in TODO 5 becomes a variable.
//   3. Make the rocks speed up over time.
//      Hint: frameCount gets bigger every frame.
// =========================================================================
