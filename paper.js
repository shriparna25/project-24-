class Paper {
    constructor (x,y,radius){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.radius = radius;
        this.Paper = Bodies.circle(x,y,radius,options);
        World.add(world,this.Paper);
    }
  display(){
      ellipseMode(RADIUS);
      ellipse(this.Paper.position.x,this.Paper.position.y,this.radius);
  }
       

    }




































