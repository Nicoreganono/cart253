/**
 * Sticky Orbs
 * Nicola Fournier
 * 
 * A collection of small orbs orbiting the cursor, sticking and bouncing off the walls wildly.
 */

"use strict";
// make a crystal ball
let crystal = {
    x: 200,
    y: 200,
    size: 80,
}


function setup() {
    createCanvas(400, 400);
    background(220);

}

function draw() {
    drawCrystal()

    //have the crystal's color change and flicker depending on the position of the cursor
    function drawCrystal() {
        push()
        let r = random(0.1, 2);
        stroke((mouseX * r, mouseX, mouseY) * 0.1)
        fill(mouseX * r, mouseX, mouseY)
        ellipse(crystal.x, crystal.y, crystal.size)
    }

}

