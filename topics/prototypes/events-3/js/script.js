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
//make a platform
let platform1 = {
    x: 600,
    y: 150,
    l: 100,
    h: 10,
    velocity: {
        x: -1,
        y: 0.5,
    }
}
//make more
let platform2 = {
    x: 0,
    y: 300,
    l: 100,
    h: 10,
    velocity: {
        x: 0.5,
        y: 1,
    }
}
let platform3 = {
    x: 600,
    y: 500,
    l: 100,
    h: 10,
    velocity: {
        x: -0.5,
        y: -1,
    }
}
let platform4 = {
    x: 0,
    y: 100,
    l: 100,
    h: 10,
    velocity: {
        x: 0.5,
        y: -0.5,
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
    //allow the platforms to move
    movePlatform(platform1);
    movePlatform(platform2);
    movePlatform(platform3);
    movePlatform(platform4);
    //allow the platforms to be
    drawPlatform(platform1);
    drawPlatform(platform2);
    drawPlatform(platform3);
    drawPlatform(platform4);
    //make a collision
    collision(platform1);
    collision(platform2);
    collision(platform3);
    collision(platform4);
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
    //allow it to move and jump
    if (keyIsDown(LEFT_ARROW)) {
        player.velocity.x = 5
        player.x -= player.velocity.x;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.velocity.x = 5
        player.x += player.velocity.x;
    }
    if (keyIsDown(UP_ARROW)) {
        player.velocity.y = -5
    }
}
//establish the platform
function drawPlatform(platform) {
    push();
    stroke("brown")
    strokeWeight(4)
    rect(platform.x, platform.y, platform.l, platform.h)
    pop();
}
//establish the platform's movement
function movePlatform(platform) {
    //make it actually move
    platform.x += platform.velocity.x
    platform.y += platform.velocity.y
    //make the platform reappear on the other side
    if (platform.x < 0) {
        platform.x = 600
    }
    if (platform.x > 600) {
        platform.x = 0
    }

    if (platform.y < 0) {
        platform.y = 600
    }
    if (platform.y > 600) {
        platform.y = 0
    }
}
//establish a collision function
function collision(platform) {
    if (player.x > platform.x && player.x < platform.x + platform.l && player.y < platform.y + 10 && player.y > platform.y - 10) {
        //make the player stick to the platform
        player.y = platform.y
        //make it not move vertically anymore
        player.gravity.y = 0
        player.velocity.y = 0
    }
    else {
        //reset it's gravity
        player.gravity.y = 0.1

    }
}
