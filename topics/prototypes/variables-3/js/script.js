/**
 * Meaningless Universe
 * Nicola Fournier
 * 
 * A solar system that rapidly accelerate as time moves faster (MEANT TO BE WATCHED ALONGSIDE "NO TIME FOR CAUTION" FROM THE INTERSTELLAR OST)
 */

"use strict";
//create a star that eventually lights up
let eclipse = {
    x: 0,
    y: 0,
    s: 35,
    fill: (0, 0, 0),
}

function setup() {
    createCanvas(400, 400);

}

function draw() {
    //make the gradually darker color variable
    let b = color((-frameCount + 11000) / 10, (-frameCount + 11000) / 10, (-frameCount + 11000) / 10)
    //make space darken after a certain amount of frames
    if (frameCount > 10000) {

        background(b)

    } else if (frameCount < 10000) {
        background(100);
    }

    //make the gradually lighter color variable
    let e = color((frameCount - 200) / 4, (frameCount - 100) / 8, (frameCount - 200) / 60)
    //make the sun light up after a certain amount of frames
    if (frameCount > 200) {

        eclipse.fill = (e);

    } else if (frameCount < 200) {
        eclipse.fill = "black"
    }
    // set the origin at the center of the canvas
    translate(200, 200)
    //make orbiting planets that accelerate
    let angle = ((frameCount * frameCount * frameCount * frameCount * 0.0000000000075) / 2)
    rotate(angle / 10)
    ellipse(40, 20, 20)
    rotate(angle / 20)
    ellipse(-60, 40, 22)
    rotate(angle / 30)
    ellipse(80, -60, 24)
    rotate(angle / 40)
    ellipse(-100, -80, 24)
    rotate(angle / 50)
    ellipse(120, 100, 24)
    //make the star
    drawEclipse();
}

function drawEclipse() {
    push();
    noStroke();
    fill(eclipse.fill);
    ellipse(eclipse.x, eclipse.y, eclipse.s);
    pop();

}