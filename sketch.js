

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops =100;
var drops=[]; 
var drop;
var thunderstorm,thunderstorm_img
var thunderCreatedFrame;


function preload(){ 
    thunder1 = loadImage("1.png"); 
    thunder2 = loadImage("2.png"); 
    thunder3 = loadImage("3.png"); 
    thunder4 = loadImage("4.png"); 
} 

function setup(){
 var canvas = createCanvas(600,800);

 
 engine = Engine.create();
 world = engine.world;
 //thunderstorm = new Thunder();
 

 
 
 for(var i=0;i<maxDrops;i++)
    {
        drops[i] = new Drops(random(0,800),random(0,800));
    }
 
 
 umbrella = new Umbrella(300,700,170,200);
 
}

function draw(){
 background(0);   
 Engine.update(engine);
 thunderStorm();
 
 for(var i=0;i<maxDrops;i++)
    {
        drops[i].updateDrop();
        drops[i].showDrop();
    }
 //thunderstorm.display();
 umbrella.display();
drawSprites();
 
}
function thunderStorm(){
    rand = Math.round(random(1,4)); 
    if(frameCount%80===0){ 
        thunderCreatedFrame=frameCount; 
        thunder = createSprite(random(10,370), random(10,30), 10, 10); 
        switch(rand){ 
            case 1: thunder.addImage(thunder1); 
            break; 
            case 2: thunder.addImage(thunder2);
             break; 
             case 3: thunder.addImage(thunder3); 
             break; 
             case 4: thunder.addImage(thunder4); 
             break; 
             default: break; 
           }
              thunder.scale = random(0.3,0.6) 
           } 
           if(thunderCreatedFrame + 10 ===frameCount && thunder){ 
               thunder.destroy(); 
           }
}


