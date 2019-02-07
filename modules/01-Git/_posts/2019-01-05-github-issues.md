---
title: 'GitHub Issues'
published: true
---

# {{page.title}}

Often, when developing a project, issues come up; a bug, a new feature, a new desing or layout, etc. Assuming you're working in a collaborative environment it would be useful to have a way of formally addressing and keeping track of these issues. Luckily every repo on GitHub has a section just for this, called "Issues"

>Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. They’re kind of like email—except they can be shared and discussed with the rest of your team. Most software projects have a bug tracker of some kind. GitHub’s tracker is called Issues, and has its own section in every repository.

![](https://guides.github.com/features/issues/navigation-highlight.png)
<p class="caption"><a href="https://guides.github.com/features/issues/navigation-highlight.png">mastering github issues</a></p>

## [Creating an Issue in github](https://help.github.com/articles/creating-an-issue/)

1. On GitHub, navigate to the main page of the repository.
1. Under your repository name, click  Issues.
1. Click New issue.
1. If there are multiple issue types, click Get started next to the type of issue you'd like to open.
1. Type a title and description for your issue.
1. If you're a project maintainer, you can assign the issue to someone, add it to a project board, associate it with a milestone, or apply a label.
1. When you're finished, click Submit new issue.

## Discussion

When an issue is posted, it's good to get feedback from the community. The following is from [GitHub's guide to mastering issues](https://guides.github.com/features/issues/)

### @mentions
@mentions are the way that we reference other GitHub users inside of GitHub Issues. Inside of the description or any comment of the issue, include the @username of another GitHub user to send them a notification. This works very similar to how Twitter uses @mentions.

GitHub like to use the /cc syntax (an abbreviation for carbon copy) to include people in issues:

>It looks like the new widget form is broken on Safari. When I try and create the widget, Safari crashes. This is reproducible on 10.8, but not 10.9. Maybe a browser bug?
/cc @kneath @jresig

This works great if you know the specific users to include, but many times we’re working across teams and don’t really know who might be able to help us. @mentions also work for Teams within your GitHub organization. If you create a Team called browser-bugs under the @acmeinc organization, you can reference the team with @mentions:

> /cc @acmeinc/browser-bugs

This will send notifications to every member of the browser-bugs team.

References
Often times issues are dependent on other issues, or at least relate to them and you’d like to connect the two. You can reference issues by typing in a hashtag plus the issue number.

>Hey @kneath, I think the problem started in #42

When you do this, we’ll create an event inside of issue #42 that looks something like this:

![Screenshot of creating a reference](https://guides.github.com/features/issues/reference.png)
<p class="caption"><a href = "https://guides.github.com/features/issues/reference.png">Screenshot of creating a reference</a></p>
Issue in another repository? Just include the repository before the name like `kneath/example-project#42`.

By prefacing your commits with “Fixes”, “Fixed”, “Fix”, “Closes”, “Closed”, or “Close” when the commit is merged into master, it will also automatically close the issue.

References make it possible to deeply connect the work being done with the bug being tracked, and are a great way to add visibility into the history of your project.

## In class

In the [cs2-student-files](http://www.github.com/fcs-cs/cs2-student-files) repo there is an issue called ["What is Best Flavor of Ice cream"](https://github.com/fcs-cs/cs2-student-files/issues/10) what I'd like you all to do is to try to use github to work collaboratively on deciding what the best ice cream flavor is.