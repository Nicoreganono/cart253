/**
 * The violence
 * Nicola Fournier
 * 
 * How far can you go on this rocket ship?
 */

//Let's try to make a rocket with asteroids
"use strict"
let lights = [];
let smokes = [];
let cigarette = {
    x: 220,
    y: 240,
    fill: 100,
    h: 20,
    l: 300,

}
function setup() {
    createCanvas(400, 400);
}


function createSmoke() {
    const newSmoke = {
        x: cigarette.x - 15,
        y: cigarette.y + 15,
        size: 30,
        fill: 225,
        velocity: {
            x: random(-10, 10),
            y: -5,
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

    drawCigarette();

}

function moveSmoke(smoke) {
    smoke.x += smoke.velocity.x
    if (smoke.x < cigarette.x) {
        smoke.velocity.x += 0.8
    } else if (smoke.x > cigarette.x) {
        smoke.velocity.x -= 0.8
    }
    smoke.y += smoke.velocity.y
    smoke.velocity.y *= 0.98
    smoke.size += smoke.velocity.y / 10
    const d = dist(cigarette.x, cigarette.y, smoke.x, smoke.y)
    smoke.fill = map(d, 0, 300, 50, 100, true)
}

function drawSmoke(smoke) {
    push();
    noStroke();
    colorMode(HSB);
    fill(10, 0, smoke.fill);
    ellipse(smoke.x, smoke.y, smoke.size)
    pop();
}

function drawCigarette() {
    push();
    fill(cigarette.fill);
    rotate(0.1);
    rect(cigarette.x, cigarette.y, cigarette.l, cigarette.h);
    fill("red");
    rect(cigarette.x, cigarette.y, 20, cigarette.h)
    pop();

}