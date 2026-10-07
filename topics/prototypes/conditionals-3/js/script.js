/**
 * One hundred steps
 * Nico
 * 
 * Walking down a long hallway... how long?
 */

"use strict"
//make a glass pane in perspective
let glass = {
    x1: 180,
    x2: 180,
    x3: 170,
    x4: 170,
    y1: 170,
    y2: 230,
    y3: 250,
    y4: 150,


}
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    drawGlass();
    //make yourself move further in by clicking
    if (mouseIsPressed) {
        glass.x1 = glass.x1 - 1,
            glass.x2 = glass.x2 - 1,
            glass.x3 = glass.x3 - 2,
            glass.x4 = glass.x4 - 2,
            glass.y1 = glass.y1 - 0.75,
            glass.y2 = glass.y2 + 0.75,
            glass.y3 = glass.y3 + 1.5,
            glass.y4 = glass.y4 - 1.5
    }
    else {
        glass.x1 = glass.x1
        glass.x2 = glass.x2
        glass.x3 = glass.x3
        glass.x4 = glass.x4
        glass.y1 = glass.y1
        glass.y2 = glass.y2
        glass.y3 = glass.y3
        glass.y4 = glass.y4
    }
    //make the glass panes repeat
    if (glass.x1 === 0) {
        glass.x1 = 180,
            glass.x2 = 180,
            glass.x3 = 170,
            glass.x4 = 170,
            glass.y1 = 170,
            glass.y2 = 230,
            glass.y3 = 250,
            glass.y4 = 150
    }
}

function drawGlass() {
    push();
    fill(255)
    quad(glass.x1, glass.y1, glass.x2, glass.y2, glass.x3, glass.y3, glass.x4, glass.y4);
    pop();

}