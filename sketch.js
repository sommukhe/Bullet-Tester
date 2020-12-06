var bullet, wall, thickness;
var speed, weight;
function setup(){
createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
bullet = createSprite(50,200,50,50);
bullet.shapeColor = color(255,255,255);
thickness = random(22,83);
wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor = color(80,80,80);
bullet.velocityX = speed;
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}

function draw(){
  background("lightblue");  
if (hasCollided(bullet, wall)){
var damage = (0.5*weight*speed*speed)/22500;
bullet.velocityX = 0;
if (damage > 10){
    bullet.shapeColor= color(255, 0, 0);
}
if (damage < 10){
bullet.shapeColor = color(0, 255, 0);
}
}
drawSprites();
}  


