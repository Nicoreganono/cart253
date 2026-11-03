/**
 * To infinity loops
 * Nicola Fournier
 * 
 * How far can you go on this rocket ship?
 */

//Let's try to make a rocket with asteroids
"use strict"
let smokes=[];

let rocket={
    x:200,
    y:650,
    fill:100,
    size:70,
    velocity:{
        x:0,
        y:0,
    }


}
function setup(){
    createCanvas(400,800);
}

function createSmoke(){
    const newSmoke={
        x:rocket.x,
        y:rocket.y,
        size: 30,
        fill: 255,
        velocity:{
            x: random(-0.8,0.8),
            y: 10,
        }
    };
return newSmoke;
}

function draw(){
    background(220);
    
    const smoke = createSmoke();
    smokes.push(smoke);
    if (smokes.length >= 100){
        smokes.shift();

    }
    for (let smoke of smokes) {
        moveSmoke(smoke);
        drawSmoke(smoke);
    }
    moveRocket();
    drawRocket();

}

function moveSmoke(smoke){
    smoke.x += smoke.velocity.x
    smoke.y += smoke.velocity.y
    smoke.velocity.y *= 0.98
    smoke.size += smoke.velocity.y/10
}

function drawSmoke(smoke){
    push();
    noStroke();
    fill(smoke.fill);
    ellipse(smoke.x,smoke.y,smoke.size)
    pop();
}

function moveRocket(){ 
    rocket.y += rocket.velocity.y
    rocket.x += rocket.velocity.x
    rocket.velocity.x *= 0.975
    rocket.velocity.y *= 0.975
    if (keyIsDown(LEFT_ARROW)) {
        rocket.velocity.x += -0.2
    }
    if (keyIsDown(RIGHT_ARROW)) {
        rocket.velocity.x += 0.2 
    }
    //allow it to jump once after touching a platform
    if (keyIsDown(UP_ARROW)) {
        rocket.velocity.y += -0.2
    }
    if (keyIsDown(DOWN_ARROW)) {
        rocket.velocity.y += 0.2
    }
}

function drawRocket(){
    push();
    ellipse(rocket.x,rocket.y,rocket.size);
    pop();
}