---
title: Programming with Objects
---

# {{page.title}}

Now that we've seen how to use functions and objects with JSON let's take a look at how you might use these two to program in JavaScript. In this lesson we will:

1. Start with some basic code for a randomly moving bubble
1. Create an object to hold data about the bubble
2. Include functionality in the bubble object to enable it to move and display

## Basic Sketch

Let's start with the code from the first lesson in this unit for creating a moving bubble.

<script type="text/p5" data-autoplay data-preview-width="250" data-height="400">
let x,y;
function setup(){
    createCanvas(200,200);
    x = width/2;
    y = height/2;
}

function draw(){
    background(0);
    moveBubble(5);
    displayBubble();
    
}

function moveBubble(maxMovement){
    x += random(-maxMovement, maxMovement);
    y += random(-maxMovement, maxMovement);
}

function displayBubble(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x,y,50);
}
</script>