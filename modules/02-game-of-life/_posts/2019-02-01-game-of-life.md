---
title: "John Conway's Game of Life"
---
# {{page.title}}

![](https://upload.wikimedia.org/wikipedia/commons/e/e6/Conways_game_of_life_breeder_animation.gif)

John Conway is a British mathemetician who's interests include knot theory, number theory and combinatorics. Perhaps one of his best known contributions is in the field of cellular automata with something called the "Game of Life"

## Cellular automata
Cellular Automata (CA) is a type of **bottom up** simultion that has its roots in the 1940's with Stanislaw Ulam and John von Neumann. The basic concept is that of a simulation played out on a giant grid. At any time t<sub>n</sub> each cell of the grid can be either "on" or "off." Alive or dead. 0 or 1. In the next time step t<sub>n+1</sub> the sates of all of the cells in the grid are recalculated based on a set of rules, which are predefined ahead of time, and the state of the cell's neighbors.

## Simple rules. Surprising results

The beauty of the Game of life is that the rules for the world are very simple, yet there is a surprising amount of complexity and variety that emerges. The following video shows some of the amazing things that have been created from the game of life.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C2vgICfQawE?start=69" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Simple example

Let's say that we start with a grid that is 3 x 3 with all cells being 0 except for the center cell. Now let's add some rules:
- If you are off and you are touching a cell that is on, in the next step you are on.
- If you are on and you are not touching any other cells that are on, in the next step you are off.
- Else, remain as you are.

Now we can set up the initial generation, examine the neighbors, and update the board.

![]({{site.baseurl}}/img/gol_example.png)

### Question: How might you deal with the cells on the edge of the board? What happens when a cell doesn't have all of its neighbors?

## In Class:

Go to [Game of Life](https://bitstorm.org/gameoflife/) and try playing around with the simulation. What do you notice? Can you predict the behavior of a configuration before the simulation starts?