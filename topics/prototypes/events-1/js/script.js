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
let pipes2 = {
    x: 600,
    y1: -170,
    y2: 220,
    l: 40,
    h: 300,

}
let pipes3 = {
    x: 1000,
    y1: -70,
    y2: 320,
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

    //make the pipes move left
    pipes1.x += -3.5
    pipes2.x += -3.5
    pipes3.x += -3.5
    //make the bird not leave the canvas
    let birdy = constrain(bird.y, 0, 400)
    //let there be bird
    drawBird();
    //let there be pipes
    drawPipes1();
    drawPipes2();
    drawPipes3();
    //make the pipes reappear
    if (pipes1.x < -40) {
        pipes1.x = 1200

    }
    if (pipes2.x < -40) {
        pipes2.x = 1200

    }
    if (pipes3.x < -40) {
        pipes3.x = 1200

    }
    //make the constraint function accordingly (the true position of the bird will stay upon the canvas)
    if (bird.y > 400) {
        bird.y = 400
        bird.velocity.y = 0
    }
    if (bird.y < 0) {
        bird.y = 0
        bird.velocity.y = 0
    }




    //allow the bird to be
    function drawBird() {
        push();
        fill(bird.fill);
        ellipse(bird.x, birdy, bird.size)
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
    //repeat
    function drawPipes2() {
        push();
        noStroke();
        rect(pipes2.x, pipes2.y1, pipes2.l, pipes2.h)
        rect(pipes2.x, pipes2.y2, pipes2.l, pipes2.h)
        pop();
    }
    function drawPipes3() {
        push();
        noStroke();
        rect(pipes3.x, pipes3.y1, pipes3.l, pipes3.h)
        rect(pipes3.x, pipes3.y2, pipes3.l, pipes3.h)
        pop();
    }
}
//make the bird fly higher when the mouse is clicked
function mouseClicked() {
    bird.velocity.y = -7

}