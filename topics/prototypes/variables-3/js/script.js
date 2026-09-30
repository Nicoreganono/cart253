/**
 * Sticky Orbs
 * Nicola Fournier
 * 
 * A collection of small orbs orbiting the cursor, sticking and bouncing off the walls wildly.
 */

"use strict";
//create a star that eventually lights up
let eclipse = {
    x: 0,
    y: 0,
    s: 35,
    fill: "black",

}
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);

    if (frameCount > 100) {

        eclipse.fill = "orange";

    } else if (frameCount < 100) {
        eclipse.fill = "black"
    }
    //make the origin centered to the canvas
    translate(200, 200)
    //make orbiting planets
    let angle = (frameCount * frameCount * frameCount * frameCount * 0.0000000001)
    rotate(angle / 10)
    ellipse(40, 20, 20)
    rotate(angle / 20)
    ellipse(-60, 40, 22)
    rotate(angle / 30)
    ellipse(80, -60, 24)
    rotate(angle / 40)
    ellipse(-100, -80, 24)
    rotate(angle / 50)
    ellipse(120, 100, 24)
    //make the star
    drawEclipse();
}

function drawEclipse() {
    push();
    noStroke();
    fill(eclipse.fill);
    ellipse(eclipse.x, eclipse.y, eclipse.s);
    pop();

}