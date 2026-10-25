// AP CSP - Unit 1, Lesson 2
// Shapes, Color, Order

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  // rect(x, y, width, height)
  // The first two are the TOP-LEFT corner.
  // The last two are a SIZE, so you add them to find the edges.

  // TODO 1: four black squares, 50 x 50, one in each corner

  // TODO 2: a red square, 300 x 300, starting at (50, 50)

  // TODO 3: a blue triangle filling the red square
  //         Read its corners off the red square.

}

// fill() is a setting. It applies to every shape after it,
// until you call fill() again.

//   fill(200)            gray
//   fill(255, 0, 0)      red
//   fill(0, 0, 255)      blue

// ---- WHEN THAT WORKS ----
// Move the blue triangle to just after background(). Run it.
// Where did it go?
// Put it back, then move one corner square to the end instead.
// Why is that one different?
