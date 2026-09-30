/**
 * AbsORBing
 * Nicola Fournier
 * 
 * A crystal ball that absorbs and releases surrounding energy
 */

"use strict";
// make a crystal ball
let crystal = {
    x: 200,
    y: 200,
    size: 80,
}


function setup() {
    createCanvas(400, 400);


}

function draw() {
    //set a rng
    let r = random(0.1, 2);
    //remap the values for the background to creat a reverse effect
    let x = map(mouseX, 0, 400, 400, 0)
    let y = map(mouseY, 0, 400, 400, 0)
    background(x * r / 4, x / 2, y / 2);
    drawCrystal()


    function drawCrystal() {
        push()
        //make the crystal's color dependent on the rng and the mouse position
        stroke(mouseX * r / 2, mouseX / 2, mouseY / 2);
        strokeWeight(10);
        fill(mouseX * r, mouseX, mouseY);
        ellipse(crystal.x, crystal.y, crystal.size);
    }

}
