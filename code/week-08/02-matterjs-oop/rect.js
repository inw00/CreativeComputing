class Rect extends Shape {
    constructor() {
        super(world, pos, size, options);

    }

    createBody(pos) {
        return Matter.Bodies.rectangle(
            this.pos.x, this.pos.y, this.size.x, this.size.y, options);
    }
}