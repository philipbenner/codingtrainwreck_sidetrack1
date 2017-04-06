var spots = [];

var spot;

function setup() {
	createCanvas(500, 500);
	background(230, 230, 250);
	spots =	[createVector(250,50),createVector(450,450),createVector(50,450)];

	spot = createVector( random(width), random(height) );

	fill(255,0,0);
    strokeWeight(5)
	point(spots[0].x, spots[0].y);
	point(spots[1].x, spots[1].y);
	point(spots[2].x, spots[2].y);
}

function draw() {
  //background(230, 230, 250);
  push();
  strokeWeight(1);
  var ran = floor( random(3) );
  var v3 = p5.Vector.lerp(spots[ran], spot, 0.5);
  spot.set([v3.x, v3.y])
  point(spot.x, spot.y)
  pop();
}