var ground;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;



function setup() {
  createCanvas(800,400);

  //ground = new Ground(10,height,800,30);

  for(var k = 0 ; k <= width; k = k + 80){

    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));

  }

  for(var j = 40 ;  j <= width; j = j + 50){

    plinko.push(new Plinko,(k,75) );

  }

  for( var j = 15; j <= width - 10;  j = j+50 ){

    plinko.push(new Plinko, (j,175));

  }

}

function draw() {
  background(0); 
  
 // ground.display();

 if(frameCount%0 === 90){

  particles.push(new Particle(random(width/2-10,width/2+ 10),10,10));

 }


  drawSprites();
}