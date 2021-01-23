
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box,box1,box2
var binImg,bin,p,pimg;
function preload()
{
   //dustbin image
	binImg = loadImage("images/dust 2.png");
	// paper ball image
	pimg = loadImage("images/paper ball.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(115,575,20,20)	
	ground = new Ground(400,610,800,10)
    box = new dustbin(550,540,160,10)
	box1 = new dustbin(610,610,10,110)
	box2 = new dustbin(670,540,160,10)
	bin = createSprite(610,530,20,110);
    bin.addImage(binImg);
	bin.scale = 0.60;
	
	p= createSprite(115,575,20,20);
	p.addImage(pimg);
    p.scale =0.1;
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51,214,255);
  ground.display();
  ball.display();
  box.display();
  box1.display();
  box2.display();
  
  drawSprites();
  //text(mouseX,400,200)
 // text(mouseY,200,300)
}

function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
		p= createSprite(115,575,20,20);
		p.addImage(pimg);
    p.scale =0.1;
	  }
}


