class Shape {
    constructor(world) {
        // create physics body, store size information

        this.world = world;
        this.pos = pos;
        this.size = size;
        this. body = Matter.Bodies.rectangle(
            this.pos.x, this.pos.y, this.size.x, this.size.y, options);
        Matter.Composite.add(engine.world, this.body);

    }

    display() {
        rect(this.body.position.x, this.body.position.y, this.size.x, this.size.y);
    }
}

