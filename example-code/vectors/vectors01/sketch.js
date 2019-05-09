let pos, vel, grav, trail;

function setup() {
  frameRate(15);
  createCanvas(400, 200);
  pos = createVector(0, height);
  vel = createVector(3, -6);
  grav = createVector(0, 0.1);
  trail = [];
  trail.push([pos.x, pos.y])
}

function draw() {
  background(220);
  fill(100);

  drawTail();
  fill(255,0,200);
    ellipse(pos.x, pos.y, 25); drawVector(vel, pos, "velocity"); drawVector(grav, pos, "gravity");

    vel.add(grav); //add gravity to velocity
    pos.add(vel); //add velocity to location

    trail.push([pos.x, pos.y]);

    if (pos.y > height + 25) setup();
  }

  function drawVector(forceVector_, positionVector, label) {
    let forceVector = p5.Vector.mult(forceVector_, 6);
    push();
    textSize(14)
    fill(0);
    strokeWeight(3);
    stroke(0);
    translate(positionVector.x, positionVector.y);
    line(0, 0, forceVector.x, forceVector.y);
    translate(forceVector.x, forceVector.y);
    fill(100,100,0);
    noStroke();
    text(label, 0, 0);
    rotate(forceVector.heading());
    let arrowSize = 12
    fill(0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

  function drawTail() {
    push();
    noFill();
    strokeWeight(4)
    stroke(150);
    beginShape();
    trail.forEach((v) => vertex(v[0], v[1]));
    endShape();
    pop();
  }