var mic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //create Audio input
  mic = new p5.AudioIn();
  
  mic.start();
}

function draw() {
  background('#ee5a50');
  
  var vol = mic.getLevel();
  
  var x = width/2;
  var y = map(vol, 0, 1, height/2, height);
  var mouthSize = map(vol, 0, 1, 50, 150);
  //head
  fill('#f5c833');
  ellipse(x, y, 200, 200);
  
  //eyes
  fill(255, 255, 255);
  ellipse(x - 50, y-25, 30, 30);
  ellipse(x + 50, y-25, 30, 30);
  
  //mouth
  fill('#77ccf1');
  ellipse(x, y+50, mouthSize, mouthSize);

}