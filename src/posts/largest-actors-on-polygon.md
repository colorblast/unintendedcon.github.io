---
layout: post
title: Largest Actors on Polygon
date: 2021-09-15T15:35:00Z
description: What's popping on Polygon?
keywords:
  - whales
  - crypto
  - polygon
  - matic
---

Today we'll look at daily volume on Polygon of select addresses for MATIC, USDC, USDT, WETH, and WBTC. We want to know what contracts these addresses are interacting with and how much overlap there is in between these addresses. This will give us a better understanding of how the ecosystem is moving and allow us to preplan moves in advance (we can see who is accumulating where).

Note that this approach is somewhat limited as there are a myriad amount of ways to hide one's activity. You could use several wallets (even creating wallets programmatically) or slowly drip funds into your desired token. However, after the [recent Nate from Opensea hubbub](https://twitter.com/ZuwuTV/status/1437921263394115584) ([lol](https://twitter.com/BoredPimp/status/1437989964680032264)), it's probably safe to say that we're still fairly early and actors aren't super sophisticated.

## Hypothesis

I will venture out a guess and say that over 90% of these accounts will be some sort of bot. It could be an arbitrage bot. It could be a MEV bot. It could be a copy-cat bot like the one that followed my entry into a super low TVL polygon farm. By sheer volume, though, since bots can operate all hours of the day, I'd say big advantage to bots here.

## Methodology

We will be using [Flipside Crypto](https://flipsidecrypto.com) data. Specifically, we will be using the polygon transaction table filtered to transactions with our select currency, joining them to udm_events to get the balances, and then grabbing the top 10 addresses.

## Top 10 Addresses by MATIC volume

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/65347f43-476c-4960-ae46-3c97ddaef5b9/54f80b43-0b99-4a5f-b08e-13fe68d110cf" width="800" height="450"></iframe>
