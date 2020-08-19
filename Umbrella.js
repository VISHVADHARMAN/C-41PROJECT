class Umbrella{
    constructor(x,y,w,h){
        var options={
           isStatic : true
        }
        this.image = loadImage("walking_1.png");
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(300,650,60,60, options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
    }
}