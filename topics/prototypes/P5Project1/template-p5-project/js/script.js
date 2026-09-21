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
    //Make upper teeths roots appear
    triangle(40, 80, 170, 30, 200, 55)
    triangle(30, 80, 80, 30, 100, 65)
    triangle(-50, 100, 50, 30, 70, 70)
    triangle(70, 70, 100, 30, 150, 60)
    triangle(360, 80, 230, 30, 200, 55)
    triangle(370, 80, 320, 30, 300, 65)
    triangle(450, 100, 350, 30, 330, 70)
    triangle(330, 70, 300, 30, 250, 60)
    //Make an upper teeth row
    triangle(40, 80, 170, 140, 200, 55)
    triangle(30, 80, 80, 160, 100, 65)
    triangle(-50, 100, 50, 180, 70, 70)
    triangle(70, 70, 100, 180, 150, 60)
    triangle(360, 80, 230, 140, 200, 55)
    triangle(370, 80, 320, 160, 300, 65)
    triangle(450, 100, 350, 180, 330, 70)
    triangle(330, 70, 300, 180, 250, 60)
}