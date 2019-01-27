---
title: "A bit about Git"
---
#{{page.title}}

Now the moment of truth. Let's learn a little bit more about what p5.js is and what it can do. This video will give you a brief introduction to p5.js and provide a bunch of examples

<iframe width="{{site.data.course.iframe_width}}" height="350"  src="https://hello.p5js.org"> </iframe>

## Daniel Shiffman
Throughout this course we will be drawing heavily from Daniel Shiffman's _Introduction to Programming with p5.js_ tutorials on [YouTube](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA). They are very well considered and he's a pretty funny guy. To get us started, here's the first video in the series
<iframe width="{{site.data.course.iframe_width}}" height="315"  src="https://www.youtube.com/embed/8j0UDiN7my4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Try it out yourself.
Using the code below, see if you can change the size of the rectangle to be centered in the window and be twice as big.

<script type="text/p5" data-autoplay data-width="240" data-preview-width="320">
function setup(){}
  createCanvas(300, 100);
  background(220);
  rect(20,40,80,30);
}
</script>

### Now try it using repl.it

1. Navigate to [repl.it](http://www.repl.it/repls) and click "Start Coding" ![]({{site.baseurl}}/img/replit-signup/replit5.png)
2. Select "HTML, CSS, JS" ![]({{site.baseurl}}/img/replit-signup/replit6.png)
3. You should now see a coding environment where you can write all of your code. In order to use p5.js we'll need to add the package. Click on "Packages" ![]({{site.baseurl}}/img/replit-signup/replit7.png)
4. type p5.js into the search bar and click on the package. ![]({{site.baseurl}}/img/replit-signup/replit8.png)
5. Click on the green "plus" and notice that a new line of code appears in your window.![]({{site.baseurl}}/img/replit-signup/replit9.png)
6. Click on files and then on script.js ![]({{site.baseurl}}/img/replit-signup/replit10.png)
7. Add the following code and click run
```
function setup(){
  createCanvas(300, 100);
  background(220);
  rect(20,40,80,30);
}
```
![]({{site.baseurl}}/img/replit-signup/replit13.png)


## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSNeb_NgUyb4bsArG2Dz3FXD62TsVenqXtXOBGKju2FqiAgg/viewform?embedded=true" width="640" height="1438" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
