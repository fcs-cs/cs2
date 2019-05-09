//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let seekers = [];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 100; i++) {
        seekers.push(new Seeker(random(width), random(height)));
    }
}

function draw() {
    background(220);

    for (let seeker of seekers) {
        let mouse = createVector(mouseX,mouseY);
        seekForce = seeker.seek(mouse);
        seeker.addForce(seekForce);
        seeker.move();
        seeker.show();
        // for (let avoid of seekers) {
        //     if (avoid == seeker) continue;
        //     let avoidance = seeker.avoid(avoid.pos);
        //     seeker.addForce(avoidance)
        // }
    }
}


class Seeker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.accel = createVector(0, 0);
        this.maxSpeed = 4;
        this.vision = 50;
    }
    show() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, 10);
        push()
        translate(this.pos.x,this.pos.y)
        translate(this.vel.x,this.vel.y)
        rotate(this.vel.heading());
        arc(0,0,this.vision,.25,-.25);
        pop();
    }

    addForce(force) {
        this.accel.add(force);
    }

    move() {
        this.accel.add(p5.Vector.random2D().mult(0.5));
        this.vel.add(this.accel);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.accel = createVector(0, 0);

        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.x < 0) this.pos.x = height;
    }

    seek(vector) {
        let seekVector = p5.Vector.sub(vector, this.pos);
        const distCheck = seekVector.mag() < this.vision
        const angleCheck = seekVector.angleBetween(this.vel) < .25
        if (!distCheck || !angleCheck) {
            return createVector(0, 0)
        } else {
            return seekVector
        }
    }

    avoid(vector) {
        let avoidVector = p5.Vector.sub(this.pos, vector);

        if (avoidVector.mag() > this.vision) {
            return createVector(0, 0);
        } else {
            let avoidMag = avoidVector.mag();
            let mappedMag = map(avoidMag, 0, this.vision,0.5,0);
            return avoidVector.setMag(mappedMag);
        }


    }

}