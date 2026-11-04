/**
 * Self violence
 * Nicola Fournier
 * 
 * Cigarettes ARE BAD for you
 */

//Let's try to simulate a cigarette
"use strict"
//make an array for smoke particles
let smokes = [];
//make a cigarette from which the smoke comes from
let cigarette = {
    x: 220,
    y: 240,
    fill: 200,
    h: 20,
    l: 300,

}
function setup() {
    createCanvas(400, 400,);
}

//make a function to create more smoke
function createSmoke() {
    const newSmoke = {
        x: cigarette.x - 15,
        y: cigarette.y + 15,
        size: 30,
        fill: 225,
        velocity: {
            //make it a sin function so it coils from the base
            x: -10 * sin(frameCount / 10),
            y: -3,
        }
    };
    return newSmoke;
}

function draw() {
    background(220);
    //have the smoke constantly be created
    const smoke = createSmoke();
    smokes.push(smoke);
    //make sure the smoke doesnt get out of hand
    if (smokes.length >= 100) {
        smokes.shift();

    }
    for (let smoke of smokes) {
        moveSmoke(smoke);
        drawSmoke(smoke);
    }
    //allow the cigarette to appear
    drawCigarette();

}
//establish the behaviour of the smoke
function moveSmoke(smoke) {
    smoke.x += smoke.velocity.x
    //make it zig zag as it rises
    if (smoke.x < cigarette.x) {
        smoke.velocity.x += 0.7
    } else if (smoke.x > cigarette.x) {
        smoke.velocity.x -= 0.7
    }
    //make it rise
    smoke.y += smoke.velocity.y
    smoke.velocity.y *= 1.01
    smoke.size += smoke.velocity.y / 10
    //make the smoke go lighter the further it is from the cigarette
    const d = dist(cigarette.x, cigarette.y, smoke.x, smoke.y)
    smoke.fill = map(d, 0, 300, 70, 100, true)
}
//make the smoke
function drawSmoke(smoke) {
    push();
    noStroke();
    colorMode(HSB);
    fill(10, 0, smoke.fill);
    ellipse(smoke.x, smoke.y, smoke.size);
    pop();
}
//make the cigarette
function drawCigarette() {
    push();
    fill(cigarette.fill);
    rotate(0.1);
    rect(cigarette.x, cigarette.y, cigarette.l, cigarette.h);
    fill("red");
    rect(cigarette.x, cigarette.y, 20, cigarette.h)
    pop();

}