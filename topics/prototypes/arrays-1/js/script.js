/**
 * To infinity loops
 * Nicola Fournier
 * 
 * How far can you go on this rocket ship?
 */

//Let's try to make a rocket with asteroids
"use strict"
//create an array for smoke particles
let smokes = [];
//create a rocket from where the smoke emmanates
let rocket = {
    x: 200,
    y: 550,
    fill: 100,
    size: 70,
    //make its speed variable
    velocity: {
        x: 0,
        y: 0,
    }


}
function setup() {
    createCanvas(400, 600);
}
//make a function to create smoke to be part of the smokes array
function createSmoke() {
    const newSmoke = {
        //make it stem from the rocket itself
        x: rocket.x,
        y: rocket.y,
        size: 30,
        fill: 255,
        //make the smokes speed variable
        velocity: {
            x: random(-0.8, 0.8),
            y: 15,
        }
    };
    return newSmoke;
}

function draw() {
    background(220);
    //make the code continuously push out more smoke
    const smoke = createSmoke();
    smokes.push(smoke);
    //limit the amount of smoke particles
    if (smokes.length >= 100) {
        smokes.shift();

    }
    //establish the loop
    for (let smoke of smokes) {
        moveSmoke(smoke);
        drawSmoke(smoke);
    }
    //let the rocket be and let it move
    moveRocket();
    drawRocket();

}
//make the smoke simulate rocket smoke exhaust
function moveSmoke(smoke) {
    smoke.x += smoke.velocity.x
    smoke.y += smoke.velocity.y
    smoke.velocity.y *= 0.98
    smoke.size += smoke.velocity.y / 10
    const d = dist(smoke.x, smoke.y, rocket.x, rocket.y)
    //make the fill value as to create a gradient
    smoke.fill = map(d, 0, 400, 100, 0, true)
}
//make the smoke be able to apear
function drawSmoke(smoke) {
    push();
    noStroke();
    colorMode(HSB);
    fill(10, smoke.fill, 100);
    ellipse(smoke.x, smoke.y, smoke.size)
    pop();
}
//make the rocket controllable from the arrow keys
function moveRocket() {
    rocket.y += rocket.velocity.y
    rocket.x += rocket.velocity.x
    rocket.velocity.x *= 0.975
    rocket.velocity.y *= 0.975
    if (keyIsDown(LEFT_ARROW)) {
        rocket.velocity.x += -0.2
    }
    if (keyIsDown(RIGHT_ARROW)) {
        rocket.velocity.x += 0.2
    }
    if (keyIsDown(UP_ARROW)) {
        rocket.velocity.y += -0.2
    }
    if (keyIsDown(DOWN_ARROW)) {
        rocket.velocity.y += 0.2
    }
    //constrain it to the canvas
    if (rocket.x >= width) {
        rocket.velocity.x = 0;
        rocket.x = width - 1;
    }
    if (rocket.x <= 0) {
        rocket.velocity.x = 0;
        rocket.x = 1;
    }
    if (rocket.y > height) {
        rocket.velocity.y = 0;
        rocket.y = height - 1
    }
    if (rocket.y < 0) {
        rocket.velocity.y = 0;
        rocket.y = 1;
    }
}
//allow the rocket to appear
function drawRocket() {
    push();
    ellipse(rocket.x, rocket.y, rocket.size);
    pop();
}