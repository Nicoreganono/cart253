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
let color1 = {
    x: 50,
    y: 500,
    fill: "red",
}
let color2 = {
    x: 100,
    y: 500,
    fill: "orange",
}
let color3 = {
    x: 150,
    y: 500,
    fill: "yellow",
}
let color4 = {
    x: 200,
    y: 500,
    fill: "green",
}
let color5 = {
    x: 250,
    y: 500,
    fill: "blue",
}
let color6 = {
    x: 300,
    y: 500,
    fill: "#ff007f",
}
let color7 = {
    x: 350,
    y: 500,
    fill: "black",
}
let color8 = {
    x: 75,
    y: 570,
    fill: "#E34234",
}
let color9 = {
    x: 125,
    y: 570,
    fill: "gold",
}
let color10 = {
    x: 175,
    y: 570,
    fill: "limegreen",
}
let color11 = {
    x: 225,
    y: 570,
    fill: "teal",
}
let color12 = {
    x: 275,
    y: 570,
    fill: "purple",
}
let color13 = {
    x: 325,
    y: 570,
    fill: "pink",
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
    //turn the colors into color pickers
    overlap(color1);
    overlap(color2);
    overlap(color3);
    overlap(color4);
    overlap(color5);
    overlap(color6);
    overlap(color7);
    overlap(color8);
    overlap(color9);
    overlap(color10);
    overlap(color11);
    overlap(color12);
    overlap(color13);
    //make the color pickers appear with parameters
    drawColor(color1);
    drawColor(color2);
    drawColor(color3);
    drawColor(color4);
    drawColor(color5);
    drawColor(color6);
    drawColor(color7);
    drawColor(color8);
    drawColor(color9);
    drawColor(color10);
    drawColor(color11);
    drawColor(color12);
    drawColor(color13);
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
    ellipse(colour.x, colour.y, 20);
    pop();
}
//make the stroke of pain appear
function drawPaint() {
    stroke(paint.fill)
    strokeWeight(10)
    line(paint.x1, paint.y1, paint.x2, paint.y2);
}
//make an overlap function with parameters
function overlap(colour) {
    //establish distances for the different paint colors
    let d = dist(paint.x2, paint.y2, colour.x, colour.y)
    if (d < 20 / 2) {
        paint.fill = colour.fill
    }
}