let walkers = [];
let static = [];

function setup() {
  createCanvas(640, 240)
  for (let i = 0; i < 100; i++) {
    walkers.push(new Walker(random(width), random(height), 10));
  }

  let seed = new Walker(width / 2, height / 2, 10);
  seed.static = true;
  static.push(seed);
}

function draw() {
  background(255);
  for (let walker of walkers) {
    walker.show();
    walker.move();
  }

  static[0].show();
}

class Walker {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.static = false;
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
      this.static ? fill(0) : fill(200,100);
      ellipse(this.x, this.y, this.r)
  }
}