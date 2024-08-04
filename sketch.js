let x;
let y;

let xspeed;
let yspeed;

let diameter = 200; // Diameter of the circle
let bodyColor;
let furColor;

let mercuryAngle = 0;
let venusAngle = 0;
let earthAngle = 0;
let marsAngle = 0;
let jupitarAngle = 0;
let saturnAngle = 0;
let uranusAngle = 0;
let neptuneAngle = 0;
let plutoAngle = 0;

function pickColors() {
  bodyColor = color(random(100, 256), random(100, 256), random(100, 256));
  furColor = color(random(100, 256), random(100, 256), random(100, 256));
}

function setup() {
  createCanvas(800, 800);
  x = random(width);
  y = random(height);
  xspeed = 5;
  yspeed = 5;
  pickColors();
}

function draw() {
  drawBackground();
  
  // Draw the monster
  drawMonster();
  
  // Update position
  x += xspeed;
  y += yspeed;

  // Check for collision with edges
  if (x + diameter / 2 >= width) {
    xspeed = -xspeed;
    x = width - diameter / 2;
    pickColors();
  } else if (x - diameter / 2 <= 0) {
    xspeed = -xspeed;
    x = diameter / 2;
    pickColors();
  }

  if (y + diameter / 2 >= height) {
    yspeed = -yspeed;
    y = height - diameter / 2;
    pickColors();
  } else if (y - diameter / 2 <= 0) {
    yspeed = -yspeed;
    y = diameter / 2;
    pickColors();
  }
}

function drawMonster() {
  // Draw the monster body
  fill(bodyColor);
  ellipse(x, y, diameter);
  
  // Draw the monster eyes
  fill(255); // White color for the eye
  ellipse(x, y - diameter / 4, diameter / 3);
  
  fill(0); // Black color for the pupil
  ellipse(x, y - diameter / 4, diameter / 6);
  
  // Draw the monster ears
  fill(bodyColor);
  ellipse(x - diameter / 2, y - diameter / 2, diameter / 2, diameter / 1.5);
  ellipse(x + diameter / 2, y - diameter / 2, diameter / 2, diameter / 1.5);

  // Draw the monster eyes in ears
  fill(255); // White color for the eye
  ellipse(x - diameter / 2, y - diameter / 2, diameter / 3);
  fill(0); // Black color for the pupil
  ellipse(x - diameter / 2, y - diameter / 2, diameter / 6);

  fill(255); // White color for the eye
  ellipse(x + diameter / 2, y - diameter / 2, diameter / 3);
  fill(0); // Black color for the pupil
  ellipse(x + diameter / 2, y - diameter / 2, diameter / 6);

  // Draw monster teeth
  fill(255); // White color for the teeth
  for (let i = -3; i <= 1; i++) {
    triangle(x - diameter / 4 + i * 30+75, y + diameter / 4-40,
             x - diameter / 4 + i * 30 + 85, y + diameter / 4 + 30-40,
             x - diameter / 4 + i * 30 +65, y + diameter / 4 + 30-40);
  }

  // Draw monster spikes
  stroke(furColor);
  strokeWeight(5);
  for (let i = 0; i < 20; i++) {
    let sx = x + (random() - 0.5) * diameter;
    let sy = y + (random() - 0.5) * diameter;
    line(sx, sy, sx + (random() - 0.5) * 40, sy + (random() - 0.5) * 40);
  }

  // Draw the monster fur
  stroke(furColor);
  strokeWeight(3);
  for (let i = 0; i < 100; i++) {
    let fx = x + (random() - 0.5) * diameter;
    let fy = y + (random() - 0.5) * diameter;
    line(fx, fy, fx + (random() - 0.5) * 30, fy + (random() - 0.5) * 30);
  }
}

function drawBackground() {
  background(15);

  let screenX = width / 2;
  let screenY = height / 2;
  let ringColor = color(255);

  // Sun
  let sunColor = color(242, 161, 19);
  smooth();
  fill(sunColor);
  noStroke();
  circle(screenX, screenY, 100);

  // Ring
  let ringRadius = 100;
  noFill();
  stroke(ringColor);
  strokeWeight(4);
  circle(screenX, screenY, ringRadius * 2);

  // Mercury
  let mercuryColor = color(87, 85, 81);
  let mercuryX = screenX + ringRadius * cos(mercuryAngle);
  let mercuryY = screenY + ringRadius * sin(mercuryAngle);

  // Draw Mercury
  stroke(mercuryColor);
  fill(mercuryColor);
  circle(mercuryX, mercuryY, 20);

  // Ring2
  let ringRadius2 = 130;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius2 * 2);

  // Venus
  let venusColor = color(130, 108, 64);
  let venusX = screenX + ringRadius2 * cos(venusAngle);
  let venusY = screenY + ringRadius2 * sin(venusAngle);
  stroke(venusColor);
  fill(venusColor);
  circle(venusX, venusY, 20);

  // Ring3
  let ringRadius3 = 160;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius3 * 2);

  // Earth
  let earthColor = color(51, 76, 166);
  let earthX = screenX + ringRadius3 * cos(earthAngle);
  let earthY = screenY + ringRadius3 * sin(earthAngle);
  stroke(earthColor);
  fill(earthColor);
  circle(earthX, earthY, 20);

  // Ring4
  let ringRadius4 = 190;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius4 * 2);

  // Mars
  let marColor = color(163, 78, 39);
  stroke(marColor);
  fill(marColor);
  let marsX = screenX + ringRadius4 * cos(marsAngle);
  let marsY = screenY + ringRadius4 * sin(marsAngle);
  circle(marsX, marsY, 20);

  // Ring5
  let ringRadius5 = 220;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius5 * 2);

  // Jupiter
  let jupitarX = screenX + ringRadius5 * cos(jupitarAngle);
  let jupitarY = screenY + ringRadius5 * sin(jupitarAngle);
  let jupitarColor = color(161, 95, 34);
  noStroke();
  fill(jupitarColor);
  circle(jupitarX, jupitarY, 20);

  // Ring6
  let ringRadius6 = 250;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius6 * 2);

  // Saturn
  let saturnX = screenX + ringRadius6 * cos(saturnAngle);
  let saturnY = screenY + ringRadius6 * sin(saturnAngle);
  let saturnColor = color(130, 93, 23);
  noStroke();
  fill(saturnColor);
  circle(saturnX, saturnY, 20);

  // Ring7
  let ringRadius7 = 280;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius7 * 2);

  // Uranus
  let uranusColor = color(23, 91, 130);
  let uranusX = screenX + ringRadius7 * cos(uranusAngle);
  let uranusY = screenY + ringRadius7 * sin(uranusAngle);
  noStroke();
  fill(uranusColor);
  circle(uranusX, uranusY, 20);

  // Ring8
  let ringRadius8 = 310;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius8 * 2);

  // Neptune
  let neptuneX = screenX + ringRadius8 * cos(neptuneAngle);
  let neptuneY = screenY + ringRadius8 * sin(neptuneAngle);
  let neptuneColor = color(35, 84, 176);
  noStroke();
  fill(neptuneColor);
  circle(neptuneX, neptuneY, 20);

  // Ring9
  let ringRadius9 = 340;
  noFill();
  stroke(ringColor);
  circle(screenX, screenY, ringRadius9 * 2);

  // Pluto
  let plutoX = screenX + ringRadius9 * cos(plutoAngle);
  let plutoY = screenY + ringRadius9 * sin(plutoAngle);
  let plutoColor = color(26, 165, 196);
  noStroke();
  fill(plutoColor);
  circle(plutoX, plutoY, 20);

  // Update planet angles
  mercuryAngle += 0.029;
  venusAngle += 0.016;
  earthAngle += 0.019;
  marsAngle += 0.0114;
  jupitarAngle += 0.0112;
  saturnAngle += 0.012;
  uranusAngle += 0.012;
  neptuneAngle += 0.013;
  plutoAngle += 0.012;
}
