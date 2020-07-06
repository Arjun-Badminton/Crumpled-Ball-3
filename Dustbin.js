class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.image = loadImage("sprites/dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.bodyright = Bodies.rectangle(930, 620, 100, 20, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.bodyleft = Bodies.rectangle(720, 620, 100, 20, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("White");
    translate(this.body.position.x,this.body.position.y);
      image(this.image,0,0, 200, 200);
    pop();
    }
  };