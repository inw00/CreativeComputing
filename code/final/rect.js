class Rect extends Shape {
  constructor(world, pos, size, options, color) {
    super(world, pos, size, options, color);
  }

  createBody(pos, options, color) {
    return Matter.Bodies.rectangle(
      pos.x, pos.y, this.size.x, 
      this.size.y, options, color);
  }

  display() {
    push();
      fill(this.color);
      translate(this.body.position.x, 
        this.body.position.y);
      rotate(this.body.angle);
      rect(0, 0,
          this.size.x, this.size.y,20);
    pop();
  }
}