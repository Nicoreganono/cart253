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
//this is where YOU come in >:) 
let bait = {
    x: undefined,
    y: undefined,
    s: 20,
    fill: "#b08799",


}
// Starting and end texts.
let titleString = "Fish food - press e to start";
let endingString = "Enjoy the bowels of a deep sea creature...";
//with an option to restart
let endingString2 = "press r to restart";

//start the sequence with the title
let state = "title";

function setup() {
    createCanvas(800, 400);
    //make the text centered and big
    textSize(32);
    textAlign(CENTER, CENTER);
}

function draw() {
    //establish the bait positional values
    bait.x = mouseX;
    bait.y = mouseY;

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
    background("#a0a0b1");

    push();
    fill("#ffffff");
    text(titleString, width / 2, height / 2)
    pop();
    //set it so that when 'e' is pressed, the sequence begins
    if (keyIsPressed === true) {
        if (key === 'e') {
            state = "devouring";
        }
    }
}
function devouring() {
    background("skyblue");
    //establish the distance between the shark and the bait for overlap
    let d = dist(bait.x, bait.y, shark.x, shark.y);
    //establish a distance value to see if the mouse is moving
    let d2 = dist(mouseX, mouseY, pmouseX, pmouseY);
    //make it follow the cursor harder when the cursor is immobile
    if (d2 === 0) {
        shark.velocity.x += (mouseX - shark.x) / random(30, 50)
        shark.velocity.y += (mouseY - shark.y) / random(30, 50)
    } else {
        //make the shark follow the cursor fairly rapidly
        shark.velocity.x += (mouseX - shark.x) / 140
        shark.velocity.y += (mouseY - shark.y) / 140

    }
    //establish both overlap values
    let overlapx = (d < bait.s / 2 + shark.sx);
    let overlapy = (d < bait.s / 2 + shark.sy / 2);
    shark.x += shark.velocity.x
    shark.y += shark.velocity.y
    //make the shark appear
    drawShark();
    drawBait();
    //when the bait is eaten, life comes to an end
    if (overlapx && overlapy) {
        state = "ending";
    }
}
function ending() {
    background("#610000");

    push();
    fill("#ffffff");
    text(endingString, width / 2, height / 2)
    textSize(16)
    text(endingString2, width / 2, (height / 2) + 50)
    pop();

    //add an option to restart easily
    if (keyIsPressed === true) {
        if (key === 'r') {
            state = "title";
        }
    }
}
//make the predator appear
function drawShark() {
    fill(shark.fill)
    ellipse(shark.x, shark.y, shark.sx, shark.sy)
}
//make the victim appear
function drawBait() {
    fill(bait.fill);
    ellipse(bait.x, bait.y, bait.s);

}