class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.r = r;
      this.body = Bodies.rectangle(x,y,r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipsetMode(RADIUS);
      fill("white");
      rect(pos.x, pos.y, this.r);
    for (var j = 40; j <= Width; j =j+50){
          plinkos.push(new plinko(j,75));
      }
      
     for (var j = 15; j <= width - 10; j =j+50){
         plinkos.push(new Plinko(j,175));
     }
      
     for (var j = 30; j <= width - 20; j =j+50){
         plinkos.push(new Plinko(j,100));
     }
    }
}