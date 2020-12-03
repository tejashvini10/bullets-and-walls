
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed=random(223,321)
weight=random(30,52)
bullet=createSprite(200,100,50,20);
bullet.velocityX=0;
thickness=random(22,83)
bullet.shapeColor="brown";

wall=createSprite(1300,150,60,height/2);
wall.shapeColor="black";

  
}


function draw() {
  background(255,255,255);  

  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if( deformation>180)
{
bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}

 
if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
    wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
    wall.shapeColor=color(0,255,0);
}
}
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
    return true
}
return false;
}

