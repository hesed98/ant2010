function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6);
}
//1
function draw() {
  background(200);
  fill(255);
  noStroke();
  //4
  for (var y =0; y < height; y+=10) {
    //5
    var snowX = random(0, width);
    //6
    var snowSz = random(5, 15);
    //7
    ellipse(snowX, y, snowSz, snowSz);
  }
}