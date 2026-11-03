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
    x:undefined,
    y:undefined,
    fill:100,
    size:{
        x:30,
        y:50,
    }


}
function setup(){
    createCanvas(400,800);
}

function createSmoke(){
    const newSmoke={
        x:200,
        y:400,
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

}

function moveSmoke(smoke){
    smoke.x += smoke.velocity.x
    smoke.y += smoke.velocity.y
    smoke.velocity.y *= 0.975
    smoke.size += smoke.velocity.y/100
}

function drawSmoke(smoke){
    push();
    noStroke();
    fill(smoke.fill);
    ellipse(smoke.x,smoke.y,smoke.size)
    pop();
}

function moveRocket(){


}
