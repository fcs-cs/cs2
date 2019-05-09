---
title: Mouse Seeking Behavior
---

# {{page.title}}

Gravity is all well and good, but there are lots of great programs out there that can model gravity in collisions just fine, so why reinvent the wheel. What we want to do is to start creating some objects that have feelings, hopes and dreams, desires... In this lesson we'll try to understand how to make an object move towards, or seek out something on the screen. In our case, the mouse.

## Getting to there from here - Vector Subtraction

If we want to know how we get from here to there, as with velocity, we simply add the two vectors together and voila, we're there. But what if we know where there is but we don't know how to get there from here? Well that's where vector **subtraction** comes into play.

![]({{site.baseurl}}/img/vectors/subtraction-01.png)

So how do I get to there from here? Algebraically, its similar to addition with a - instead of a +. 

_v - u = (v.x - u.x, v.y - u.y)_.


Geometrically we would take our current position vector, **reverse** the direction and place it on the end of the position vector of where we are going. If we "add" those two vectors together we are left with a vector that points from here to there. 

![]({{site.baseurl}}/img/vectors/subtraction-02.png)

In code we can use the `sub()` method to subtract one value from the other. Typically we want to call the `sub()` method on the position vector of where we want to go and subtract from it where we are. e.g. `there.sub(here)` If we do it the other way we'll just get a vector pointing in the opposite direction. 

<iframe width="100%" height="600" frameborder="0" src="https://editor.p5js.org/mdarfler/sketches/JMMQtJrxb"></iframe>

In the example above a vector is drawn from the center of the screen to the mouse location using `mouse.sub(center)` to create the vector.


## Seek the mouse

With this information we could easily write some code that would instantly move an object from its current location to the mouse by just applying the vector that resulted from the subtraction of its location vector from the mouse vector as a force.

```javascript
function draw(){
  mouse = createVector(mouseX,mouseY);
  let subVector = mouse.sub(pos);
  pos.add(subVector);
}
```

### Max Speed

But unless this object moves at the speed of light and can stop on a dime this is pretty unrealistic. What is more likely is that our object can only move at some maximum speed. The simplest way of doing this is with the `limit()` method. When called on a vector `limit()` receives a number as an argument which represents the maximum magnitude of the vector. e.g. `vel.limit(5)` would limit the maximum euclidean distance defined by the velocity vector to 5.

```javascript
function draw(){
  mouse = createVector(mouseX,mouseY);
  let subVector = mouse.sub(pos);
  let vel = subVector.limit(5);
  pos.add(vel);
}
```

### Vision

<iframe width="600" height="240" frameborder="0" src="https://editor.p5js.org/mdarfler/embed/5LOkGTMYn"></iframe>
