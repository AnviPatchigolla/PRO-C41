class Drops{
    constructor(x, y){
          this.body = Bodies.circle(x, y, radius);
          this.x = x;
          this.y = y;

          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        circle(pos.x, pos.y, 10);
    }
}