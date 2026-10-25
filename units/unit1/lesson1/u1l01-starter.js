// =============================================
// AP CSP - Unit 1, Lesson 1
// Two Numbers: coordinates and line()
//
// A point on the canvas is TWO numbers: x then y.
// x grows to the right. y grows DOWNWARD.
// =============================================

function setup() {
  // Runs ONCE. 400 wide, 400 tall.
  createCanvas(400, 400);
}

function draw() {
  background(150);          // mid grey, so black lines show up

  // ---- Given to you ----
  // stroke() sets the LINE colour. strokeWeight() sets how
  // thick it is. You need both to see anything. We will come
  // back to what else they can do.
  stroke(0);
  strokeWeight(5);

  // ---- Together ----
  // line() takes FOUR numbers, but read them as TWO POINTS:
  //     line(x1, y1,  x2, y2)
  //           start    end
  //
  // width and height are given to you by p5. You never set
  // them - createCanvas did that. You just use them.

  // TODO 1: a vertical line down the middle.
  //         From the top middle to the bottom middle.
  // line(width / 2, 0, width / 2, height);

  // TODO 2: a horizontal line across the middle.
  // line(   ,   ,   ,   );


  // ---- On your own ----
  // TODO 3: a diagonal from the TOP-LEFT corner to the
  //         BOTTOM-RIGHT corner.

  // TODO 4: a diagonal from the TOP-RIGHT corner to the
  //         BOTTOM-LEFT corner.

  // TODO 5: make the horizontal line RED.
  //         stroke('red') before the line you want to change.
}

// ---- STUCK? ----
// Write the four corners down before you write any code:
//     top-left      (0, 0)
//     top-right     (width, 0)
//     bottom-left   (0, height)
//     bottom-right  (width, height)
// Once those are on paper, the diagonals are just picking two.

// ---- CHECK YOURSELF ----
// Change createCanvas(400, 400) to createCanvas(600, 600).
// If you used width and height, everything still lines up.
// If you typed 400 anywhere, that part is now in the wrong place.

// ---- IF YOU FINISH EARLY ----
// Divide the canvas into three equal columns with two vertical
// lines. You will need width/3 and width*2/3.
