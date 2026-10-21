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
    fill: "red",
    move: {
        x: 0,
        y: 0,
    }
}
//make a projectile
let projectile1 = {
    x: 600,
    y: 150,
    size: 40,
    velocity: {
        x: -10,
        y: 5,
    }
}
//multiply
let projectile2 = {
    x: 0,
    y: 150,
    size: 50,
    velocity: {
        x: 13,
        y: 2,
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
    //allow the projectile to move
    moveProjectile(projectile1);
    moveProjectile(projectile2);
    //allow the projectile to be
    drawProjectile(projectile1);
    drawProjectile(projectile2);
    //make a collision
    collision(projectile1);
    collision(projectile2);
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
    if (keyIsDown(LEFT_ARROW)) {
        player.move.x = 5
        player.x -= player.move.x;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.move.x = 5
        player.x += player.move.x;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.move.y = 5
        player.y += player.move.y;
    }
    if (keyIsDown(UP_ARROW)) {
        player.move.y = 5
        player.y -= player.move.y;
    }
}
//establish the projectile
function drawProjectile(projectile) {
    push();
    stroke("pink")
    strokeWeight(4)
    ellipse(projectile.x, projectile.y, projectile.size)
    pop();
}
//establish the projectile's behavior
function moveProjectile(projectile) {
    projectile.x += projectile.velocity.x
    projectile.y += projectile.velocity.y
    //make the projectiles bounce on the edges of the screen
    if (projectile.x < 0) {
        projectile.velocity.x = projectile.velocity.x * -1
    }
    if (projectile.x > 600) {
        projectile.velocity.x = projectile.velocity.x * -1
    }
    if (projectile.y < 0) {
        projectile.velocity.y = projectile.velocity.y * -1
    }
    if (projectile.y > 600) {
        projectile.velocity.y = projectile.velocity.y * -1
    }

}
//establish a collision function
function collision(projectile) {
    let d = dist(projectile.x, projectile.y, player.x, player.y)
    let overlap = ((d < player.size / 2 + projectile.size / 2))
    if (overlap) {
        player.fill = "blue"
    }

}