---
title: "Cellular Automata"
published: true
---
# {{page.title}}

>Cellular automata are discrete dynamical systems with simple construction but complex self-organizing behaviour. Evidence is presented that all one-dimensional cellular automata fall into four distinct universality classes... The fourth class is probably capable of **universal computation**, so that properties of its infinite time behaviour are undecidable.
> —Stephen Wolfram

![](https://members.loria.fr/nazim.fates/expoBarthelemySultra/IMG_7516Np.jpg)
<p class="caption"><a href="https://members.loria.fr/nazim.fates/research.html">https://members.loria.fr/nazim.fates/research.html</a></p>

Cellular Automata (CA) is a type of **bottom up** simultion that has its roots in the 1940's with Stanislaw Ulam and John von Neumann. The basic concept is that of a simulation played out on a giant grid. At any time t<sub>n</sub> each cell of the grid can be either "on" or "off." Alive or dead. 0 or 1. In the next time step t<sub>n+1</sub> the sates of all of the cells in the grid are recalculated based on a set of rules, which are predefined ahead of time, and the state of the cell's neighbors.
![]({{site.baseurl}}/img/nature-of-code-title-bar.png)

Daniel Shiffman has a great explanation of Cellular Automata in his book ["The Nature of Code"](https://natureofcode.com). [Please read upto and including 7.2](https://natureofcode.com/book/chapter-7-cellular-automata/)

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSegadmNaAFoA4B1BUeilzv2kW_iZQgQWZgwcN1PsD5WPckWHQ/viewform)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegadmNaAFoA4B1BUeilzv2kW_iZQgQWZgwcN1PsD5WPckWHQ/viewform?embedded=true" width="100%" height="1987" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## In Class
In order for us to build more understanding about how an Elementary CA works we attempt to make an analog version using sticky notes. For this project you will need
- a pack of sticky notes. The smaller the sticky note, the higher the resolution, the more generations you'll have to computer
- a table or flat surface to stick the notes to.

### Let's get started

- To start, place one sticky note at the center top of your table. This is generation one. In order to calculate the next generation we will need a set of rules. As above, rules are defined by an 8-bit, binary value.
![](https://natureofcode.com/book/imgs/chapter07/ch07_11.png)
Another way to represent this visually, not numerically would be like this:
![](https://natureofcode.com/book/imgs/chapter07/ch07_14.png)

- Next, Choose one of the following rulesets:
```
00011110
00110110
00111100
00111110
01111110
10010110
```
- At the top of your table at one of the corners create a visual representation of your ruleset like the picture above.
- Now that we have our first generation and our rules we can really get going
- Using your ruleset calculate the next generation of your CA. For the purposes of this project, let's assume that a sticky note is 1 and not a sticky note is a 1. 
  - In the example above, we don't need to look at much becuase wherever we have `000` the result is `0` but as we approach the center we'll encounter a cell that is off `0` who has one `0` neighbor to the left and one `1` neighbor to the right.
  - If we look at our rule for this example `001`, a cell that is off with a one "on" neighbor to the right becomes "on" in the next generation. So we would place a sticky note just below and to the left of our one "on" cell in the first generation.
  - As we move along let's examine the one "on" cell in the first generation. It has two "off" neighbors, `010` and so it turns "off" in the next generation. So no sticky note.
  - The last cell we have to look at is the one to the right of our "on" cell from the first generation. This cells configuration is `100` which means that it turns "on" in the next generation, so we'll put a sticky note below and to the left of the "on" cell in the first generation. 
  - If we followed this correctly, the first two generations should look like this:![]({{site.baseurl}}//img/rule90-2gen.png)
- Continue growing your CA until you run out of room.

### Analysis
1. Convert your binary rulset into a decimal representation
2. Try to describe what you made to someone who can't see your creation
3. Do you think that there is an underlying logic to what you've created?