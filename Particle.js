class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.color = color(random(0,255), random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      rect(pos.x, pos.y, this.r);

      for(var j = 0; j < particles.length; j++){
          particles[j].display();
      }
      for(var k = 0; k < Divisions.length; k++){
          divisions[k].display();
      }
    }
}