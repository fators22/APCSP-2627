// AP CSP - Unit 2, Lesson 1 : ASKING A QUESTION
//
// The shapes for TODO 2 and TODO 3 are described in words only. The numbers
// come from the anchor diagrams on the slides. Look there, not here.


const LANDING_PAD_Y = 300;   // pad's top edge


let landerY = 100;   // bottom of the HULL. y grows DOWN, so this number GROWS.
                     // The legs hang 30 BELOW this - see feetY in draw().
let speed = 1;       // pixels per frame.
let landed = false;  // our Boolean. Has it touched down yet?




function setup() {
  createCanvas(400, 400);
  textFont("monospace");
  textSize(16);
}




function draw() {
  background(16, 26, 43);
  noStroke();


  // pad - we draw this together
  fill(91, 107, 130);
  rect(50, LANDING_PAD_Y, 300, 22);


  // the lander falls
  landerY = landerY + speed;


  // Where the feet actually are. The hull stops at landerY; the legs hang
  // 30 below it, so THIS is the part that touches the pad.
  let feetY = landerY + 30;




  // ===== TODO 1a ==========
  // Store the answer in the Boolean we already made.
  //
  //   landed = ...something that is true or false...
  //
  // What has to be true for it to have landed? Use feetY, not landerY.
  // ========================




  // body
  fill(214, 222, 235);
  rect(170, landerY - 90, 60, 90);                                     // hull
  fill(224, 74, 74);
  triangle(200, landerY - 148, 230, landerY - 90, 170, landerY - 90);  // nose




  // ===== TODO 1b ==========
  // Orange by default. When landed is true, stop it and turn the light green.
  // ========================




  // status light - the LAST fill() before this line is the colour you see
  circle(200, landerY - 65, 26);




  // ===== TODO 2 ==========
  // Landing legs. Show them ONLY once it has landed.
  //
  //   Two thin rectangles hanging from the hull's BOTTOM CORNERS, down to
  //   the feet.
  //
  // =======================




  // ===== TODO 3 ==========
  // Engine flame. Show it ONLY while it is still falling.
  //
  //   A triangle hanging below the hull. Its top edge sits at landerY.
  //   The tip points down.
  //
  //   You need the OPPOSITE of landed. There is more than one way to
  //   write that - try one.
  //
  // =======================




  // ===== TODO 4 ==========
  // Make the flame flicker.
  // =======================




  // ===== TODO 5 ==========
  // Make the light blink while falling.
  //
  //   This one does NOT go here. It goes back up in TODO 1b.
  //
  //   Your TODO 1b if has no else yet - it did not need one. Give it one
  //   now, and put the blink inside it. The light is drawn right after
  //   TODO 1b, and fill() is a setting: the LAST one before circle() is
  //   the one you actually see.
  // =======================




  // readouts
  //
  // ALT is not its own variable. It is how far the FEET still have to go.
  fill(174, 192, 216);
  text("ALT  " + (LANDING_PAD_Y - feetY), 14, 24);




  // ===== TODO 1c ==========
  // Put your Boolean on screen so you can watch it flip.
  //
  //   text("landed   " + landed, 14, 46);
  //
  // =======================
}




// SELF-CHECK - look at the canvas, not at your code
//   [ ] It stops with its FEET flat on the pad. ALT reads 0.
//   [ ] landed reads false, then true. Never anything else.
//   [ ] Light is orange on the way down, green once it is down.
//   [ ] Legs appear ONLY after it lands.
//   [ ] Flame burns ONLY while it is falling.
//
// PUZZLE - predict BEFORE you run it
//   Move the circle() line ABOVE the hull. What happens to the light, and
//   why? Write your answer down first.
//
// EARLY FINISHER
//   Show CAUTION in red while the lander is below 200 and still falling.
//   That is a second question. Where does it go?
//
// TODO: