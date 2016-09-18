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
  var y = height/2;

  var eyeSize = map(vol, 0, 1, 30, 185);
  var headSize = map(vol, 0, 1, 200, 350);
  var mouthSize = map(vol, 0, 1, 50, 150);
  
  //head
  fill('#f5c833');
  ellipse(x, y, headSize, headSize);
  
  //eyes
  fill(255, 255, 255);
  ellipse(x - 50, y-25, eyeSize, eyeSize);
  ellipse(x + 50, y-25, eyeSize, eyeSize);
  
  //mouth
  fill('#77ccf1');
  ellipse(x, y+50, mouthSize, mouthSize);

}