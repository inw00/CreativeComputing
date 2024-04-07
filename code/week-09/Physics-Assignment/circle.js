class Circle extends Shape {
  constructor(world, pos, size, options, color) {
    super(world, pos, size, options, color);
  }

  createBody(pos, options, color) {
    return Matter.Bodies.circle(
      pos.x, pos.y, this.size.x, options, color);
  }

  display() {
    push();
      fill(this.color);
      circle(this.body.position.x, 
          this.body.position.y, 
          this.size.x * 2);
    pop();
  }
}