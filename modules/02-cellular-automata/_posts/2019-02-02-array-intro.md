---
title: Arrays, an Introduction
published: true
---

# {{page.title}}

In order to start building a CA simulation we'll have to take a look at lists and arrays. In JavaScript, an array is a collection of things that can be stored in order and accessed in an orderly way. 

### Initializing
Let's say we wanted to store a list of numbers corresponding to the temperature outside over the course of the day. In order to do that we'll need to **initialize** a new array we can do this in JS with the following
```
let temp = [];
```
If we do this we now have an empty array. If we want to initialize it with some values we could, instead write,
```
let temp = [28,29,33,36,36,37,36,34,30,27];
```
### Accessing values in an array
And we now have a list with 10 elements in it! And if I want to access an element in that list I can use the `[ind]` notation in order to return or set a value. Beware though, the first element in a list is at index 0, so if I want to get the 3rd element in a list I need to get the value at index 2. e.g. 
```
temp[2]
> 33
```

### Modifying values in an array
If I want to change a value in the list I can use the same notation that I used for accessing a value. If I want to change the 9th element from 30 to 29 all I would have to do is type `temp[8] = 29` and voila.

### Adding values to an array
If we want to add values to an array we can use a handy method called `push()` By using the push method I can add a value to the end of a list. In our example, if I want to add the value 26 to the end of the list I can type `temp.push(29)` and we should now have a list with 11 elements in it. We can always check the length of our list with the `length()` property. Simply type `temp.length()` and it will return the length of the array.

There are many more methods that you can use with arrays which we'll cover later. If you are interested a complete list can be found on [Mozilla's website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


The following video explains things well.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oigfaZ5ApsM?end=260" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

