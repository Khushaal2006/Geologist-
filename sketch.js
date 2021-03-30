const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,320,70,50);
    pig1 = new Pig(400,350);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    log1 = new Log(500,320,50,150);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);
    bird = new Bird(100,100);
}

function draw(){
    background("blue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    //box2.display();
    ground.display();
    pig1.display();
    log1.display();
    //box3.display();
    //box4.display();
    //pig2.display();
    //log2.display();
    bird.display();
}