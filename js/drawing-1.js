// Drawing 1
var sunHover; 
var backgroundColor;
  
function setup() {
	createCanvas(600, 450);
	backgroundColor = color(0, 0, 255);
	}

function draw() {
	background(backgroundColor);
	
	// Distance btw mouse and circle
	var distance = dist(mouseX, mouseY, width/2, height/2);

	// check if distance is less than the circle's radius
	if (distance < 100) {
		sunHover = true;
	} else {
		sunHover = false;
	}
	
	// Draw circle
	ellipseMode(CENTER);
	stroke(255);
	strokeWeight(5);
	if (sunHover == true) {
		fill(255, 255, 250, 80);
		cursor(HAND);
	} else {
		fill(255, 165, 0);
		cursor(ARROW); 
	}
	ellipse(width/2, height/2,200,200);

}

function mousePressed() {
	if (sunHover == true) {
		backgroundColor = color(random(255), random(255), random(255));
	}
}
