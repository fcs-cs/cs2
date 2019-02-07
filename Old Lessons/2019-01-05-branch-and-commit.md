---
title: 'Branch and Commit'
---

#{{page.title}}

When working collaboratively on a code repository, it's critical that we maintain a working main branch at all times. tinkering directly with the main branch is generally not such a good idea. A better idea is to create a branch and work on that until you are satisfied with the changes and then bring them back into the master branch. 

In this exercise we will be working with the [cs2-student-files](http://www.github.com/fcs-cs/cs2-student-files) to create a list of the best ice cream flavors. Right now, the cs2-student-files lives on github as a `remote` repository. You can edit the files directly on github.com but we'd like to be able to work with them locally on our computer. 

Perviously you `forked` the repository into your own github account which is a great way to work, for those outside of an organization to help out. However, assuming we are all working together on a project you can gain direct access to the repository. In this instance we will start by making a `clone` instead. 

## Cloning a Repo.

Cloning a repo is the process by which you download a repository to your computer so that you can work on them locally. This is a pretty simple process which the video below will explain

<iframe width="560" height="315" src="https://www.youtube.com/embed/9eZYcPL7tUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Simple, eh? Let's keep going

## Branch and Commit

Let's say that you're in charge or adding some new piece of functionality to the code base. The first thing you would do, according to the github flow, would be to create a branch. However, since we are all collaborating on making this list of great ice cream flavors, I've gone ahead and made a branch called **"ideas"** which you can `checkout` at the bottom of the screen.
![]({{site.baseurl}}/img/ideas-branch.png)

Now that we have the branch we can go make our changes. The video below shows the process

<iframe width="600" height="340" src="https://www.youtube.com/embed/_zWxx7itva0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Did it work as you expected?