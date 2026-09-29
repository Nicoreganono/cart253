/**
 * Sticky Orbs
 * Nicola Fournier
 * 
 * A collection of small orbs orbiting the cursor, sticking and bouncing off the walls wildly.
 */

"use strict";

//Make an orb
let orb1 = {
    x: 200,
    y: 100,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "red",


}
//make MORE
let orb2 = {
    x: 170,
    y: 150,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "orange",
}
let orb3 = {
    x: 150,
    y: 200,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "yellow",
}
let orb4 = {
    x: 160,
    y: 250,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "green",
}
let orb5 = {
    x: 240,
    y: 250,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "indigo",
}
let orb6 = {
    x: 250,
    y: 200,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "cyan",
}
let orb7 = {
    x: 230,
    y: 150,
    size: 20,
    //make it's speed variable
    velocity: {
        x: 0,
        y: 0,
    },
    fill: "purple",
}


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    //make the orb go faster towards the mouse the further it is from it
    orb1.velocity.x += (pmouseX - orb1.x) * 0.005;
    orb1.velocity.y += (pmouseY - orb1.y) * 0.005;
    //repeat for the other orbs with various velocity modifiers
    orb2.velocity.x += (pmouseX - orb2.x) * 0.0055;
    orb2.velocity.y += (pmouseY - orb2.y) * 0.0055;
    orb3.velocity.x += (pmouseX - orb3.x) * 0.0045;
    orb3.velocity.y += (pmouseY - orb3.y) * 0.0045;
    orb4.velocity.x += (pmouseX - orb4.x) * 0.0065;
    orb4.velocity.y += (pmouseY - orb4.y) * 0.0065;
    orb5.velocity.x += (pmouseX - orb5.x) * 0.006;
    orb5.velocity.y += (pmouseY - orb5.y) * 0.006;
    orb6.velocity.x += (pmouseX - orb6.x) * 0.0035;
    orb6.velocity.y += (pmouseY - orb6.y) * 0.0035;
    orb7.velocity.x += (pmouseX - orb7.x) * 0.004;
    orb7.velocity.y += (pmouseY - orb7.y) * 0.004;

    orb1.x += orb1.velocity.x
    orb1.y += orb1.velocity.y
    orb2.x += orb2.velocity.x
    orb2.y += orb2.velocity.y
    orb3.x += orb3.velocity.x
    orb3.y += orb3.velocity.y
    orb4.x += orb4.velocity.x
    orb4.y += orb4.velocity.y
    orb5.x += orb5.velocity.x
    orb5.y += orb5.velocity.y
    orb6.x += orb6.velocity.x
    orb6.y += orb6.velocity.y
    orb7.x += orb7.velocity.x
    orb7.y += orb7.velocity.y
    //constrain the orbs to the canvas
    let orb1x = constrain(orb1.x, 0, 400)
    let orb1y = constrain(orb1.y, 0, 400)
    //repeat for the other orbs
    let orb2x = constrain(orb2.x, 0, 400)
    let orb2y = constrain(orb2.y, 0, 400)
    let orb3x = constrain(orb3.x, 0, 400)
    let orb3y = constrain(orb3.y, 0, 400)
    let orb4x = constrain(orb4.x, 0, 400)
    let orb4y = constrain(orb4.y, 0, 400)
    let orb5x = constrain(orb5.x, 0, 400)
    let orb5y = constrain(orb5.y, 0, 400)
    let orb6x = constrain(orb6.x, 0, 400)
    let orb6y = constrain(orb6.y, 0, 400)
    let orb7x = constrain(orb7.x, 0, 400)
    let orb7y = constrain(orb7.y, 0, 400)


    //make the orb happen
    drawOrb1();
    //make the string happen
    drawString1();
    //do it all again
    drawOrb2();
    drawString2();
    drawOrb3();
    drawString3();
    drawOrb4();
    drawString4();
    drawOrb5();
    drawString5();
    drawOrb6();
    drawString6();
    drawOrb7();
    drawString7();

    function drawOrb1() {
        push();
        noStroke();
        fill(orb1.fill);
        ellipse(orb1x, orb1y, orb1.size)
        pop();
    }
    function drawOrb2() {
        push();
        noStroke();
        fill(orb2.fill);
        ellipse(orb2x, orb2y, orb2.size)
        pop();
    }
    function drawOrb3() {
        push();
        noStroke();
        fill(orb3.fill);
        ellipse(orb3x, orb3y, orb3.size)
        pop();
    }
    function drawOrb4() {
        push();
        noStroke();
        fill(orb4.fill);
        ellipse(orb4x, orb4y, orb4.size)
        pop();
    }
    function drawOrb5() {
        push();
        noStroke();
        fill(orb5.fill);
        ellipse(orb5x, orb5y, orb5.size)
        pop();
    }
    function drawOrb6() {
        push();
        noStroke();
        fill(orb6.fill);
        ellipse(orb6x, orb6y, orb6.size)
        pop();
    }
    function drawOrb7() {
        push();
        noStroke();
        fill(orb7.fill);
        ellipse(orb7x, orb7y, orb7.size)
        pop();
    }

    function drawString1() {
        push();
        //the string is the same color as the ball
        stroke(orb1.fill);
        //the string is between the mouse and the ball
        line(orb1x, orb1y, mouseX, mouseY);
        pop();
    }
    function drawString2() {
        push();
        stroke(orb2.fill);
        line(orb2x, orb2y, mouseX, mouseY);
        pop();
    }
    function drawString3() {
        push();
        stroke(orb3.fill);
        line(orb3x, orb3y, mouseX, mouseY);
        pop();
    }
    function drawString4() {
        push();
        stroke(orb4.fill);
        line(orb4x, orb4y, mouseX, mouseY);
        pop();
    }
    function drawString5() {
        push();
        stroke(orb5.fill);
        line(orb5x, orb5y, mouseX, mouseY);
        pop();
    }
    function drawString6() {
        push();
        stroke(orb6.fill);
        line(orb6x, orb6y, mouseX, mouseY);
        pop();
    }
    function drawString7() {
        push();
        stroke(orb7.fill);
        line(orb7x, orb7y, mouseX, mouseY);
        pop();
    }
}