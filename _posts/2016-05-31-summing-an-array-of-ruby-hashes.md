---
layout: post
title:  Summing an Array of Hashes in Ruby
date:   2016-05-31
tags: [ruby, til]
published: false
author: JK
---

The merge method on a hash object can accept a block for a key and the two values of the hashes so you can create a new value from the two hashes.    

{% highlight ruby %}


a = {greeting: 'hello', num: 1}
b = {greeting: ' world', num: 2}

a.merge(b){|key, a_val, b_val| a_val + b_val}
=> {:greeting=>"hello world", :num=>3}

{% endhighlight %}

This can be used when summing an array of hashes, for instance.

{% highlight ruby linenos %}
[
  {:one=>4, :two=>3, :three=>9},
  {:one=>6, :two=>1, :three=>9},
  {:one=>5, :two=>2, :three=>8},
  {:one=>3, :four=>7},
].each_with_object({}){|z, memo| memo.merge!(z){|key,val1, val2| val1+val2} }

=> {:one=>18, :two=>6, :three=>26, :four=>7}
{% endhighlight %}
