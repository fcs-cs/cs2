---
title: Acceleration
---

# {{page.title}}

In the last lesson we saw how we can use vectors to represent position/location and velocity, which is a change in position. In this lesson we will examine how we can use vectors to model acceleration, which is a change in velocity.

## Constant Acceleration - Gravity

The most universal acceleration that we encounter is gravity. For the purpose of this lesson let's assume that gravity is a constant, i.e. we're not going to deal with relativity. 

Gravity is a force that is always acting on an object down towards the center of mass at _9.8 m/s<sup>2</sup>_ You may be familiar with [free body diagrams](https://en.wikipedia.org/wiki/Free_body_diagram) from physics, which are a great way of thinking about how forces act on an object. If you're not, please read through the wiki link above. In simplest terms we can calculate what happens to a body (object) in the next time step by looking at all of the forces (vectors) acting on that body at any given time. For example lets say we have release a ball from rest and let it drop, without friction, due to the force of gravity. We could draw a FBD with one vector pointing down with a length equal to the force of gravity.

![]({{site.baseurl}}/img/vectors/acceleration-01.png)

In the next time step (frame of the draw loop) the ball will move exactly the length of the acceleration vector. But what happens in the next time step? Now the ball is already moving with some velocity while still being influenced by gravity. 

![]({{site.baseurl}}/img/vectors/acceleration-02.png)

The beauty of vectors is that we can just add acceleration to velocity and velocity to location to find the next location. Visually we can think of this as just placing the velocity vector at the end of the acceleration vector to find the resulting total vector.

<iframe width="100%" height="600" frameborder="0" src="https://editor.p5js.org/mdarfler/sketches/434eF3wj0"></iframe>

Lovely. Let's keep going.

What if instead of just dropping the ball straight down from the top what if we tried to throw the ball across the screen. We can imagine that when the ball is thrown is is given some initial velocity _v_ that has some amount of _x_ and some amount of _y_. If we draw a FBD it might look something like this.

![]({{site.baseurl}}/img/vectors/acceleration-04.png)

If we add the two vectors together by arranging them tip to tail we can find the resulting vector which will define how the ball moves in the next time step.

![]({{site.baseurl}}/img/vectors/acceleration-05.png)

<iframe width="100%" height="600" frameborder="0" src="https://editor.p5js.org/mdarfler/sketches/BIJ5rb9Vq"></iframe>

