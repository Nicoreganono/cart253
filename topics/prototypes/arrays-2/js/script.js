/**
 * The violence
 * Nicola Fournier
 * 
 * Shoot them. Shoot them all.
 */

//Let's try to make a gun!
"use strict"
//make an array for bullets
let bullets = [];
//make an array for bubbles! to shoot!
let bubbles = [];
//make a count for the bubbles so that they dont oversaturate the screen to quickly
let bubbleCount = 0;
//the gun.
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
//establish the creation of bubbles
function createBubble() {
    const newBubble = {
        x: width,
        y: random(15, height - 15),
        size: 30,
        fill: 255,
        //make it move left
        velocity: {
            x: -10,
        }
    };
    return newBubble;
}
//establish the ammunition parting from its weapon
function createBullet() {
    const newBullet = {
        x: gun.x + 70,
        y: gun.y + 7.5,
        size: 15,
        fill: 255,
        //make it move right!
        velocity: {
            x: 30,
        }
    };
    return newBullet;
}

function draw() {
    background(220);
    //assure that bullets dont stack up too hard
    if (bullets.length >= 20) {
        bullets.shift();

    }
    for (let bullet of bullets) {
        moveBullet(bullet);
        drawBullet(bullet);
    }
    //assure bubbles dont stack up too hard
    if (bubbles.length >= 50) {
        bubbles.shift();

    }
    //only if the count reaches 50 may a bubble appear
    if (bubbleCount === 50) {
        const bubble = createBubble();
        bubbles.push(bubble);
        //and reset the count
        bubbleCount = 0
    }
    for (let bubble of bubbles) {
        moveBubble(bubble);
        drawBubble(bubble);

    }
    //tricky way of making both arrays interact for collision
    for (let bullet of bullets) {
        for (let bubble of bubbles) {
            popBubble(bubble, bullet);
        }
    }
    //make the count increase constantly
    bubbleCount += 1
    //make the gun be at the mouse
    gun.x = mouseX
    gun.y = mouseY
    //make the gun appear
    drawGun();
    //count in text for verification, and timing
    text(bubbleCount, 100, 100)

}
//make the bullets move right
function moveBullet(bullet) {
    bullet.x += bullet.velocity.x
}
//make the bubbles move left
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
