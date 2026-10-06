/**
 * Do not get bit
 * Nico
 * 
 * The shark is coming for you, and he's very hungry.
 */

"use strict";
//establish a dangerous (more stereotypically than normal) underwater predator
let shark = {
    x: 700,
    y: 360,
    sx: 80,
    sy: 40,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "#0a1432"

}
// Starting and end texts.
let titleString = "Fish food - press e to start";
let endingString = "Enjoy the bowels of a deep sea creature...";

//start the sequence with the title
let state = "title";

function setup() {
    createCanvas(800, 400);
    d = dist(mouseX, mouseY, pmouseX, pmouseY)
}

function draw() {
    if (state === "title") {
        title();
    }
    else if (state === "devouring") {
        devouring();
    }
    else if (state === "ending") {
        ending();
    }
}
function title() {
    background("#0000ff");

    push();
    fill("#ffffff");
    text(titleString, width / 2, height / 2)
    pop();

    if (keyIsPressed === true) {
        if (key === 'e') {
            state = "devouring";
        }
    }
}
function devouring() {
    background("skyblue");
    //make the shark follow the cursor
    shark.velocity.x += (mouseX - shark.x) / 100
    shark.velocity.y += (mouseY - shark.y) / 100
    //make it follow the cursor harder when on the right side of the canvas
    if (mouseX > 400) {
        shark.velocity.x += (mouseX - shark.x) / 80
        shark.velocity.y += (mouseY - shark.y) / 80
    }
    shark.x += shark.velocity.x
    shark.y += shark.velocity.y
    //make the shark appear
    drawShark();
}

function drawShark() {
    fill(shark.fill)
    ellipse(shark.x, shark.y, shark.sx, shark.sy)

}