// Crossy Road · STARTER
// Name: ____________________
//
// Given: the variables, drawCar(), drawChicken(), the arrow keys,
// resetChicken() and the readout. You fill in the 4 empty functions.
// Do the TODOs in order (1 to 10). Save before every Run.
// Click the canvas before using the arrow keys.

const ROWS = 10;      // rows 0 to 9
const ROW_H = 60;     // each row is 60 pixels tall
const TILE = 50;      // the chicken hops 50 pixels left or right
const RIVER = 4;      // row 4 is the river

let cars = 0;
let red = 0;
let score = 0;

let chickenX = 420;
let chickenY = 570;

let carX = 0;         // where drawCar() draws the next car
let carY = 0;
let carLeft = false;  // true = this car drives left


function setup() {
  createCanvas(800, 600);
  textFont("monospace");
  textSize(16);
}


function draw() {
  noStroke();
  drawLevel();
  drawCars();
  drawChicken();
  checkRiver();
  checkWin();
  drawReadouts();
}


// ============================================================
// PART 1 - THE LEVEL
// ============================================================

function drawLevel() {
  // Loop r from 0 while r < ROWS. Inside: let y = r * ROW_H;
  // Each row is one rect: rect(0, y, 800, ROW_H)

  // TODO 1: if r is EVEN, the row is road: fill(70)
  //   Hint: r % 2 == 0 means even.

  // TODO 2: if r is ODD, the row is grass: fill(120, 200, 100)

  // TODO 3: if r is the RIVER, draw it blue: fill(60, 140, 220)
  //   Then the bridge: fill(150, 100, 60) and rect(400, y, TILE, ROW_H)
  //   Put this AFTER the road check - why does the order matter?

  // TODO 4: if r is 0, it is the finish line: fill(250, 220, 80)
  //   Then fill(0) and text("FINISH", 370, 35)

}


// ============================================================
// PART 2 - THE CARS
// ============================================================

function drawCars() {
  cars = 0;
  red = 0;

  // TODO 5: a loop that visits ONLY rows 2, 4, 6, 8
  //   Hint: start at 2, and count by 2 (r = r + 2).
  //   If r is NOT the river:
  //     let speed = 1 + r / 4;
  //     Loop c from 0 while c < 3 (3 cars per road):
  //       carX = (c * 300 + r * 50 + frameCount * speed) % 900 - 100;
  //       carY = r * ROW_H + 14;
  //       fill(240);
  //       drawCar();
  //       cars = cars + 1;
  //   Run: the readout should say cars 9.

  // TODO 6: rows 2 and 8 drive LEFT. Inside the c loop, before drawCar():
  //   if r is 2 OR r is 8:   carX = 730 - carX;   carLeft = true;
  //   else:                  carLeft = false;

  // TODO 7: the first car (c is 0) in each row is red: fill(230, 50, 50)
  //   and add 1 to red. Every other car is fill(240).
  //   Run: red 3.

  // TODO 8: hit check. After drawCar(), if the chicken is inside the car:
  //   chickenX > carX  AND  chickenX < carX + 70  AND
  //   chickenY > carY  AND  chickenY < carY + 32
  //   then call resetChicken()

}


// ============================================================
// PART 3 - THE RULES
// ============================================================

function checkRiver() {
  // TODO 9: if the chicken is in the river row (chickenY is 270)
  //   AND it is NOT on the bridge (chickenX is not 420),
  //   call resetChicken()

}


function checkWin() {
  // TODO 10: if the chicken reached the finish row (chickenY < ROW_H),
  //   add 1 to score and call resetChicken()

}


// ============================================================
// GIVEN - do not change
// ============================================================

function drawCar() {
  push();
  translate(carX, carY);
  rect(0, 0, 70, 32, 6);                 // body - uses the fill you set before calling
  fill(120, 180, 230);
  if (carLeft) {
    rect(8, 6, 12, 20, 3);               // windshield at the front (left)
  } else {
    rect(50, 6, 12, 20, 3);              // windshield at the front (right)
  }
  pop();
}

function drawChicken() {
  push();
  translate(chickenX, chickenY);
  fill(255);
  circle(0, 0, 30);                      // body
  fill(230, 50, 50);
  rect(-5, -21, 10, 7, 3);               // comb
  fill(255, 170, 40);
  triangle(0, 5, -7, 11, 7, 11);         // beak
  pop();
}

function keyPressed() {
  if (key == "ArrowUp") {
    chickenY = chickenY - ROW_H;
  }
  if (key == "ArrowDown" && chickenY < 570) {
    chickenY = chickenY + ROW_H;
  }
  if (key == "ArrowLeft" && chickenX > 20) {
    chickenX = chickenX - TILE;
  }
  if (key == "ArrowRight" && chickenX < 770) {
    chickenX = chickenX + TILE;
  }
  return false;   // stop the arrow keys from scrolling the page
}

function resetChicken() {
  chickenX = 420;
  chickenY = 570;
}

function drawReadouts() {
  fill(255);
  text("score " + score + "   cars " + cars + "   red " + red, 14, 276);   // on the river row
}

// DONE EARLY?
// 1. Make row 8 faster than everything else. Where does speed come from?
// 2. Add a 4th car to each road. What has to change so they don't overlap?
// 3. Add a second bridge. What else has to change in checkRiver()?
//
// Last line of your file: // TODO: and what you would add next
