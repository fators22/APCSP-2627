// U2 — The Paddle  ·  STARTER
// Five TODOs. Every one of them is a decision.
// The object, the paddle and the readouts are already drawn.
  // TODO 0 — declare object variables 




let paddleX = 160;
let gap=360;
let over = false;       // is the object over the paddle?
let score = 0;
let misses = 0;




function setup() {
  createCanvas(400, 400);
  textFont("monospace");
  textSize(16);
}


function draw() {
  background(16, 26, 43);
  paddleX=mouseX
  // TODO 1 — the movement
  // move the object — do not change these two lines


  // TODO 2 — the walls
  // left wall:  when x is less than 10, send it right (speedX = 3)  
  //    right wall: when x is more than 390, send it left


  
  // top wall:   when y is less than 10, send it down




  // TODO 3 — the paddle
  // the paddle's centre follows mouseX
  // then keep it on the canvas: never less than 0, never more than 320


  // TODO 4 — the status check
  // over is true when x is past the paddle's left edge
  //   AND before its right edge


  // TODO 5 — the hit
  // when the bottom of the object reaches 360 AND over is true:
  //   send it up, and add 1 to score


  // TODO 6 — the miss
  // when y is more than 410:
  //   put the object back at the top edge (200, 0), and add 1 to misses
 
  


   // TODO 6 — the object
  // draw the object and the paddle
  noStroke();


  fill(242, 183, 5);
  rect(160, 360, 80, 14);
  fill(255)
  circle(200,200, 20)


  // readouts
  fill(174, 192, 216);
  text("gap     " + gap, 14, 24);
  text("over    " + over, 14, 46);
  text("score   " + score + "   misses  " + misses, 14, 68);
}