---
title: What is a Vector?
---

# {{page.title}}

In this unit we will examine how to use forces to create simulations about the natural world. A force can be something which could describe a physical force, such as gravity, or some environmental force, like an attraction to food or a repulsion from a predator. There may be many ways of representing these forces, but we will be using the conventions of vectors. This lesson will give us an introduction to what a vector is and how we can use it to create simple and complex simulations.

## A vector is an arrow

The Euclidean vector—the vector that we will use in this lesson—is usually represented as an arrow. That arrow has 
1. an arbitrary starting point
1. a direction
1. a length or magnitude

Another way to think about a vector is that it is an instruction to get from one point _a_ to another point _b_. 

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vector_from_A_to_B.svg/1200px-Vector_from_A_to_B.svg.png)

<p class="caption"><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vector_from_A_to_B.svg/1200px-Vector_from_A_to_B.svg.png">wikipedia</a></p>

## Position and velocity, a simple example.

In reality a vector can be a lot of things, but to begin let's start by thinking of a vector as describing the position of an object (a ball) and its velocity. 

### Position
In the past, when we wanted to know about an objects position we would just store the _x_ and _y_ coordinates. If we want to think about this as a vector then we need to create a vector starting at _(0,0)_ our origin and pointing towards the _(x,y)_ location.

![]({{site.baseurl}}/img/vectors/position-vector-01.png)

In order to get there we'll need to move _x_ units in the _x_ direction and _y_ units in the _y_ direction. e.g. if we want to describe the location _(200,300)_, we'll need to create a vector that moves 200 units in the _x_ direction and 300 in the _y_ direction. This is remarkably similar to what we've done in the past but we'll do it in a slightly different way in code using the `p5.vector` class. (and you know all about classes now). 

There is a lot to know about the `p5.vector` class but to begin lets just cover the basics. In order to create a vector we can use the `createVector(x,y)` command which takes an _x_ and a _y_ as arguments. In order to get the information out of the vector object we can use the property `.x` and `.y`. So if we want to draw a circle at a given _x_ and _y_ we can do so with the following code.

```javascript
let pos;  //global variable which will become 
          //the vector object literal

function setup(){
  createCanvas(600,400);
  pos = createVector(300,100); //create the vector

  fill(0);
  ellipse(pos.x,pos.y,10)
}
```

Wahoo! So far so good. 

## Velocity - vector addition

Here comes the fun part. As mentioned before, a vector is an instruction to get from one place to another. Like wise, we can think of velocity as an instruction to get from one place to another. e.g. if an object is at location _(200,300)_ and has a velocity of _(10,20)_ we simply add the velocity to the position and in the next time step it will be at _(210,320)_. 

In vector world if we want to add two vectors together, we arrange them **tip to tail** The reason for this is that, as stated above, vectors have no defined start point, which means we are free to move them around as we see fit and the information is preserved. 

![]({{site.baseurl}}/img/vectors/position-vector-02.png)

In the example above there is an object that is at the position _(200,150)_. In code we would accomplish this with `let pos = createVector(200,150)` If we want to move the object 100 steps in the _x_ direction and up -50 steps in the _y_ direction we could create another vector which corresponds to this motion `let vel = createVector(100, -50)` If we want to add these two vectors together we can simply add the _x_ components of the two vectors together and the _y_ components of the two vectors together

```javascript
function setup(){
  let pos = createVector(200,150); //position vector
  let vel = createVector(100,-50); //velocity vector

  let newX = pos.x + vel.x; //add x components
  let newY = pos.y + vel.y; //add y components
  
  //update position vector
  pos = createVector(newX, newY); 

  console.log('x: ' + pos.x + ' y: ' + pos.y)
}

//> x: 300 y: 100
```

The code above would certainly work, but it's a lot of work, and who wants more work? Luckily, there is a `method` in the `p5.Vector` class that will do this for us called `.add()` This method adds one vector to another. We can rewrite this code thusly:

```javascript
function setup(){
  let pos = createVector(200,150); //position vector
  let vel = createVector(100,-50); //velocity vector

  pos.add(vel); 

  console.log('x: ' + pos.x + ' y: ' + pos.y)
}

//> x: 300 y: 100
```

Well isn't that handy! 

### putting it together.

Let's make a simple sketch that will move a ball with a uniform velocity across the screen from left to right. We'll need to start by initializing a position vector and then in the draw loop we can update the position by adding a constant velocity vector to that position and then redrawing the ellipse.

<iframe width="100%" height="600" frameborder="0" src="https://editor.p5js.org/mdarfler/sketches/dfERahzkZ"></iframe>

## Comprehension Check
