---
layout: post
title: Quick Guide To Recursive SQL Queries
date: 2021-07-22T07:31:00Z
description: Recursive SQL Queries are actually not that bad!
keywords:
  - sql
  - recursion
---

If you're ever working with tree-like data where you want to query all subtrees or subdirectories of a given node, recursive SQL queries are the way to go.

Your generic recursive SQL query will need to start with the WITH clause since we are creating a subquery that will be run multiple times. We then specify the RECURSIVE option and give the query a name.

Inside the query, we want to specify our starting node, the nodes we want to recurse through, and a JOIN statement where we relate the parent node to the child nodes.

We can express the first two parts via a UNION ALL query since the node types should be the same. The JOIN statement will be on the property that expresses the relationship between the nodes.

After you wrap up the WITH subquery, you can easily query it.

For more on this, see [https://www.sql-workbench.eu/comparison/recursive_queries.html](https://www.sql-workbench.eu/comparison/recursive_queries.html). 