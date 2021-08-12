const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var night,fairy,engine,star_object;
var nightImage,fairyImage,starImage,star;
function preload()
{
   //preload the images here
   //nightImage = loadImage("staringht.png")
   fairyImage = loadImage("images/fairy2.png")
   starImage = loadImage("images/star.png")
}

function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

   star_option = {
    isStatic : true
  }
  star = Bodies.rectangle(350, 50, 30, 25, star_option);
  World.add(world, star);
  star_object = createSprite(350,50,20,20);
  star_object.addImage(starImage)
  star_object.scale = 0.2

  //night = createSprite(200,200,20,20);
  //night.addImage(nightImage);
  fairy = createSprite(150,250,20,20);
  fairy.addImage(fairyImage)
  fairy.scale = 0.2
  //star.addImage(starImage)
}


function draw() {
  background("black");
  Engine.update(engine);
   star_object.x = star.position.x
   star_object.y = star.position.y
  rectMode(CENTER);
  //rect(star_object.position.x,star_object.position.y,400,10)
  
  if (keyCode === LEFT_ARROW){
     fairy.x = fairy.x - 3
  }
  if (keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 3
  }
  if (keyCode === DOWN_ARROW){
    Matter.Body.setStatic(star, false)
  }
  drawSprites();
}
