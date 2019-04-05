---
title: Enhanced Loops with ES6
---

# {{page.title}}

Here's a quick aside. By now you've probably written  `for(let i = 0; i < array.length; i++) {blah, blah, blah...` approximately a bazillion times. As fun as it is, it's certainly a bit repetitive. If only there were a better way. Well thanks to ES6 there is! This lesson will cover two ways of iterating over an array without using `for(let i = 0; i < array.length; i++){}`

1. `for...of`
1. `array.forEach()`

## [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

> The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

See the [mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) for a more complete explanation

Let's assume that we have an array `bubbles` of bubble objects that have a `show()` and `move()` method and we want each call these methods for each element in the array. To start we have declare a `for` loop, define a variable for each element in the array then use the `of` keyword and then name the variable. After closing the `for` definition we create the code block with the functions we want to call for each element. e.g.

```javascript
for(let bubble of bubbles){
    bubble.show();
    bubble.move();
}
```

This is useful when we are doing the same thing on **every** element in the array. If we only want to execute this some part of the array you will still need to use the standard form of the `for` loop.

### Video Explanation

<iframe width="640" height="340" src="https://www.youtube.com/embed/Y8sMnRQYr3c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

This is technically an ES5 function but it's still worth taking a look at. It's a bit more abstract, but could save you some extra typing. The `forEach()` Array method can be invoked on any array. For the full documentation see the [Mozilla Foundation's website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). The method takes a `function` as an argument. That function defines what happens for each element in the array. Again, assuming an array `bubbles` we can accomplish the same things as above with the following code:

```javascript
bubbles.forEach(function(bubble) {
    bubble.show();
    bubble.move();
});
```

### Anonymous functions, aka the spooky arrow function.

Starting in ES6, JavaScript supports what are called **anonymous functions.** These are useful when you just need to make a simple function that doesn't quite rise to the occasion of a full blown function. In order to create one we use an arrow written `=>` to indicate its use. On the left hand side we enter in the arguments and on the right hand side we enter the function. We can accomplish the same thing above with the following:

```javascript
bubbles.forEach((bubble) => {
    bubble.show(); 
    bubble.move();
});
```
There's a lot more to learn about anonymous functions if you're interested. Shiffman has a good video on their use which you can watch below. This is extra credit.

<iframe width="640" height="340" src="https://www.youtube.com/embed/mrYMzpbFz18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Comprehension Check

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeAhbftovMgSDlJJXezOgEs_6Iryw89EvdMBlfJrcSC_FSTVA/viewform?embedded=true" width="640" height="1229" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

