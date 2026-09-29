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
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "red",


}


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    //make the orb go faster towards the mouse the further it is from it
    orb1.velocity.x += (pmouseX - orb1.x) * 0.005;
    orb1.velocity.y += (pmouseY - orb1.y) * 0.005;

    orb1.x += orb1.velocity.x
    orb1.y += orb1.velocity.y
    //constrain the orbs to the canvas
    let orb1x = constrain(orb1.x, 0, 400)
    let orb1y = constrain(orb1.y, 0, 400)

    //make it happen
    drawOrb1();

    function drawOrb1() {
        push();
        noStroke();
        fill(orb1.fill);
        ellipse(orb1x, orb1y, orb1.size)
        pop();

    }

}