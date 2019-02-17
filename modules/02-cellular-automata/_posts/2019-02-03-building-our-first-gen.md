---
title: Building a CA
---

# {{page.title}}

In order to start building our CA we'll need to set up, you guessed it, an array to store values for each generation. If we go back to the first lesson on CA, we learned that CA's exist on a grid in this case it's a 1D grid. Each cell in that grid can either be on or off, 0 or 1. 

To begin we'll need to make an array of length 100. In the last lesson we saw how to initiallize a list with some values. Now as tempting as it is to type let `gen1 = [0,0,0,0,0,0,0,0,...,1,0,0,0,0,0,0,0,...]` There's got to be a better way, and there is.

##Array().fill()

Rember in the last video that there were a bunch of methods that could be used in conjuction with an array? well let's look at another one. the .fill() method can be used to fill an array with any value. e.g.

``` JavaScript
let list = [1,2,3,4];
list.fill(0);
console.log(list)
> [0,0,0,0]
```
That's a good start, but again, if I need 100 0's that's still too much typing. Instead we can initialize an array of length _n_ and then fill it with a value and it looks like this:
``` JavaScript
let list = Array(10).fill(0);
console.log(list);
> [0,0,0,0,0,0,0,0,0,0,0]
```
As before, with the Elementary CA we always start the center cell to 1 and everything else to 0, so we acutally need 101 cells with all of them 0's except for the 50th element
```
let gen1 = Array(101).fill(0);
gen1[50] = 1
```

## Display