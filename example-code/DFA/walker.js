class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 2
        this.stuck = false;
        this.connected = []
    }

    show() {
        if (this.stuck) {
            stroke(150, 0, 0, 100);
            strokeWeight(this.r)
            for (let i = 0; i < this.connected.length; i++) {
                line(this.x, this.y, this.connected[i][0], this.connected[i][1]);
            }
        } else {
            fill(255);
            noStroke();
            ellipse(this.x, this.y, this.r);

        }


    }

    move() {
        this.x += random(-this.r * 2, this.r * 2);
        this.y += random(-this.r * 2, this.r * 2);

        // if (this.x < 0) {
        //     this.x = 0
        // }
        // if (this.x > width) {
        //     this.x = width
        // }
        // if (this.y < 0) {
        //     this.y = 0
        // }
        // if (this.y > height) {
        //     this.y = height
        // }
    }

    checkAdhesion(other) {
        if (!this.stuck) {
            let d = dist(this.x, this.y, other.x, other.y);
            if (d < (this.r + other.r)*1.5) {
                this.stuck = true;
                other.connected.push([this.x, this.y]);
            }
        }
    }
}