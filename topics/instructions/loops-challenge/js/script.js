/**
 * Lines and more lines
 * Nicola Fournier
 * 
 * A series of lines across the canvas!
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    for(let x = 0; x <= width; x += 20){
        push();
        strokeWeight(20);
        colorMode(HSB);
        stroke(x/10);
        line(x,0,x,height);
        pop();
    }
    
    let x = 0
    let s = 0
while (x <= width){

    x += 50;
    s += 25;
    stroke(s);
    line(x, 0, x, height);
    line(0, x, width, x);

}
}