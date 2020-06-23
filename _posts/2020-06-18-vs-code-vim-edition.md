---
title: "VS Code: VIM Edition"
published: false
date: 2020-06-18
tags: [vim, editor, vscode]
author: Jeremy
img: "/assets/img/texas-sized-10-4.png"
---

As a long time VIM user, I've built up a lot of muscle memory in my hands when I sit at the keyboard. I feel out of place whenever I don't have my key bindings that I've spent upwards of 20 years piecing together.

I'm also a mentor and a pair-programming advocate. When my pair doesn't know VIM, I pick up my pairs editor. Learning VIM isn't at the top of their todo list. I picked up Atom a few years ago and after installing the VIM plugin and configuring a few keybindings, I was set. I only mapped over my most used keybinding and that allowed me to edit like I'm used to and allowed my pair to edit in "normal" Atom mode.

Now VS Code is here and gaining popularity fast. I downloaded VS Code about a year ago but at the time it was woefully inadequate to mimic what I needed from VIM. As far as I could tell, it couldn't do vertical splits or move from one panel to another with a key command. I don't remember the specifics, but I was unable to successfully use VS Code with the vim plugin to mimic my most basic workflows.

Until now.

I've heard there has been a lot of regular updates so I decided to try again. I'd occassionally see a feature built in that made me a little jealous so I had to give it another try. I downloaded it earlier this week and spent some time customizing the VIM plugin and editor settings and I'm happy with the results. I don't mean just passable, but pretty good to keep using even when I'm not pairing.

Anyway, let's take a look at how I have my VS Code configured. Of course we'll need the [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) plugin.  We'll also need the [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) plugin so that we can easily bounce back and forth between places in the code, similar to using marks in VIM.


#### use jk and jj in place of esc

the first thing blah blah blah
```
    "vim.insertModeKeyBindings": [
        { "before": [ "j", "k" ], "after": [ "<Esc>" ] },
        { "before": [ "j", "j" ], "after": [ "<Esc>" ] }
    ]
```

```
    "vim.visualModeKeyBindingsNonRecursive": [
        { "before": [ "p", ], "after": [ "p", "g", "v", "y" ] }
    ],
```






[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)



![Texas sized 10-4](/assets/img/texas-sized-10-4.png)