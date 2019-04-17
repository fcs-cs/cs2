---
title: Diffusion Limited Aggregation
---

# {{page.title}}

> Many attractive images and life-like structures can be generated using models of physical processes from areas of chemistry and physics. One such example is diffusion limited aggregation or DLA which describes, among other things, the diffusion and aggregation of zinc ions in an electrolytic solution onto electrodes. "Diffusion" because the particles forming the structure wander around randomly before attaching themselves ("Aggregating") to the structure. "Diffusion-limited" because the particles are considered to be in low concentrations so they don't come in contact with each other and the structure grows one particle at a time rather then by chunks of particles. Other examples can be found in coral growth, the path taken by lightning, coalescing of dust or smoke particles, and the growth of some crystals. Perhaps the first serious study of such processes was made by Witten, T.A. and Sander, L. M. and published by them in 1981, titled: "Diffusion limited aggregation, a kinetic critical phenomena" 
> -[Paul Bourke](http://paulbourke.net/fractals/dla/)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/DLA_spiral.png/800px-DLA_spiral.png)

DLA creates a tree like structure which is referred to as a Brownian Trees and exhibit some very interesting fractal patterns, meaning that they show similar structures at different scales. I.e. if you zoom in on one branch of the tree it starts to look like the whole tree again. 

## Setting the stage

In order to create our simulation we need to build up our conceptual understanding of how DLA works while also establishing how to represent the process computationally. The following will try to express the basic ideas using images and pseudo-code.

To start, we'll need to build the environment in which these particles are diffusing. Since these particles move as if by a random walk we'll call this object `Walker.` The walker will need to do two things at first.
1. `move()`
1. `display()`

So we can create a class which we will use to create our walker objects

```javascript
class Walker {
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
    }

    move(){
        //move randomly up or down
        //move randomly left or right
    }

    show(){
        // somehow show yourself on the screen
    }
}
```

We can create a `for` loop to create a number of instances of the walker, put them into an array and iterate over the array

```javascript
let walkers = [];

function setup(){
    createCanvas(600,600)
    for(let i = 0; i < 100; i++){
        walkers.push(new Walker(random(width),random(height)));
    }
}

function draw(){
    for(let walker of walkers){
        walker.show();
        walker.move();
    }
}
```

<iframe width = "640" height = "260" frameborder = "0" src="https://editor.p5js.org/mdarfler/embed/HSrrC-V25"></iframe>

Pretty neat, but lets keep going

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rec8_3kc2p.jpg/800px-Rec8_3kc2p.jpg)

## Planting the seed

In order for DLA to work, there needs to be a seed, an initial point or area that other walkers can attach to. While we could make a new class called `seed` that isn't going to do us much good. If we go back to how DLA works we see that the seed, anything that's attached to the seed and the walkers are all the same "thing." Therefore, let's add to the `Walker` the idea of whether its moving or static with a simple boolean variable in the constructor `this.static` and set it `false` by default. 

```javascript
let walkers = [];

function setup(){
    createCanvas(600,600)
    for(let i = 0; i < 100; i++){
        walkers.push(new Walker(random(width),random(height)));
    }

    let seed = new Walker(width/2, height/2);
    seed.static = true;
    walkers.push(seed);
}
```
So what does it mean to be static? Most importantly, it doesn't move, but it may also look different. We can modify both the show and move function to check if the walker is static.

```javascript
show(){
    if(this.static){
        fill(0)
    } else {
        fill(200)
    }
    ellipse(this.x, this.y, this.r)
}

move(){
    if(!this.static){
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
}
```

<iframe width="640" height="240" frameborder="0" src="https://editor.p5js.org/mdarfler/embed/BO4EEwFI2"></iframe>

<br>
![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/DLA_Cluster.JPG/800px-DLA_Cluster.JPG)
<br>

## Aggregation and Filter

Now let's get to the meat. In order for DLA to work we need to code a way for aggregation to happen. For now, let's keep it simple by saying if a walker touches a static walker, then it aggregates. I real life there may be other ways of thinking about this, but we can address that later. As we saw before we can check for collisions by checking to see if the distance between the two centers is `<=` to the sum of their radii. If this is true, then the walker becomes stuck. 

```javascript
aggregate(other){
    let d = dist(this.x, this.y, other.x, other.y)
    let sumOfRadii = this.r + other.r
    let collide = d <= sumOfRadii

    if (collide){
        this.static = true;
    }
}
```
But let's try to be smart about this. The only time we actually need to check for aggregation is if the walker in question is not stuck and the walker we're checking against is static, i.e. `!this.static && other.static` Let's rewrite the method above.

```javascript
aggregate(other){
    if(!this.static && other.static){
        let d = dist(this.x, this.y, other.x, other.y)
        let sumOfRadii = this.r + other.r
        let collide = d <= sumOfRadii

        if (collide){
            this.static = true;
        }
    }
}
```
<iframe width="640" height="240" frameborder="0" src="https://editor.p5js.org/mdarfler/embed/GhNN4rIYI"></iframe>

And there you go. Now there is a **a lot** of ways to improve on this but the basic structure is certainly there. Things to consider:
1. How do you keep the walkers from walking off the screen
1. Are the walkers repelled or attracted from/to anything?
1. How can you reduce the computational complexity of the code so that it doesn't have to check as many different balls by creating two separate arrays, one for walkers and one for static?
1. What happens if there is a probability of aggregation other than 100%
1. What if there are multiple seeds?
1. What if the seed is a line, or a circle, or some irregular curve?

![](https://upload.wikimedia.org/wikipedia/commons/5/55/Lichtenberg_figure_in_block_of_Plexiglas.jpg)

## Video Explanation from Shiffman
BE WARNED! This video uses vectors which we haven't covered yet.

<iframe width="640" height="340" src="https://www.youtube.com/embed/Cl_Gjj80gPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Video Explanation from Mr. Darfler
<iframe width="640" height="340" src="https://www.youtube.com/embed/U12QdvaglXM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>