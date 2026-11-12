// AP CSP - Unit 3, Lesson 7 : FIND THE BUG  -  STARTER
//
// Each function below has ONE bug. The code runs, but the picture is wrong.
//
// HOW TO WORK
//   1. Run the sketch. Look at each panel. What did you EXPECT to see?
//   2. Read the hint for that bug. Trace the loop on paper if you need to.
//   3. Fix ONE bug at a time. Run again. Change as little as possible.
//   4. Write a one-line comment above each fix explaining what was wrong.
//
// Every loop has 3 parts. Most bugs live in one of them:
//   START   (where the variable begins)
//   QUESTION (when the loop keeps going)
//   UPDATE  (how the variable changes each time)
// ...plus the BODY (what happens each time through).

let stars = 0;
let trees = 0;


function setup() {
  createCanvas(800, 600);
  textFont("monospace");
}


function draw() {
  background(16, 26, 43);
  drawPanels();
  bug1Lights();
  bug2Lanes();
  bug3Stars();
  bug4Window();
  // bug5Snow();       // DO NOT turn this on until you fix Bug 5. It will freeze your browser.
  bug6Trees();
}


// BUG 1: LIGHTS
// Expected: a bulb hanging at every 40 px along the whole wire.
// Hint: Look at the QUESTION. Trace x: 40, 80, 120 ... What happens when x is 360?
function bug1Lights() {
  stroke(170); strokeWeight(2);
  line(40, 120, 360, 120);
  noStroke();
  fill(230, 60, 60);
  let x = 40;
  while (x < 360) {
    circle(x, 124, 18);
    x = x + 40;
  }
}


// BUG 2: LANES
// Expected: 4 stacked lanes, each a different shade of gray.
// Hint: The loop runs 4 times, but you only see one lane. Look at the BODY.
//       Which values change each time through? Which ones never do?
function bug2Lanes() {
  noStroke();
  for (let i = 0; i < 4; i++) {
    fill(70 + i * 25);
    rect(400, 40, 400, 50);
  }
}


// BUG 3: STARS
// Expected: the label shows how many stars were drawn.
// Hint: Count the circles in the loop. Now read the label.
//       Find every line that changes stars. How many times does each one run?
function bug3Stars() {
  randomSeed(9);
  noStroke();
  fill(255);
  for (let i = 0; i < 50; i++) {
    stars = 0;
    circle(random(20, 380), random(340, 580), 3);
    stars = stars + 1;
  }
  textSize(16);
  text("stars " + stars, 20, 585);
}


// BUG 4: WINDOW
// Expected: a window with 4 panes across and 3 panes down, inside the panel.
// Hint: Look at the BODY. Moving across = x. Moving down = y.
//       Which loop variable counts rows? Which counts columns? Which one is in x?
function bug4Window() {
  noStroke();
  fill(180, 210, 240);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      rect(450 + r * 75, 340 + r * 75, 65, 65);
    }
  }
}


// BUG 5: SNOW   (fix this BEFORE you turn it on in draw)
// Expected: 100 snowflakes scattered over the whole canvas.
// Hint: Trace flakes on paper. What is it after 1 pass? After 2? After 10?
//       Will the QUESTION ever become false? Which of the 3 parts is missing?
function bug5Snow() {
  let flakes = 0;
  fill(255);
  while (flakes < 100) {
    circle(random(800), random(600), 3);
  }
}



// BUG 6: TREES
// Expected: 6 trees, and the label says "trees 6".
// Hint: The loop says 6, the label says 1. Every line inside the braces
//       looks correct. Read the for line slowly, one character at a time.
function bug6Trees() {
  trees = 0;
  for (let t = 0; t < 6; t++);{
    trees = trees + 1;
    let x=480 + t%4 * 75;
    let y=420 + t%3 * 75;
    drawTree();
  }
  fill(255);
  textSize(16);
  text("trees " + trees, 700, 330);
}
function drawTree() {
  fill(120, 80, 40);
  rect(-10, -60, 15, 40);   // trunk
  fill(40, 160, 70);
  circle(0, -60, 40);       // leaves
}


// ---- No bugs below this line. Do not change. ----
function drawPanels() {
  noFill();
  stroke(90, 110, 140);
  strokeWeight(2);
  rect(1, 1, 398, 298);
  rect(401, 1, 398, 298);
  rect(1, 301, 398, 298);
  rect(401, 301, 398, 298);
  noStroke();
  fill(242, 183, 5);
  textSize(14);
  text("BUG 1  lights", 12, 22);
  text("BUG 2  lanes", 412, 22);
  text("BUG 3  stars", 12, 322);
  text("BUG 4  window", 412, 322);
}


// PUZZLE: There are TWO different ways to fix Bug 1 by changing only the question.
//         Find both. Which one is easier to read? Why?
//         Answer: ________________________________________________
