---
layout: post
title: Why Is Web Development So Hard?
date: 2020-01-18 00:29 -0400
description: >-
  - Web development, even way later, still feels very hacky. Why is this case, and what can we do about it?
keywords:
  - web development
  - node.js
  - dependency hell
  - steep learning curve
  - authentication
  - microservice architecture
  - snowpack
---

READ FIRST: The purpose of this post is not to shame web development (particularly node.js development), but to figure out exactly why it's so hard.

My background is primarily that of a backend developer. I find enjoyment in training ML models and deploying things that require complex logic that works towards a clearcut problem.

I, like a certain group of backend developers, tended to regard web development as a complete mess, not worthy of us.
Languages like PHP (so many security flaws) and Javascript (programmed in less than a week!) were powering our web!

Of course, given that the web relies on plain HTML, CSS, and JS at it's core, if I want to create any sort of webapp or site, I needed to ultimately deploy this sort of technology. So when I came up with a startup idea, and began working on it, I shed my notion that JS was bad, in my effort to achieve a solution.

It couldn't be too hard, right? It's just throwing up a page to interface with my backend API, stuff that I could easily handle.

This couldn't turn out to be more wrong. For one, it seems that the terms "backend" and "frontend" are a misnomer and shouldn't be exactly driven along the traditional lines.

When I was building this startup, I realized that I needed authentication to be able to have user accounts and billing. I already knew about JAMStack and about how it was supposed to be easy. I had already deployed my website with Gatsby. Auth shouldn't take more than a day or so I thought.

## SSR / CSR Black Magic

Turns out a static site generator is not the recommended method for this sort of thing. Since Gatsby and other static site generators are producing static content, they can't do serverside things like generate and validate JWT tokens (don't laugh at me yet, frontend devs, it only gets better).

So the next thing I threw myself at was at NextJS. Gatsby and NextJS (NuxtJS and NestJS too) are the only frameworks dedicated to finding a balance between server-side rendering (SSR) and client-side rendering (CSR).

You might ask, why that matters? Why can't I just bootstrap an app using create-react-app and get it over with?

Well we have to take a trip back to memory lane, where we had simple HTML and CSS pages. These were served on a server. This is called serverside rendering and it's been the traditional standard for web development for a while.

Then React came, where people realized that `oh shit` they could increase their page load times and manage their components better by transpiling and loading all the javascript on the client side, e.g. when the client loads the page. The server doesn't actually render any markup.

This was cool, until people realized that this increased page load speed was coming at the cost of SEO (search engine optimization). Search engines like Google and Duckduckgo were trying to index these pages and finding a bunch of javascript that they couldn't really parse well. This meant SEO taking a hit.

So we now have our current solutions, mentioned above, where we try to find a balance between SSR and CSR, in order to achieve optimal SEO while not crashing our page load speeds. This was all thrown at me, while I was still looking to find an authentication solution.

## Ecosystem Shift

Now, I wasn't about to give up. I found that there were a bunch of tutorials on using something called Passport.js in order to implement authentication.

Many of these articles tended to be old and outdated, and many of them leveraged an authentication as a service to make the tutorial shorter (Auth0, Okta, Amazon Cognito). You would think you would find at least one passable blog post, discussing how to implement local auth without anything extra.

I think part of the reason why this problem exists is just due to the rapid pace of javascript's development and the extremely fast ecosystem shift. What was relevant two years ago, is relevant no more. Besides the obvious negatives in that some of the stuff that is learned becomes useless (a pitfall that occurs everywhere in life), it means that anyone attempting to learn web dev probably finds it much harder to do so.

The rapid state has led to so many packages, each attempting to address the pitfalls of the other, maybe making life _slightly better_, and could potentially be called "a hack of hacks". It's also called dependency hell and bloat.

## Microservice Architecture

Microservices aren't bad. They're fairly good for complicated things and scaling up.

I don't think that a tutorial should tell you to implement a backend API, database connection, frontend, AND auth server in order to create user accounts.

In python, the area I'm familiar with, many things just work. Ken Reitz realizes that the things he makes are intended for humans, to make their lives easier.

## The Real Problem (Choice)

And now the real problem is that anybody who needs to create the bare minimum, a PWA, has to go through all of this. The ecosystem shifts, the constant switching between whether something should be SSRed or CSRed, using today vs "the future".

And bundlers. Until recently, with [Snowpack](https://www.snowpack.dev). I recommend you check them out.

## Is there anything we can do about it?

I think there's way too much focus on the impractical vs practical in documentation. Almost all js libraries have a to-do list demo, things that are fairly simple. When it comes to implementing things like authentication, tokens, and state management in a consistent and easy to understand manner, it's where things become more muddier. It'd be nice if more work went into more practical use of these libraries, rather than demonstrating "haha, faster load times".

## Conclusion

I probably don't know what I'm talking about. As a backend dev, recently transitioning to full-stack, I'm just expressing my opinions. I think there is some validation though, that there is something fundamentally wrong with web development (at least with node.js web development). It doesn't have to be the language. It's definitely not the people. But there is something just so inherently hacky about it, and I feel like we could just do so much better.

Has it been potentially been the case, where we've been applying these small tiny hacks, in this effort to achieve increase scalability, at the cost of the people we were trying to help in the first place?

I acknowledge the pre-framework days were just as hacky. I just feel like the hackiness has just been abstracted a bit, at too much learning cost.

If you feel like this is relevant or would like me to produce more content like this, follow me on [Twitter](https://twitter.com/suchcaptcha). If at least one point resonates, I'd appreciate it.
