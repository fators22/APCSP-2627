// Homepage hero: a live p5.js sketch.
// Dots grow near the mouse and the current (mouseX, mouseY) is shown —
// a quick reminder of the p5 coordinate system.
new p5((p) => {
  const CELL = 28;          // matches the graph-paper grid in style.css
  const REACH = 170;        // how far the mouse "influences" dots
  let host, reduceMotion;

  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  p.setup = () => {
    host = document.getElementById("hero-canvas");
    p.createCanvas(host.clientWidth, host.clientHeight).parent(host);
    p.noStroke();
    p.textFont("monospace");
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  p.windowResized = () => p.resizeCanvas(host.clientWidth, host.clientHeight);

  p.draw = () => {
    p.clear();
    const inside = p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height;

    // When the mouse isn't over the canvas, a point drifts on its own (unless reduced motion is on)
    let fx, fy;
    if (inside) { fx = p.mouseX; fy = p.mouseY; }
    else if (reduceMotion) { fx = p.width * 0.72; fy = p.height * 0.4; }
    else {
      const t = p.frameCount * 0.004;
      fx = p.noise(t) * p.width;
      fy = p.noise(t + 100) * p.height;
    }

    const teal = p.color(css("--ink"));
    const grid = p.color(css("--gold-deep"));

    for (let x = CELL; x < p.width; x += CELL) {
      for (let y = CELL; y < p.height; y += CELL) {
        const d = p.dist(fx, fy, x, y);
        const amt = p.constrain(1 - d / REACH, 0, 1);
        p.fill(p.lerpColor(grid, teal, amt));
        p.circle(x, y, 3 + amt * (CELL * 0.75));
      }
    }

    // Coordinate readout
    p.fill(css("--ink"));
    p.textSize(14);
    const label = `(${Math.round(fx)}, ${Math.round(fy)})`;
    const lx = Math.min(fx + 14, p.width - p.textWidth(label) - 8);
    p.text(label, lx, Math.max(fy - 12, 18));
  };
});
