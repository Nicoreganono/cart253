/**
 * Git Workflow Example
 * Pippin Barr
 * 
 * Some sample code for playing with version control.
 * Draws a pyramid in the centre of the canvas and a
 * red circle at the user's mouse position.
 */

"use strict";

/**
 * Create a canvas, hides the cursor
*/
function setup() {
    // A 640x480 canvas
    createCanvas(1280, 720);

    // Don't show the cursor
    noCursor();
}

/**
 * Draws a top-down view of a pyramid and also a red circle
 * at the position of the user's cursor
*/
function draw() {
    // Make the background black (specified as RGB)
    background(20, 140, 120);

    // Draw a pyramid
    // How many levels for the pyramid
    const levels = 80;
    // Loop through every level (backwards)
    for (let level = levels; level > 25; level--) {
        // Draw this layer
        push();
        // Set the grey shade of the level based on its number
        // e.g. level 1 will get a shade of 10 (dark gray), 
        // level 10 will be 255(white)
        const shade1 = map(level, 20, levels, 10, 20);
        const shade2 = map(level, 35, levels, 60, 140);
        const shade3 = map(level, 35, levels, 60, 120);
        // No line around the levels
        noStroke();
        // Set the fill colour to our shade (RGB)
        fill(shade1, shade2, shade3);
        // Draw rectangles from the centre
        rectMode(CENTER);
        // Draw the rectangle in the centre of the canvas
        // (320, 320) with a size based on the level
        // e.g. level 1 will be a 48x48 rectangle and
        // level 10 will be a 480x480 rectangle
        rect(640, 360, level * 14, level * 8);
        pop();
    }

    // Draw a red circle at the position of the mouse
    push();
    // No line around the shape
    noStroke();
    // Make it red (RGB)
    fill(0, 0, 0);
    // Draw a 100x100 circle at the mouse position
    rect(630, 380, 20, 40);
    pop();
        // Draw a red circle at the position of the mouse
    push();
    // No line around the shape
    noStroke();
    // Make it red (RGB)
    fill(0, 0, 0);
    // Draw a 100x100 circle at the mouse position
    ellipse(640, 360, 40, 50);
    pop();
}

