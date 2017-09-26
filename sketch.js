 function setup() { createCanvas(windowWidth, windowHeight); background(0,0,0);frameRate(1);
}
function draw() {
if (mouseIsPressed) {
var size = random(10, 100);
ellipse(mouseX, mouseY, size, size);
 }
}