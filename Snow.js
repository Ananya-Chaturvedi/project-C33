class Snow {
    constructor(x,y){
    var options = {
    'friction':1.0,
    'density':1.0
    }
    this.body = Bodies.rectangle(x,y,options);
    this.image = loadImage("snowflake.png");
    World.add(world,this.body);
    }
    display(){
    push();
    imageMode(CENTER);
    image(this.image,0,0);
    pop();
    }
}
