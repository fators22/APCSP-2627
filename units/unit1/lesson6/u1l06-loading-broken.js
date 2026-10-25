// Loading bar — broken version.
// This sketch has THREE bugs. All silent. No errors.
// Use the four-question checklist to find them.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  let progress = 0;
  let loading = 0;
  let percent = 0;

  background(16, 26, 43);
  noStroke();

  // empty track
  fill(24, 38, 60);
  rect(80, 220, 340, 30);

  // filled bar
  fill(120, 220, 140);
  rect(80, 220, 0, 30);

  // label
  fill(234, 240, 247);
  textSize(20);
  text("LOADING " + percent + "%", 175, 200);

  progress = progress + (2 * loading);
  percent = round(progress * 100 / 340);

  function keyPressed() {
    loading = 1;
  }

  function mousePressed() {
    loading = 0;
  }
}