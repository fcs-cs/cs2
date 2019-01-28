var circle;

function setup() {
	createCanvas(600, 400);
	circle = {
		x: width / 2,
		y: height / 2,
		d: 20,
		xVel: 6,
		yVel: 4,
		c: [255, 0, 0]

	}
}

function draw() {
	background(220);

	ellipse(circle.x, circle.y, circle.d);
	circle.x = circle.x + circle.xVel;
	circle.y = circle.y + circle.yVel;

	if (circle.x >= width) {
		circle.xVel = circle.xVel * -1;
	}

	if (circle.y >= height) {
		circle.yVel = circle.yVel * -1;
	}
	if (circle.x < 0) {
		circle.xVel = circle.xVel * -1;
	}

	if (circle.y < 0) {
		circle.yVel = circle.yVel * -1;
	}
}