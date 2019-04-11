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

In order for DLA to work, there needs to be a seed, an initial point or area that other walkers can attach to. While we could make a new class called `seed` that isn't going to do us much good. If we go back to how DLA works we see that the seed, anything that's attached to the seed and the walkers are all the same "thing." Therefore, let's add to the `Walker` the idea of whether its moving or static with a simple boolean variable in the constructor `this.static` and set it `false` by default. Now that we have that, we can create a new array and add to it a new walker at the center of the screen that is static.

```javascript
let walkers = [];
let static = []

function setup(){
    createCanvas(600,600)
    for(let i = 0; i < 100; i++){
        walkers.push(new Walker(random(width),random(height)));
    }

    let seed = new Walker(width/2, height/2);
    seed.static = true;
    static.push(seed);
}
```
So what does it mean to be static? Most importantly, it doesn't move, but it may also look different. We can deal with the movement part by simply not calling the `move()` method for any element in the `static` array and we can modify the `show()` method with a simple conditional statement.

```javascript
if(this.static){
    fill(0)
} else {
    fill(200)
}
```


![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/DLA_Cluster.JPG/800px-DLA_Cluster.JPG)

![](https://upload.wikimedia.org/wikipedia/commons/5/55/Lichtenberg_figure_in_block_of_Plexiglas.jpg)
