// Drawing 2

function setup() {
  createCanvas(600, 450);
  background(240, 255, 500);
  stroke(250, 200, 0, 100);  // orange lines
  strokeWeight(5);
  sun = loadImage('images/sun.png');
  	
  translate(300, 225);
  for (var i = 0; i < 50; i ++) {
		line(0, 0, 0, 450);
    	rotate(PI/25);
  }
}

function draw() {
	image(sun, -100, -80, sun.width/2, sun.height/2);
}
