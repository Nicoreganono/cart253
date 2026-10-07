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
}

function drawGlass() {
    push();
    fill(255)
    quad(glass.x1, glass.y1, glass.x2, glass.y2, glass.x3, glass.y3, glass.x4, glass.y4);
    pop();

}