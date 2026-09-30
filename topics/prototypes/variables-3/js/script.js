/**
 * Sticky Orbs
 * Nicola Fournier
 * 
 * A collection of small orbs orbiting the cursor, sticking and bouncing off the walls wildly.
 */

"use strict";
//create a sun that eventually lights up
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
    translate(200, 200)
    drawEclipse();
}

function drawEclipse() {
    push();
    noStroke();
    fill(eclipse.fill);
    ellipse(eclipse.x, eclipse.y, eclipse.s);
    pop();

}