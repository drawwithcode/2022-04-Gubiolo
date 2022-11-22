
//Declare starting size of the brush
let brush = 2;
//Declare starting color value RGB
let R = 100;
let G = 100;
let B = 100;

let textcolor = "black";
let size = 17;
//declare mic
let mic;
//declare html elements
let containerdiv, containerh3, containerimg, containerp;
//delcare canvas : I declare canvas following a reddit post to fix the iphone problems (but doesn't work)
let cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  //call function to set Audioinput
  cnv.mousePressed(Audio);
  background("white");
  rectMode(CENTER);
  //String find on the reddit post
  //getAudioContext().suspend();

  //Create HTML elements
  containerdiv = createElement("div");
  containerh3 = createElement("h3");
  containerp = createElement("p");
  containerimg = createElement("img");
//Add class to HTML elements
  containerdiv.addClass("Iniziodiv")
  containerh3.addClass("Inizioh3")
  containerp.addClass("Iniziop")
  containerimg.addClass("Inizioimg")
//Create hierarchy
  containerdiv.child(containerh3); 
  containerdiv.child(containerp);
  containerdiv.child(containerimg);
//Fill the elements
  containerh3.html("Cry Baby Cry! Drawing App");
  containerp.html("This is a drawing app for whiny kids, cry to increase stroke size. Shake the device to start the experience!");
  containerimg.attribute("src", "./assets/iconRisorsa 1.svg")
 
  
  
  setShakeThreshold(50);
  textAlign(CENTER)
  textSize(size)
  //push();
  //noStroke();
  //fill(textcolor);


}


function draw() {
   
   //brush come volume mic
  if (mic) {
    const micLevel = mic.getLevel();
    brush = map(micLevel, 0, 1, 0, 300);
  
  } 
 
  noStroke();
  fill("red");
  //Instruction Box 
  rect(width / 2, height - 40, width, 80);
  
//If for two-finger tap set color
  if (touches.length == 2) {
       R = random(0, 256);
       G = random(0, 256);
       B = random(0, 256);
  }
  
  //box colore
  fill(R, G, B);
  rect(width - 40, height - 40, 80, 80);


//Instruction
  push();
  textAlign(LEFT);
  fill("white");
  text("Two-finger tap to set color", 40, height - 45)
  text("Shake to clean the canvas", 40, height - 20)
  pop();
  
   fill("white");
  circle(width - 40, height - 40, brush, brush);
    
  
 
}
//Brush
function mouseDragged() {

  stroke(R, G, B);
  strokeWeight(brush);
  line(mouseX, mouseY, pmouseX, pmouseY);
  // prevent default
  return false;
}
//Set Audio Function
function Audio() {
  userStartAudio();
  mic = new p5.AudioIn();
	mic.start();
}

//Delete pop up with the shake of the device
function deviceShaken() {

  containerdiv.addClass("delete")
  
  fill("white");
  rect(width / 2, height / 2, width, height)
 
  
  
}

//Windows Resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  push();
  fill("black")
  noStroke()
  text('Shake the device to start!', width / 2, height / 2)
  pop();
}

