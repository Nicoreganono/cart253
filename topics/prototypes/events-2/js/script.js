/**
 * Hell made of bullets
 * Nicola Fournier
 * 
 * Trying to make a undertale-esque type of bullet hell segment
 */

"use strict"
//make the player first

let player = {
    x: 300,
    y: 300,
    size: 30,
    fill: "red"
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
    stroke(255);
    strokeWeight(5);
    fill(player.fill)
    ellipse(player.x, player.y, player.size)
    pop();

}
//establish the controls
function movePlayer() {
    if (keyCode === 39) {
        player.x += 2;
    }
    else if (keyCode === 37) {
        player.x -= 2;
    }
    else if (keyCode === 38) {
        player.y -= 2;
    }
    else if (keyCode === 40) {
        player.y += 2;
    }


}