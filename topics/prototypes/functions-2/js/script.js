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
let orangecolor = {
    x: 100,
    y: 500,
    s: 20,
    fill: "orange",
}
let yellowcolor = {
    x: 150,
    y: 500,
    s: 20,
    fill: "yellow",
}
let greencolor = {
    x: 200,
    y: 500,
    s: 20,
    fill: "green",
}
let bluecolor = {
    x: 250,
    y: 500,
    s: 20,
    fill: "blue",
}
let pinkcolor = {
    x: 300,
    y: 500,
    s: 20,
    fill: "pink",
}
let blackcolor = {
    x: 350,
    y: 500,
    s: 20,
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
    let dr = createDist(redcolor);
    let dor = createDist(orangecolor);
    let dy = createDist(yellowcolor);
    let dg = createDist(greencolor);
    let db = createDist(bluecolor);
    let dp = createDist(pinkcolor);
    let dbla = createDist(blackcolor);
    //turn the colors into color pickers
    overlap(dr, redcolor);
    overlap(dor, orangecolor);
    overlap(dy, yellowcolor);
    overlap(dg, greencolor);
    overlap(db, bluecolor);
    overlap(dp, pinkcolor);
    overlap(dbla, blackcolor);
    //make the color pickers appear with parameters
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
//Use parameters to create the color pallette
function drawColor(colour) {
    push();
    stroke("black")
    strokeWeight(3)
    fill(colour.fill);
    ellipse(colour.x, 500, 20);
    pop();
}
//make the stroke of pain appear
function drawPaint() {
    stroke(paint.fill)
    strokeWeight(10)
    line(paint.x1, paint.y1, paint.x2, paint.y2);

}
//make different dist values by returning them
function createDist(colour) {
    return dist(paint.x2, paint.y2, colour.x, colour.y)
}
//make an overlap function with parameters
function overlap(d, colour) {
    if (d < 20 / 2) {
        paint.fill = colour.fill
    }
}