var car,wall;
var speed,weight;
var car2,car3,car4;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,50,50,20);
  car.debug=true;
  car2 = createSprite(50,150,50,20);
  car3 = createSprite(50,250,50,20);
  car4 = createSprite(50,350,50,20);
  wall = createSprite(1500,450,2,1000);
  wall1 = createSprite(50,90,10000,5);
  wall2 = createSprite(50,90,10000,5);
  wall3 = createSprite(50,200,10000,5);
  wall4 = createSprite(50,300,10000,5);
  car.debug=true;
  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
}

function draw() {
  background(39,40,34);  

  if(wall.x-car.x < (car.width + wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed *speed/22509;
if (deformation>180)
{
  car.shapeColor=color(255,0,0);
}  
if (deformation<180 && deformation >100){
  car.shapeColor=color(230,230,0);

}

if(deformation<100){
  car.shapeColor=color(0,255,0);
}
}

if(wall.x-car2.x < (car2.width + wall.width)/2){
  car2.velocityX=0;
  var deformation=0.5 * weight * speed *speed/22509;
  if (deformation>180)
  {
    car2.shapeColor=color(255,0,0);
  }  
  if (deformation<180 && deformation >100){
    car2.shapeColor=color(230,230,0);
  
  }
  
  if(deformation<100){
    car2.shapeColor=color(0,255,0);
  }
  }

  if(wall.x-car3.x < (car3.width + wall.width)/2){
    car3.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22509;
    if (deformation>180)
    {
      car3.shapeColor=color(255,0,0);
    }  
    if (deformation<180 && deformation >100){
      car3.shapeColor=color(230,230,0);
    
    }
    
    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
    }

    if(wall.x-car4.x < (car4.width + wall.width)/2){
      car4.velocityX=0;
      var deformation=0.5 * weight * speed *speed/22509;
      if (deformation>180)
      {
        car4.shapeColor=color(255,0,0);
      }  
      if (deformation<180 && deformation >100){
        car4.shapeColor=color(230,230,0);
      
      }
      
      if(deformation<100){
        car4.shapeColor=color(0,255,0);
      }
      }
  drawSprites();
}