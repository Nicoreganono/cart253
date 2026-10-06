/**
 * Do not get bit
 * Nico
 * 
 * The shark is coming for you, and he's very hungry.
 */

"use strict";
//establish a dangerous (more stereotypically than normal) underwater predator
let shark = {
    x: 700,
    y: 360,
    sx: 80,
    sy: 40,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "#0a1432"

}

function setup() {
    createCanvas(800, 400);
}

function draw() {

    background("skyblue");
    //make the shark follow the cursor
    shark.velocity.x += (mouseX - shark.x) / 100
    shark.velocity.y += (mouseY - shark.y) / 100
    //make it follow harder when at the right of the canvas
    if (mouseX > 400) {
        shark.velocity.x += (mouseX - shark.x) / 80
        shark.velocity.y += (mouseY - shark.y) / 80
    }
    shark.x += shark.velocity.x
    shark.y += shark.velocity.y
    //make the shark appear
    drawShark();
}

function drawShark() {
    fill(shark.fill)
    ellipse(shark.x, shark.y, shark.sx, shark.sy)

}