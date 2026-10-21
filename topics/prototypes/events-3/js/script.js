/**
 * Jumping individual
 * Nicola Fournier
 * 
 * Making a character jump from moving platform to moving platform
 */

"use strict"
//make the player
let player = {
    x: 300,
    y: 300,
    size: 30,
    fill: "red",
    //make his speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    //give him gravity
    gravity: {
        y: 0.1,
    }
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220);
    //allow the player to move
    movePlayer();
    //allow the player to be
    drawPlayer();
}
//establish the player
function drawPlayer() {
    push();
    stroke("blue");
    strokeWeight(5);
    fill(player.fill)
    ellipse(player.x, player.y, player.size)
    pop();

}
//establish the controls
function movePlayer() {
    player.y += player.velocity.y;
    player.velocity.y += player.gravity.y;
}