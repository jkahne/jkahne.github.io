---
layout: post
title:  Surround text in VIM
date:   2016-07-08
tags: [til, vim]
published: false
author: JK
---

A reminder to use the awesome [Surround.vim](https://github.com/tpope/vim-surround) plugin.

Visually select the text you want to surround, hit Shift-S, type in what you want to surround it with, then Enter.

![vim](/assets/img/surround_vim.gif)

If you'd like to surround a word with brackets, you can use

{% highlight vim %}
  ysiw] #=> [word]
  ysiw[ #=> [ word ]
{% endhighlight %}
