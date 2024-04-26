class Shape {
  constructor(world, pos, size, options, color) {
    // create physic body. store size information.

    const randomColor = confettiColor[Math.floor(Math.random() * confettiColor.length)];


    this.world = world;
    this.pos = pos;
    this.size = size;
    this.color = randomColor;
    this.body = this.createBody(pos, options);
    Matter.Composite.add(engine.world, this.body);

    
  }

  createBody(pos, options) {

  }

  display() {
  
  }


}

  // "M286.11,135.78l-92.74.06v-33.57h-92.51c5.48,21.04,17.8,62.32,23.62,83.77h68.88v-16.75h92.74v117.28C139.73,281.97-17.14,328.85,1.52,115.27,4.03-34.83,189.34,6.72,286.13,1.65l-.02,134.13Z"