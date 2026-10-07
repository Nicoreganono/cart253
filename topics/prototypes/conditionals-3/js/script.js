/**
 * One hundred steps
 * Nico
 * 
 * Walking down a long hallway... how long?
 */

"use strict"
//make a glass pane in perspective
let glassl = {
    x1: 180,
    x2: 180,
    x3: 170,
    x4: 170,
    y1: 170,
    y2: 230,
    y3: 240,
    y4: 160,
}
//make another glass pane in perspective at a different position
let glassr = {
    x1: 310,
    x2: 310,
    x3: 400,
    x4: 400,
    y1: 112.5,
    y2: 297.5,
    y3: 375,
    y4: 25,
}
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    //make the walls and further part of the hallway
    fill(220);
    quad(180, 160, 180, 240, -50, 500, -50, -100);
    quad(220, 160, 220, 240, 450, 500, 450, -100);
    fill(0);
    quad(220, 160, 220, 240, 180, 240, 180, 160);
    drawGlassl();
    drawGlassr();
    //make yourself move further in by clicking
    if (mouseIsPressed) {
        glassl.x1 = glassl.x1 - 1,
            glassl.x2 = glassl.x2 - 1,
            glassl.x3 = glassl.x3 - 2,
            glassl.x4 = glassl.x4 - 2,
            glassl.y1 = glassl.y1 - 0.75,
            glassl.y2 = glassl.y2 + 0.75,
            glassl.y3 = glassl.y3 + 1.5,
            glassl.y4 = glassl.y4 - 1.5

        glassr.x1 = glassr.x1 + 1,
            glassr.x2 = glassr.x2 + 1,
            glassr.x3 = glassr.x3 + 2,
            glassr.x4 = glassr.x4 + 2,
            glassr.y1 = glassr.y1 - 0.75,
            glassr.y2 = glassr.y2 + 0.75,
            glassr.y3 = glassr.y3 + 1.5,
            glassr.y4 = glassr.y4 - 1.5
    }
    else {
        glassl.x1 = glassl.x1
        glassl.x2 = glassl.x2
        glassl.x3 = glassl.x3
        glassl.x4 = glassl.x4
        glassl.y1 = glassl.y1
        glassl.y2 = glassl.y2
        glassl.y3 = glassl.y3
        glassl.y4 = glassl.y4

        glassr.x1 = glassr.x1
        glassr.x2 = glassr.x2
        glassr.x3 = glassr.x3
        glassr.x4 = glassr.x4
        glassr.y1 = glassr.y1
        glassr.y2 = glassr.y2
        glassr.y3 = glassr.y3
        glassr.y4 = glassr.y4
    }
    //make the glass panes repeat
    if (glassl.x1 === 0) {
        glassl.x1 = 180,
            glassl.x2 = 180,
            glassl.x3 = 170,
            glassl.x4 = 170,
            glassl.y1 = 170,
            glassl.y2 = 230,
            glassl.y3 = 240,
            glassl.y4 = 160
    }
    if (glassr.x1 === 400) {
        glassr.x1 = 220,
            glassr.x2 = 220,
            glassr.x3 = 230,
            glassr.x4 = 230,
            glassr.y1 = 170,
            glassr.y2 = 230,
            glassr.y3 = 240,
            glassr.y4 = 160
    }

}


function drawGlassl() {
    push();
    fill(255)
    quad(glassl.x1, glassl.y1, glassl.x2, glassl.y2, glassl.x3, glassl.y3, glassl.x4, glassl.y4);
    pop();

}
function drawGlassr() {
    push();
    fill(255)
    quad(glassr.x1, glassr.y1, glassr.x2, glassr.y2, glassr.x3, glassr.y3, glassr.x4, glassr.y4);
    pop();

}