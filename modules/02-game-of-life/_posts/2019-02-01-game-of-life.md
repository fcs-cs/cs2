---
title: "John Conway's Game of Life"
---
# John

![](https://upload.wikimedia.org/wikipedia/commons/e/e6/Conways_game_of_life_breeder_animation.gif)

John Conway is a British mathemetician who's interests include knot theory, number theory and combinatorics. Perhaps one of his best known contributions is in the field of cellular automata with something called the "Game of Life"

## Cellular automata
Cellular Automata (CA) is a type of **bottom up** simultion that has its roots in the 1940's with Stanislaw Ulam and John von Neumann. The basic concept is that of a simulation played out on a giant grid. At any time t<sub>n</sub> each cell of the grid can be either "on" or "off." Alive or dead. 0 or 1. In the next time step t<sub>n+1</sub> the sates of all of the cells in the grid are recalculated based on a set of rules, which are predefined ahead of time, and the state of the cell's neighbors.

## Simple example

Let's say that we start with a grid that is 3 x 3 with all cells being 0 except for the center cell.
![]({{site.baseurl}}/img/gol1.png)