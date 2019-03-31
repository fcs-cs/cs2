---
title: 'Function Review'
published: true
---

# {{page.title}}

This should be a quick review on defining function in javascript. In this section will cover:
1. The purpose of declaring your own functions
1. How to declare a function
1. How to specify arguments for your function
So let's get started!

## Why use functions?

Functions are useful as a way of **organizing** your code and for making sections of your code **reusable**. We've already used and declared functions numerous times before in our programming. p5.js has many built in functions including things like `fill()` and `ellipse()` These functions are already defined by the p5.js library so all we have to do is to **call** the function in our code. Imagine how frustrating it would be if you had to write out the code for drawing an ellipse every time you wanted to draw one! When we make our own functions we can accomplish the same thing: easy to read code that can be reused over and over again.

## Declaring and calling a Function

In order to declare a function we use the keyword `function` to tell JS that we are making function that we will use later. Once the function is declared we can call it in our program. NOTE: This is different from the `setup()` and `draw()` functions in p5.js where we only have to declare them, but not explicitly call the function. Let's imagine that we want to draw a bubble on our canvas that moves randomly about. Each time through the `draw()` loop we need to `move` the bubble and then `draw` it on the canvas. We could write a simple sketch like this:

```javascript
let x,y;
function setup(){
    createCanvas(400,400);
    x = width/2;
    y = height/2;
}

function draw(){
    background(0);
    //move
    x += random(-5,5);
    y += random(-5,5);

    //display
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x,y,50);
}
```
We could rewrite this so that it is functionally the same, but is organized so that the `draw()` loop is a little easier to understand and puts the low-level code inside a function below the higher-level intent.

```javascript
let x,y;
function setup(){
    createCanvas(400,400);
    x = width/2;
    y = height/2;
}

function draw(){
    background(0);
    moveBubble();
    displayBubble();
    
}

function moveBubble(){
    x += random(-5,5);
    y += random(-5,5);
}

function displayBubble(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x,y,50);
}
```
Now, someone with possibly no coding experience could still read this code and get a sense of what's happening.

## Passing arguments

Lastly, we may want to be able to specify particular parameters for our functions. This makes our functions even more powerful and versatile. Let's imagine that we wanted to change how far the bubble moves each time though the `draw()` loop. we could just change the values in our `moveBubble()` function, but that's a lot of extra typing every time we want to change it. Instead we can pass an **argument** to the function that can easily be changed:
```javascript
function moveBubble(maxMovement){
    x += random(-maxMovement, maxMovement);
    y += random(-maxMovement, maxMovement);
}
```
Now when we call the `moveBubble()` function we can specify the `maxMovement` inside the `()`

```javascript
let x,y;
function setup(){
    createCanvas(400,400);
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
```

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSecw64f4vZ1Ue60LVoOzJ_1w4BGeuS2Wz_XXow_6ssup_sg6Q/viewform)

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecw64f4vZ1Ue60LVoOzJ_1w4BGeuS2Wz_XXow_6ssup_sg6Q/viewform?embedded=true" width="100%" height="1121" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>