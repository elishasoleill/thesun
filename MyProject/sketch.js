function setup() {
  createCanvas(400, 400);
}

let sunY = 200; // Initial vertical position of the sun
let sunSpeed = 0.2; // Speed of vertical movement
let clouds = []; // Array to store cloud positions

function draw() {
  // Sky color
  background(255, 165, 0);
  textSize(20) ;
  textFont("Georgia");
  textStyle (ITALIC);
  textAlign(CENTER)
  text("click to add clouds", 90,40)

  // Sun movement
  sunY += sunSpeed;
  if (sunY > 300 || sunY < 100) sunSpeed *= -1; // Reverse direction

  // Draw Sun
  fill(255, 204, 0);
  noStroke();
  ellipse(200, sunY, 100, 100);

  // Draw clouds 
  fill(255, 255, 255, 200);
  noStroke();
  for (let cloud of clouds) {
    ellipse(cloud.x, cloud.y, 50, 30); 
  }

  // Mountains
  fill(50, 50, 50);
  triangle(0, 400, 100, 100, 350, 450);
  triangle(50, 400, 300, 150, 400, 400);

  // Ground
  fill(34, 139, 34);
  rect(0, 320, 400, 80);
}

// Mouse pressed event to add clouds at mouse position
function mousePressed() {
  clouds.push({ x: mouseX, y: mouseY });
}


