var slider;

function setup() {
  createCanvas(1200, 800);
  background(0);
  strokeWeight(1);
  stroke(255,200)
  noFill();
  slider = createSlider(0, 0.5, 0, 0.05);
  slider.changed(reDraw);
  drawCircle(width / 2, height * 0.75 , 400)
	let button = createButton('redraw');
	button.mousePressed(reDraw)
}

// function draw(){
// 	console.log(slider.value())
// }

function drawCircle(x, y, d) {
  let sVal = slider.value();
  let rmin = 0.5 - sVal;
  let rmax = 0.5 + sVal;
  ellipse(x, y, d);
  if (d > 2) {
		stroke(255);
		fill(255,0,0,100);
    drawCircle(x + d * random(rmin, rmax), y, d * random(rmin, rmax));
    drawCircle(x - d * random(rmin, rmax), y, d * random(rmin, rmax));
    drawCircle(x, y - d * random(rmin, rmax), d * random(rmin, rmax));
    //drawCircle(x,y-d*0.5,d*0.5);
  }
}

function reDraw() {
  console.log(slider.value());
  background(0);
  drawCircle(width / 2, height * 0.75, 400);
}
