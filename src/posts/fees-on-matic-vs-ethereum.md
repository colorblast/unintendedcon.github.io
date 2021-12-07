---
layout: post
title: Daily Fees on Polygon vs Ethereum
date: 2021-09-12T21:39:00Z
description: How much gas are you saving by transacting on Polygon? How are gas fees on Polygon correlated with Ethereum?
keywords:
  - matic
  - polygon
  - crypto
  - ethereum
  - gas
---

![Polygon Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Polygon_logo.svg/1024px-Polygon_logo.svg.png)_<small>Source is [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Polygon__logo.svg)</small>_

## Introduction

Polygon (formerly Matic) is a sidechain off the Ethereum network. Ethereum's high gas fees has resulted in a sprawling ecosystem of L2s, sidechains, and other blockchains seeking to capitalize on Ethereum's leaky user capture (note this is not negative tokenomics for Ethereum, but rather bullish). Today, we'll look into Polygon, a network that allows you to transfer funds from Ethereum for a one-time gas hit, and then make trades with a decent subset of the Ethereum ecosystem (curve, balancer, aave, sushiswap) at super cheap prices. We'll look into how correlated Polygon gas prices are to Ethereum gas prices. This is important because the crypto ecosystem tends to follow a general macro pattern. Bitcoin moves, followed by Ethereum, followed by alts. If Ethereum gas prices increase, do we see movement across the bridge onto Polygon? Do Polygon's gas prices then increase? There are a bunch of interesting questions.

## Methodology

We're going to represent our gas prices in USD. This, of course, is not exactly the best metric given that Ethereum and Polygon are highly volatile. It is useful as an indicator, though, so we're going with that. We'll union the average fees from the Polygon transaction table with the average fees from the Ethereum transaction table in the [Flipside Crypto](https://flipsidecrypto.com) data we're using.

Note that this method is rather limited because it does not take into concern the size of the trades.

## Data

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/0c2e709b-71e8-494e-ad56-22bb4a2502be/427ec238-8511-4243-9e0c-2e28988eb36d" width="800" height="450"></iframe>

We can see from this data that the average fee on Ethereum is over 700x times that of the average fee on Polygon. It's not too clear how correlated they are yet though. We can take a percent.

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/f8aa1398-2720-4449-91cf-7ad96f121e63/8a256466-ea46-46b0-b5f2-2ec05721958e" width="800" height="450"></iframe>

We can see that from June to July MATIC gas fees increased relative to Ethereum and from July to September it decreased dramatically. The reason for this is probably because Polygon incentivized the chain from June to July, causing capital migration and network congestion. Network congestion means higher gas fees. Meanwhile, Ethereum was sleeping on the giant whale of NFTs. As NFTs started to become mainstream, with a particular subset selling for a premium, Ethereum became super congested and Polygon's gas price relative to Ethereum decreased once again. Other than that, there is no particular change in correlation, even when the market entered abnormal conditions such as the recent bitcoin flash crash.

## Conclusions

**Ethereum and Polygon gas fees are highly correlated with a spread percentage of at most 1.4% and averages of 0.02%. Barring a black swan event or macro factors, this is likely to continue.**
