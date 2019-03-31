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

<iframe src="https://editor.p5js.org/mdarfler/sketches/r1gcfazyr" width = "100%" height = "800" frameborder="0"></iframe>

## Creating a bubble object to store data using JSON

While it's easy to create the variables `x` and `y` to keep track of the bubble's x and y location, we want to associate that data with the bubble itself. In this way we create greater **intention.** In order to do this we need to create a bubble variable and assign an object that contains structured information using JSON to that variable. This can be achieved with the following code:
```javascript
let bubble;

function setup(){
    createCanvas(200,200);
    bubble = {
        x:width/2,
        y:height/2
    }
}
```
However, if we run this, we're going to get errors because now, wherever we had the variable `x` and `y` we need to replace it with `bubble.x` and `bubble.y` because that data is now stored within the  object called `bubble`. After doing so we should end up with something like the following sketch.

<iframe src="https://editor.p5js.org/mdarfler/sketches/vVETgK0HK" width = "100%" height = "800" frameborder="0"></iframe>

So as you can see, the functionality hasn't changed, just the structure of the sketch.

## Adding Functionality to the object.

We're nearly there, but we want to do one more thing, and that is to add functionality to our object. This bubble is more than just a collection of data. We want it to know how to draw itself onto the canvas and to move around the canvas. This functionality will be created by including functions with our object. These functions are called **methods** 

The syntax for including methods with an object is a little byzantine but we'll see in the next lesson how we can accomplish this in an easier way. For now let's just stay focused on how to include methods and how to use them.

Let's start with a simple function that just writes to the console "hello" in order to include this in the bubble object we use the following syntax

```javascript
let bubble;

function setup(){
    createCanvas(200,200);
    bubble = {
        x:width/2,
        y:height/2,
        hello:function(){
            console.log('hello')
        }
    }
    bubble.hello();
}
```
notice that when we want to call the method we have to include `()` after the method name.

### this.

Easy enough! Now let's add a method that's going to move the bubble around the screen. We may be tempted to do something like this:

```javascript
let bubble;

function setup(){
    createCanvas(200,200);
    bubble = {
        x:width/2,
        y:height/2,
        hello:function(){
            console.log('hello')
        },
        move:function(){
            x += random(-5,5);
            y += random(-5,5);
        }
    }
    bubble.hello();
}
```
But this won't work. `x` and `y` are no longer variables that can be accessed globally. Instead they are associated with the bubble object. So how about `bubble.x += random(-5,5)`? No go again. `bubble.x` doesn't exist yet because we're still creating the bubble object when we are defining the method `move()`. To get around this, JS has created the key word `this` as in `this` object's `x` and `this` object's `y`. 

```javascript
let bubble;

function setup(){
    createCanvas(200,200);
    bubble = {
        x:width/2,
        y:height/2,
        hello:function(){
            console.log('hello')
        },
        move:function(){
            this.x += random(-5,5);
            this.y += random(-5,5);
        }
    }
    bubble.hello();
}
```

We can also add a `display()` method to the object and call them up using the same dot notation as before and we're left with something that looks like this.

<iframe src="https://editor.p5js.org/mdarfler/sketches/6Sq3gmvm8" width = "100%" height = "800" frameborder="0"></iframe>

While this is all fine and dandy, I think we've actually made our sketch *more* confusing. But don't worry, we'll see how to clean this up in the next unit.

## Video Explanation
If you'd like a video explanation of the code please watch the following.

<iframe width="640" height="340" src="https://www.youtube.com/embed/bQC0Z33AxKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSfmhhUhw_d9Q-PyNjgztwPFpb87q-xdhXQSdfqZfIdqzuaksg/viewform)

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmhhUhw_d9Q-PyNjgztwPFpb87q-xdhXQSdfqZfIdqzuaksg/viewform?embedded=true" width="100%" height="2298" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>