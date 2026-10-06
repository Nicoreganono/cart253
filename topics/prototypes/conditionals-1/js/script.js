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
    sx: 50,
    sy: 20,
    fill: "#0a1432"

}

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background("skyblue");
    //make the shark appear
    drawShark();
}

function drawShark() {
    fill(shark.fill)
    ellipse(shark.x, shark.y, shark.sx, shark.sy)


}