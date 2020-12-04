const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,580,1200,15)
	tree = new Tree(400,500)

	mango1 = new Mango(830,168,20);
	mango2 = new Mango(930,210,25);
	mango3 = new Mango(890,140,15);
	mango4 = new Mango(750,282,18);
	mango5 = new Mango(840,268,23);
	mango6 = new Mango(970,265,20);

	stone = new Stone(154,485,15);
	launcher = new Launcher(stone.body,{x:154,y:485})

	//Engine.run(engine);
}

function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(220);
  
  imageMode(CENTER)
  image(boyImg,200,530,150,200)
  
  push();
  textSize(30)
  text("Press SPACE to get second chance to play",50,50)
  pop();

  tree.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  drawSprites();
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.radius+stone.radius){
		Matter.Body.setStatic(mango.body,false);
	}
}

function mouseDragged(){    
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
    console.log("mouseReleased")
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
    launcher.attach(stone.body);
    console.log("keyPressed")
	}
}
