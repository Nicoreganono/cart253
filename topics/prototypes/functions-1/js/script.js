/**
 * Sticky Orbs
 * Nicola Fournier
 * 
 * A collection of small orbs orbiting the cursor, sticking and bouncing off the walls wildly.
 */

"use strict";

//Make an orb
let orb1 = {
    x: 200,
    y: 100,
    size: 20,
    //make it's speed variable
    a: 0.005,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "red",


}
//make MORE
let orb2 = {
    x: 170,
    y: 150,
    size: 20,
    //make it's speed variable
    a: 0.0055,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "orange",
}
let orb3 = {
    x: 150,
    y: 200,
    size: 20,
    //make it's speed variable
    a: 0.0045,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "yellow",
}
let orb4 = {
    x: 160,
    y: 250,
    size: 20,
    //make it's speed variable
    a: 0.0065,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "green",
}
let orb5 = {
    x: 240,
    y: 250,
    size: 20,
    //make it's speed variable
    a: 0.006,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "indigo",
}
let orb6 = {
    x: 250,
    y: 200,
    size: 20,
    //make it's speed variable
    a: 0.0035,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "cyan",
}
let orb7 = {
    x: 230,
    y: 150,
    size: 20,
    //make it's speed variable
    a: 0.004,
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "purple",
}


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    //make the orb happen
    drawOrb(orb1.x, orb1.y, orb1.fill);
    //make the string happen
    drawString(orb1.x, orb1.y, orb1.fill);
    //do it all again
    drawOrb(orb2.x, orb2.y, orb2.fill);
    drawString(orb2.x, orb2.y, orb2.fill);
    drawOrb(orb3.x, orb3.y, orb3.fill);
    drawString(orb3.x, orb3.y, orb3.fill);
    drawOrb(orb4.x, orb4.y, orb4.fill);
    drawString(orb4.x, orb4.y, orb4.fill);
    drawOrb(orb5.x, orb5.y, orb5.fill);
    drawString(orb5.x, orb5.y, orb5.fill);
    drawOrb(orb6.x, orb6.y, orb6.fill);
    drawString(orb6.x, orb6.y, orb6.fill);
    drawOrb(orb7.x, orb7.y, orb7.fill);
    drawString(orb7.x, orb7.y, orb7.fill);
    //make them move!
    orbMove(orb1, orb1.a)
    orbMove(orb2, orb2.a)
    orbMove(orb3, orb3.a)
    orbMove(orb4, orb4.a)
    orbMove(orb5, orb5.a)
    orbMove(orb6, orb6.a)
    orbMove(orb7, orb7.a)

}
//make ONE function using parameters to reduce the sheer amount of functions to make for orbs
function drawOrb(x, y, orbFill) {
    push();
    noStroke();
    fill(orbFill);
    ellipse(x, y, 20)
    pop();
}
//make ONE function using parameters to reduce the sheer amount of functions to make for strings
function drawString(x, y, orbFill) {
    push();
    //the string is the same color as the ball
    stroke(orbFill);
    //the string is between the mouse and the ball
    line(x, y, mouseX, mouseY);
    pop();
}
//make a FUNCTION that determines how the orbs behaves
//give it parameters to repeat it for each orb
function orbMove(orb, orba) {
    //make the orb go faster towards the mouse the further it is from it
    orb.velocity.x += (pmouseX - orb.x) * orba;
    orb.velocity.y += (pmouseY - orb.y) * orba;
    //make that velocity influence the orbs position
    orb.x += orb.velocity.x
    orb.y += orb.velocity.y
    //constrain that orb to the canvas by reversing its velocity
    if (orb.x > 400) {
        orb.x = 399
        orb.velocity.x = orb.velocity.x * -0.8
    }
    if (orb.x < 0) {
        orb.x = 1
        orb.velocity.x = orb.velocity.x * -0.8
    }
    if (orb.y > 400) {
        orb.y = 399
        orb.velocity.y = orb.velocity.y * -0.8
    }
    if (orb.y < 0) {
        orb.y = 1
        orb.velocity.y = orb.velocity.y * -0.8
    }
}