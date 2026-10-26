// AP CSP - Unit 3, Lesson 1 : KEEP GOING UNTIL
// Light up the house for a snowy night. Every TODO is a while loop.
//
// BEFORE YOU RUN A NEW LOOP: SAVE (Ctrl+S / Cmd+S).
// A loop that never ends freezes the tab, and anything unsaved is gone.

const EAVE_Y = 260;        // bottom edge of the roof
const HOUSE_LEFT = 220;    // left corner of the house
const HOUSE_RIGHT = 580;   // right corner of the house

let bulbs = 0;             // how many bulbs were drawn this frame
let flakes = 0;            // how many snowflakes were drawn this frame


function setup() {
  createCanvas(800, 600);
  textFont("monospace");
  textSize(18);
}


function draw() {
  drawScene();
  drawSnowfall();
  drawLights();
  drawIcicles();
  drawReadouts();
}


// ---------------------------------------------------------------
// The house, the sky and the snow on the ground. Already done.
// ---------------------------------------------------------------
function drawScene() {
  background(16, 26, 43);
  noStroke();

  fill(240, 235, 210);
  circle(680, 90, 70);                          // moon

  fill(235, 240, 250);
  rect(0, 500, 800, 100);                       // snow on the ground

  fill(120, 70, 50);
  rect(HOUSE_LEFT, EAVE_Y, 360, 240);           // house
  fill(60, 40, 35);
  triangle(200, EAVE_Y, 600, EAVE_Y, 400, 140); // roof
  fill(70, 40, 30);
  rect(375, 400, 50, 100);                      // door
  fill(255, 214, 120);
  rect(260, 320, 70, 60);                       // windows
  rect(470, 320, 70, 60);

  stroke(25);
  strokeWeight(2);
  line(HOUSE_LEFT, EAVE_Y + 6, HOUSE_RIGHT, EAVE_Y + 6);  // the wire
  noStroke();
}


// ---------------------------------------------------------------
function drawLights() {
  bulbs = 0;

  // ===== TODO 1 ==========
  // The string of lights. One bulb every 40 pixels along the wire,
  // from HOUSE_LEFT to HOUSE_RIGHT - a bulb on BOTH corners.
  //
  //   Each bulb:   circle(x, EAVE_Y + 8, 16);
  //
  //   1. Make x. Where does the first bulb go?
  //   2. while x has not gone past the right corner ...
  //   3. ... draw one bulb, then move x 40 to the right.
  //
  // Step 3 has two lines. Forget the second one and the tab freezes.
  // =======================



  // ===== TODO 2 ==========
  // Count them. Every time a bulb is drawn, bulbs goes up by 1.
  // The readout in the corner should say 10.
  //
  //   This is not a new loop. It is one more line inside TODO 1's loop.
  // =======================



  // ===== TODO 3 ==========
  // Red, green, red, green ...
  //
  //   Right before each circle(), choose its fill():
  //     red    fill(230, 60, 60)
  //     green  fill(60, 190, 90)
  //
  //   bulbs already tells you which bulb you are on. Unit 2 gave you
  //   the tool that tells even from odd.
  // =======================
}


// ---------------------------------------------------------------
function drawIcicles() {
  randomSeed(7);   // same "random" numbers every frame, so the icicles
                   // hold still instead of flickering. Leave this line.
  fill(220, 240, 255);

  // ===== TODO 4 ==========
  // Icicles. One BETWEEN every two bulbs: the first at HOUSE_LEFT + 20,
  // then every 40, stopping BEFORE the right corner.
  //
  //   Each icicle is a triangle pointing down:
  //     let len = random(20, 50);
  //     triangle(x - 5, EAVE_Y + 18, x + 5, EAVE_Y + 18, x, EAVE_Y + 18 + len);
  //
  //   Make len INSIDE the loop, so every icicle gets its own length.
  // =======================
}


// ---------------------------------------------------------------
function drawSnowfall() {
  flakes = 0;
  fill(255);

  // ===== TODO 5 ==========
  // Snowfall, written from the exam version:
  //
  //   REPEAT UNTIL (flakes = 150)
  //   {
  //     draw a snowflake of size 4 at a random spot in the SKY (above 500)
  //     flakes <- flakes + 1
  //   }
  //
  //   REPEAT UNTIL keeps going until its condition is TRUE.
  //   while keeps going while its condition is TRUE.
  //   So your while needs the OPPOSITE condition.
  // =======================
}


// ---------------------------------------------------------------
function drawReadouts() {
  fill(255);
  text("bulbs   " + bulbs, 20, 30);
  text("flakes  " + flakes, 20, 54);
}




// SELF-CHECK - look at the canvas, not at your code
//   [ ] bulbs reads 10. One bulb on each corner of the house.
//   [ ] Red, green, red, green ... starting with red on the left.
//   [ ] 9 icicles, one between every pair of bulbs, holding still.
//   [ ] flakes reads 150. No snowflakes on the ground.
//   [ ] Nothing froze. (If it did: which loop has no update line?)
//
// PUZZLE - predict BEFORE you run it
//   In TODO 1, change  <=  to  <  (or the other way round).
//   How many bulbs now? Which one went missing? Write it down first.
//
// EARLY FINISHER
//   1. A second string of lights along the bottom of the sky, across the
//      WHOLE canvas: y = 492, every 30 pixels. Count them into bulbs too.
//   2. Twinkle: every half second the colors swap - the red bulbs go
//      green and the green go red. (frameCount and % will do it.)
//
// TODO:
