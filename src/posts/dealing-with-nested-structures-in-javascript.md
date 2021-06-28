---
layout: post
title: Dealing with nested structures in javascript
date: 2021-06-27T22:59:00Z
description: Javascript is pass by reference rather than pass by value.
keywords:
  - JSON
  - mutation
  - objects
  - javascript
---

I recently had to implement a controlled nested checkbox component. This component had two types of checkboxes, regular children checkboxes and group checkboxes which reflected the value of the children in its group. We have to think about how exactly we go about mutating a value that is deep inside the the nested object.

Since we are returning a new state in our render tree, we need to track the elements that we traverse through. Each time we encounter a group, we track it respective to its child elements. Now, in the onChange handler, we can access this array of parent elements. In addition, we also need to maintain a direct reference to the object. We can pass that as a prop as well. That means in the handler, we can iterate through the parents from the original object reference, before toggling our checkbox value.

If we return our original reference object to our change handler, we'll see that this doesn't quite work yet. This is because React only rerenders on changes to its props. We can deal with this easily by reassigning our direct reference to a new object that contains its exact same keys. We spread our reference's properties.
