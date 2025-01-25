var x=0;
var y=0;

function draw(){
    rect(x,y,10,10)
    x = x + 1;
    x = x % 550;
    y = y + 0;
    y = y % 500;

    rect(y,x,10,10)
    x = x + 1;
    x = x % 550;
    y = y + 0;
    y = y % 500;

}

function setup() {
    createCanvas(550, 250);
  
    background(200);
    
    // Create a p5.Image object.
    let img = createImage(515, 215);
  
    // Load the image's pixels into memory.
    img.loadPixels();
  
    // Create a color gradient.
    for (let x = 0; x < img.width; x += 1) {
      for (let y = 0; y < img.height; y += 1) {
        // Calculate the transparency.
        let a = map(x, 0, img.width, 0, 255);
  
        // Create a p5.Color object.
        let c = color(400, a);
  
        // Set the pixel's color.
        img.set(x, y, c);
      }
    }
  
    // Update the image's pixels.
    img.updatePixels();
  
    // Display the image.
    image(img, 17, 17);
  
    describe('A square with a horizontal color gradient that transitions from gray to black.');

  // Top line.
  textSize(16);
  textAlign(CENTER);
  text('COME BACK', 275, 75);
  

  // Middle line.
  textAlign(CENTER);
  text('FOR MORE', 275, 130);

  // Bottom line.
  textAlign(CENTER);
  text('INFORMATION SOON', 283, 190);

  describe('The words COME BACK displayed at top-center, FOR MORE at center-center, and INFORMATION SOON at bottom-center. A vertical line divides the canvas in half.');
  
  function draw(){
    background('#d2b9e6');
    rect(x,y,10,10)
    x = x + 1;
    x = x % 500;
    y = y + 1;
    y = y % 400;
}

}
