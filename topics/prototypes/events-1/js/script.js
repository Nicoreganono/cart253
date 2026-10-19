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
    size: 30,
    fill: 100,
    //make it fly and fall
    velocity: {
        y: 0,
    }
}
//make obstacles
let pipes1 = {
    x: 300,
    y1: -200,
    y2: 190,
    l: 40,
    h: 300,

}


function setup() {
    createCanvas(1200, 400);


}

function draw() {
    background(220);
    //make this simulate gravity
    bird.velocity.y += 0.5;
    //make the birds height be influenced by said gravity
    bird.y += bird.velocity.y
    //let there be bird
    drawBird();
    //let there be pipes
    drawPipes1();

}
//make the bird fly higher when the mouse is clicked
function mouseClicked() {
    bird.velocity.y = -10

}
//allow the bird to be
function drawBird() {
    push();
    fill(bird.fill);
    ellipse(bird.x, bird.y, bird.size)
    pop();
}
//design the pipes and make it a set of 2
function drawPipes1() {
    push();
    noStroke();
    rect(pipes1.x, pipes1.y1, pipes1.l, pipes1.h)
    rect(pipes1.x, pipes1.y2, pipes1.l, pipes1.h)
    pop();


}