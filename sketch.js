

var bullet,wall;
var thickness;

var speed, weight; 

thickness=random(22,83)

function setup() {
  createCanvas(1600, 400);


	speed=random(223, 321)
	weight=random(30, 52)


	bullet=createSprite(50, 200, 50,100);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1500,200, thickness, height/2);
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(80, 80, 80);

  
  
  drawSprites();
 
}

function hascollided(lbullet, lwall)
{
	bulletRightEdge=1bullet.x +1bullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		 return true 
	}
	return flase; 
}


