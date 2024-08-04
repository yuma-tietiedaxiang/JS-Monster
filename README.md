# COMP1720/6720 assignment 1

https://comp.anu.edu.au/courses/comp1720/assessments/monster/


function setup() {
  // create the canvas (800px wide, 800px high)
  createCanvas(800, 800);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);
}

function draw() {
  // your cool monster code goes in this draw function
  
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "monster.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("monster.png");
  }
}
