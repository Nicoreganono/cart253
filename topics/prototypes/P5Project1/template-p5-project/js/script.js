/**
 * Voideater
 * Nicola Fournier
 * 
 * This is project 1 of 3 of p5 script manipulation.
 */

"use strict";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    //Dark background
    background(30, 20, 50);
    //Make a sharp lower teeth row
    fill("white")
    triangle(-100, 400, 130, 340, 200, 400)
    triangle(0, 400, 70, 310, 80, 400)
    triangle(50, 400, 85, 300, 140, 400)
    triangle(-100, 400, 20, 300, 50, 400)
    triangle(500, 400, 270, 340, 200, 400)
    triangle(400, 400, 330, 310, 320, 400)
    triangle(350, 400, 315, 300, 260, 400)
    triangle(500, 400, 380, 300, 350, 400)

}
