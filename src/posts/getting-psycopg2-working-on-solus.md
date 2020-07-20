---
layout: post
title: Getting psycopg2 working on Solus
date: 2020-06-30T23:43:00Z
description:
  Not as easy as it sounds. <Libpq-fe.h> is not quite where you think it
  is.
keywords:
  - python
  - development
---If you're working on any sort of fullstack project, you're likely to encounter postgres. And if you're working in python with a framework like sanic, responder, or django, you're likely to encounter it's python driver psycopg2.

If you attempt to install a django project, you'll get this error.

![](src/images/libpq-fe.png)

If you search this up, you'll encounter stackoverflow posts like [https://stackoverflow.com/questions/13086073/rails-install-pg-cant-find-the-libpq-fe-h-header](https://stackoverflow.com/questions/13086073/rails-install-pg-cant-find-the-libpq-fe-h-header "this one").

You'll be prompted to install something like libpq-dev. A quick `eopkg search libpq-dev` will turn up nothing, however. The package is actually in postgresql-devel.

    sudo eopkg install postgresql-devel
