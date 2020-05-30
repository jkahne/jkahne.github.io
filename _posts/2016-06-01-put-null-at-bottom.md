---
layout: post
title:  Put null at bottom of queries
date:   2016-05-31
tags: [sql, til]
published: false
author: JK
---


By default, some databases put nulls at the top of the result.  If you need them to be at the bottom, you can do this:


```console
-  scope :by_sale_start, -> { order("sales.sale_starts_at ASC") }
+  scope :by_sale_start, -> { order("-sales.sale_starts_at DESC") }
```
