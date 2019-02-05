---
title: 'Github Flow'
published: true
---

# {{page.title}}

Git and Github are design to be flexible and suit the needs of individual coders and enterprise coders a like, which means that it can do **A LOT !** What that means is that its easy to get your self in to the weeds without making a lot of progress. Luckily, you're not the first person to use github, and there are some well established workflows that will help us all collaborate effectively with code. While there are many different workflows, in the class we will look at the basic "GitHub Flow"

![](https://lucamezzalira.files.wordpress.com/2014/03/screen-shot-2014-03-08-at-23-07-361.png)
<p class="caption"><a href="https://lucamezzalira.files.wordpress.com/2014/03/screen-shot-2014-03-08-at-23-07-361.png">lucamezzalir</a></p>
The GitHub workflow has 5 steps

1. Branch
2. Make Changes
3. Make Pull Request
4. Discussion
5. Merge

There is a great explaination on [GitHub's website](https://guides.github.com/introduction/flow/)

However, Before we get started there are a couple of important things that we have to do first.

### Install Git on your local computer

#### Installing on Linux
If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the package management tool that comes with your distribution. If you’re on Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), you can use dnf:

`$ sudo dnf install git-all`
If you’re on a Debian-based distribution, such as Ubuntu, try apt:

`$ sudo apt install git-all`
For more options, there are instructions for installing on several different Unix distributions on the Git website, at http://git-scm.com/download/linux.

#### Installing on macOS
There are several ways to install Git on a Mac. The easiest is probably to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time.

`$ git --version`
If you don’t have it installed already, it will prompt you to install it.

If you want a more up to date version, you can also install it via a binary installer. A macOS Git installer is maintained and available for download at the Git website, at http://git-scm.com/download/mac.

#### Installing on Windows
There are also a few ways to install Git on Windows. The most official build is available for download on the Git website. Just go to http://git-scm.com/download/win and the download will start automatically. Note that this is a project called Git for Windows, which is separate from Git itself; for more information on it, go to https://git-for-windows.github.io/.

To get an automated installation you can use the Git Chocolatey package. Note that the Chocolatey package is community maintained.

### [VSCode GitHub Pull Request Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

> Review and manage your GitHub pull requests directly in VS Code

This extension allows you to review and manage GitHub pull requests in Visual Studio Code. The support includes:
- Authenticating and connecting VS Code to GitHub.
- Listing and browsing PRs from within VS Code.
- Reviewing PRs from within VS Code with in-editor commenting.
- Validating PRs from within VS Code with easy checkouts.
- Terminal integration that enables UI and CLIs to co-exist.

![Demo](https://github.com/Microsoft/vscode-pull-request-github/blob/master/.readme/demo.gif?raw=true)

It's easy to get started with GitHub Pull Requests for Visual Studio Code. Simply follow these steps to get started.

1. Make sure you have VSCode version 1.27.0 or higher.
1. Download the extension from [the marketplace](https://aka.ms/vscodepr-download).
1. Reload VS Code after the installation (click the reload button next to the extension).
1. Open your desired GitHub repository.
1. Go to the SCM Viewlet, and you should see the `GitHub Pull Requests` treeview. On the first load, it will appear collapsed at the bottom of the viewlet.
1. A notification should appear asking you to sign in to GitHub; follow the directions to authenticate.
1. You should be good to go!

## CC - GitHub Flow Overview
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYIqHMNMJpHCqY5Vek1Nxz-ut1Kf17oAL07Sfg5XYuMtjzVw/viewform?embedded=true" width="640" height="1861" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>