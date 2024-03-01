// Physics body
// Particle

class Vehicle {
    constructor(x,y) {
        this.loc = createVector(x,y);
        this.acc = createVector();
        this.vel = createVector();
        this.friction = 0.995;
    }
    display() {
        circle(this.loc.x,this.loc.y, 20);
    }

    applyForce(force) {
        // f = ma
        this.acc.add(force);

    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel)
        this.acc.mult(0);
        this.acc.mult(this.friction);

        if (this.loc.y > height) {
            this.loc.y = height;
            this.vel.y *= -1;
        }

        if (this.loc.x > width || this.loc.x < 0) {
            //this.loc.x = width;
            this.vel.x *= -1;
        }
    }


}
