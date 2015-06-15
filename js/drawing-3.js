// Drawing 3

function setup() {
  createCanvas(600, 450);
  background(135, 205, 240);
}

function draw() {
	push(); // save
	translate(300, 225);
	rotate(frameCount); // # of frames since animation begin
	for (var i = 0; i < 10; i ++) {
		stroke(255, 20, 0); // red lines
		line(0, 0, 0, 450);
    	rotate(PI/10);
 	 }
	pop(); // restore

}