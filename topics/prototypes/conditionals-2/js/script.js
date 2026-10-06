/**
 * Canvas of your heart
 * Nico
 * 
 * An empty canvas beckons your attention. Let your soul splatter itself.
 */

"use strict";
//make paint
let paint = {
    x1: undefined,
    x2: undefined,
    y1: undefined,
    y2: undefined,
    fill: "black",
}
//make different colors of paint
let redcolor = {
    x: 50,
    y: 500,
    s: 20,
    fill: "red",
}

let bluecolor = {
    x: 350,
    y: 500,
    s: 20,
    fill: "blue",
}

function setup() {
    createCanvas(400, 600);
    //make the background happen once
    background(220);

}

function draw() {
    //establish the paint's locations
    paint.x1 = pmouseX;
    paint.y1 = pmouseY;
    paint.x2 = mouseX;
    paint.y2 = mouseY;
    //establish distances for the different paint colors
    let dr = dist(paint.x2, paint.y2, redcolor.x, redcolor.y)
    let db = dist(paint.x2, paint.y2, bluecolor.x, bluecolor.y)
    //turn the colors into color pickers
    let overlapred = (dr < redcolor.s / 2);
    let overlapblue = (db < bluecolor.s / 2);
    if (overlapred) {
        paint.fill = redcolor.fill
    }
    if (overlapblue) {
        paint.fill = bluecolor.fill
    }
    drawRed();
    drawBlue();
    drawPaint();
}

function drawRed() {
    push();
    stroke("black")
    strokeWeight(3)
    fill(redcolor.fill);
    ellipse(redcolor.x, redcolor.y, redcolor.s);
    pop();
}

function drawBlue() {
    push();
    stroke("black")
    strokeWeight(3)
    fill(bluecolor.fill)
    ellipse(bluecolor.x, bluecolor.y, bluecolor.s)
    pop();
}
function drawPaint() {
    stroke(paint.fill)
    strokeWeight(10)
    line(paint.x1, paint.y1, paint.x2, paint.y2);

}