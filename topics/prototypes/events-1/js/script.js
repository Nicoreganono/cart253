/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict"
//we're making flappy bird (or trying to)
let bird = {
    x: 120,
    y: 150,
    size: 40,
    fill: 100,
    //make it fly and fall
    velocity: {
        y: 0,
    }

}

function setup() {
    createCanvas(800, 400);


}

function draw() {
    background(220);
    //to help gravity work properly
    let s = second();
    //barely remembered physics knowledge from way back
    let gravity = 9.8 * s ^ 2
    bird.velocity.y += gravity;
    bird.y = bird.y + bird.velocity.y
    drawBird();
}

function drawBird() {
    push();
    fill(bird.fill);
    ellipse(bird.x, bird.y, bird.size)
    pop();
}