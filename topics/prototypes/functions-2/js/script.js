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
    fill: "red",
}
let orangecolor = {
    x: 100,
    y: 500,
    fill: "orange",
}
let yellowcolor = {
    x: 150,
    y: 500,
    fill: "yellow",
}
let greencolor = {
    x: 200,
    y: 500,
    fill: "green",
}
let bluecolor = {
    x: 250,
    y: 500,
    fill: "blue",
}
let pinkcolor = {
    x: 300,
    y: 500,
    fill: "pink",
}
let blackcolor = {
    x: 350,
    y: 500,
    fill: "black",
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
    let dor = dist(paint.x2, paint.y2, orangecolor.x, orangecolor.y)
    let dy = dist(paint.x2, paint.y2, yellowcolor.x, yellowcolor.y)
    let dg = dist(paint.x2, paint.y2, greencolor.x, greencolor.y)
    let db = dist(paint.x2, paint.y2, bluecolor.x, bluecolor.y)
    let dp = dist(paint.x2, paint.y2, pinkcolor.x, pinkcolor.y)
    let dbla = dist(paint.x2, paint.y2, blackcolor.x, blackcolor.y)
    //turn the colors into color pickers
    let overlapred = (dr < redcolor.s / 2);
    let overlaporange = (dor < orangecolor.s / 2);
    let overlapyellow = (dy < yellowcolor.s / 2);
    let overlapgreen = (dg < greencolor.s / 2);
    let overlapblue = (db < bluecolor.s / 2);
    let overlappink = (dp < pinkcolor.s / 2);
    let overlapblack = (dbla < blackcolor.s / 2);
    if (overlapred) {
        paint.fill = redcolor.fill
    }
    if (overlaporange) {
        paint.fill = orangecolor.fill
    }
    if (overlapyellow) {
        paint.fill = yellowcolor.fill
    }
    if (overlapgreen) {
        paint.fill = greencolor.fill
    }
    if (overlapblue) {
        paint.fill = bluecolor.fill
    }
    if (overlappink) {
        paint.fill = pinkcolor.fill
    }
    if (overlapblack) {
        paint.fill = blackcolor.fill
    }
    drawColor(redcolor);
    drawColor(orangecolor);
    drawColor(yellowcolor);
    drawColor(greencolor);
    drawColor(bluecolor);
    drawColor(pinkcolor);
    drawColor(blackcolor);
    //only paint when the mouse is pressed
    if (mouseIsPressed) {
        drawPaint();
    }
}

function drawColor(colour) {
    push();
    stroke("black")
    strokeWeight(3)
    fill(colour.fill);
    ellipse(colour.x, 500, 20);
    pop();
}

function drawPaint() {
    stroke(paint.fill)
    strokeWeight(10)
    line(paint.x1, paint.y1, paint.x2, paint.y2);

}