---
title: Object-Object Interaction
---

# {{page.title}}

Now that we've have all these pretty bubbles, or balls, or calcium ions floating around the screen, the next logical questions is "how do we get them to interact with each other?" No doubt this is a great questions and one which will be answered below

## [`dist()`](https://p5js.org/reference/#/p5/dist)

Presumably, we are going to want to understand how close the balls are to each other and for that we can use the [`dist()`](https://p5js.org/reference/#/p5/dist) function that is built into p5.js 

`dist()` calculates the euclidean distance between two points takes 4 arguments `(x1, y1, x2, y2)` The euclidean distance is defined as the shortest path between two points on a flat plane and is calculated as `sqrt((x2-x1)^2 + (y2 - y1)^2)`
![](http://rosalind.info/media/Euclidean_distance.png)

Assume we have two ball objects that we want to check to see if they are colliding. Each ball knows about its `(x,y)` position and its radius `r` We can check for collision by finding the distance between their two centers and then checking to see if that distance is less than the sum of their radii
![]({{site.baseurl}}/img/spheres-colliding-01.png)

## `checkDist()`

With this in mind we can create a method for our object that can return `true/false` if two things are colliding

``` javascript
checkDist(x2,y2,r2){
    let d = dist(this.x, this.y, x2, y2);
    let collide = d <= (this.r + r2);
    return collide
}
```

And this would work just fine, but wouldn't it be better if we could just pass in an entire object instead of `x2, y2, r2`? Well you're in luck!

``` javascript
checkDist(other){
    let d = dist(this.x, this.y, other.x, other.y);
    let collide = d <= (this.r + other.r);
    return collide
}
```
If we wanted to get real silly we could even do this in as a one-liner

```javascript
checkDist(other){
    return dist(this.x, this.y, other.x, other.y) <= (this.r + other.r);
}
```
But I fear that might be going a bit too far. 

## Check each and every ball

![]({{site.baseurl}}/img/spheres-colliding-02.png)

How then do we deal with a giant array of objects?How do we think about this algorithmically? Let's think consider a simple example with 4 balls. The naive way to think about this is that we need to check every ball against every other ball.

```javascript
for(let ball in balls){
    for(let other in others){
        check ball against other;
    }
}
```
But we can do better! First we need to realize that we don't want to check the distance between a ball and itself. Secondly we can realize that the check goes both ways. If `balls[0]` collides with `balls[1]` then the opposite is true. So in reality we need to check the first ball against every other ball, but we don't have to check the second against the first or second, and we don't have to check the third against the first, second,or third and so on. We can now rewrite this as:

```javascript
for(let i = 0; i < balls.length; i++){
    for(let j = i +1; j < balls.length; j_++){
        check balls[i] against balls[j]
    }
}
```
Wahoo!

## Video Explanation

This gives an explanation of object interaction with a mouse but the same concept applies.

<iframe width="640" height="340" src="https://www.youtube.com/embed/TaN5At5RWH8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
