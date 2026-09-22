/**
 * RoidRage
 * Nicola Fournier
 * 
 * He is VERY ANGRY and the birds make him INCREDIBLY ANGRY
 */

"use strict";


// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}


/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  mrFurious.fill.r = mrFurious.fill.r + 1
mrFurious.fill.g = mrFurious.fill.g - 0.5
mrFurious.fill.b = mrFurious.fill.b - 0.5
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}