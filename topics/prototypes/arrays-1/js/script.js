/**
 * To infinity loops
 * Nicola Fournier
 * 
 * How far can you go on this rocket ship?
 */

//Let's try to make a rocket with asteroids
"use strict"
let smokes = [];

let rocket = {
    x: 200,
    y: 550,
    fill: 100,
    size: 70,
    velocity: {
        x: 0,
        y: 0,
    }


}
function setup() {
    createCanvas(400, 600);
}

function createSmoke() {
    const newSmoke = {
        x: rocket.x,
        y: rocket.y,
        size: 30,
        fill: 255,
        velocity: {
            x: random(-0.8, 0.8),
            y: 15,
        }
    };
    return newSmoke;
}

function draw() {
    background(220);

    const smoke = createSmoke();
    smokes.push(smoke);
    if (smokes.length >= 100) {
        smokes.shift();

    }
    for (let smoke of smokes) {
        moveSmoke(smoke);
        drawSmoke(smoke);
    }
    moveRocket();
    drawRocket();

}

function moveSmoke(smoke) {
    smoke.x += smoke.velocity.x
    smoke.y += smoke.velocity.y
    smoke.velocity.y *= 0.98
    smoke.size += smoke.velocity.y / 10
    const d = dist(smoke.x, smoke.y, rocket.x, rocket.y)
    smoke.fill = map(d, 0, 400, 100, 0, true)
}

function drawSmoke(smoke) {
    push();
    noStroke();
    colorMode(HSB);
    fill(10, smoke.fill, 100);
    ellipse(smoke.x, smoke.y, smoke.size)
    pop();
}

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
    //allow it to jump once after touching a platform
    if (keyIsDown(UP_ARROW)) {
        rocket.velocity.y += -0.2
    }
    if (keyIsDown(DOWN_ARROW)) {
        rocket.velocity.y += 0.2
    }

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

function drawRocket() {
    push();
    ellipse(rocket.x, rocket.y, rocket.size);
    pop();
}