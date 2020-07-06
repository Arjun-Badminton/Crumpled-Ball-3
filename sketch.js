var ground,paper;
var box1;
var paperImg;
var Launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
  paperImg = loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(100 , 200 , 5 , {restitution:0.5, isStatic:false, friction:0, density:1.2});
	World.add(world, paper);
	
	Engine.run(engine);
  
	box1 = new Box(720,470,20,100);
	
	ground = new Ground(800,height,1600,260);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  
	  
  Render.run(render);

  Launcher = new launcher(paper.body,{x:100, y:200});
}

function draw() {
  rectMode(CENTER);
  background("White"); 
	
    box1.display();
	ground.display();
	
	fill("Purple");
	imageMode(CENTER);
	image(paperImg,	paper.position.x,paper.position.y,40,40);
	 
  drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:20,y:-20});
	}
}