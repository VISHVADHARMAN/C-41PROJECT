class Drops{
    constructor(x,y){
        var options = {
            restitution : 0.5,
            friction : 0.1
        }
       this.radius  =4;
       this.rain = Bodies.circle(x,y,4,options)
       World.add(world,this.rain);
    
    } 
    updateDrop(){
        if(this.rain.position.y> height){
            Matter.Body.setPosition(this.rain,{x: random(0,800),y:random(0,800)})
        }
    }
    showDrop(){
        
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.rain.position.x, this.rain.position.y,this.radius);
        
    }

}