/**
 * The violence
 * Nicola Fournier
 * 
 * How far can you go on this rocket ship?
 */

//Let's try to make a rocket with asteroids
"use strict"
let bullets = [];
let bubbles = [];
let bubbleCount = 0;
let gun = {
    x: undefined,
    y: undefined,
    fill: 100,
    h: 15,
    l: 70,

}
function setup() {
    createCanvas(600, 400);
}

function createBubble() {
    const newBubble = {
        x: width,
        y: random(15, height - 15),
        size: 30,
        fill: 255,
        velocity: {
            x: -10,
            y: 0,
        }
    };
    return newBubble;
}

function createBullet() {
    const newBullet = {
        x: gun.x + 70,
        y: gun.y + 7.5,
        size: 15,
        fill: 255,
        velocity: {
            x: 30,
            y: 0,
        }
    };
    return newBullet;
}

function draw() {
    background(220);

    if (bullets.length >= 10) {
        bullets.shift();

    }
    for (let bullet of bullets) {
        moveBullet(bullet);
        drawBullet(bullet);
    }
    if (bubbles.length >= 50) {
        bubbles.shift();

    }
    if (bubbleCount === 50) {
        const bubble = createBubble();
        bubbles.push(bubble);
        bubbleCount = 0
    }
    for (let bubble of bubbles) {


        moveBubble(bubble);
        drawBubble(bubble);

    }
    for (let bullet of bullets) {
        for (let bubble of bubbles) {
            popBubble(bubble, bullet);
        }
    }

    bubbleCount += 1

    gun.x = mouseX
    gun.y = mouseY
    drawGun();
    text(bubbleCount, 100, 100)

}

function moveBullet(bullet) {
    bullet.x += bullet.velocity.x
}
function moveBubble(bubble) {
    bubble.x += bubble.velocity.x
}

function drawBullet(bullet) {
    push();
    noStroke();
    colorMode(HSB);
    fill(10, bullet.fill, 100);
    ellipse(bullet.x, bullet.y, bullet.size)
    pop();
}

function drawBubble(bubble) {
    push();
    noStroke();
    colorMode(HSB);
    fill(bubble.fill);
    ellipse(bubble.x, bubble.y, bubble.size)
    pop();
}

function mousePressed() {
    const bullet = createBullet();
    bullets.push(bullet);
}


function drawGun() {
    push();
    fill(gun.fill);
    rect(gun.x, gun.y, gun.l, gun.h);
    pop();

    push();
    fill(gun.fill);
    translate(gun.x, gun.y)
    rotate(2)
    rect(0, -5, gun.l / 2, gun.h);
    rotate(-0.5);
    pop();
}

function popBubble(bubble, bullet) {
    let d = dist(bubble.x, bubble.y, bullet.x, bullet.y)
    let overlap = (d < bubble.size / 2 + bullet.size / 2);
    if (overlap) {
        bubble.fill = 0;
    }

}
