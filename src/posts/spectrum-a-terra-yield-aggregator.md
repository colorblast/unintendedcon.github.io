---
layout: post
title: Spectrum, A Terra Yield Aggregator
date: 2021-09-05T14:32:00Z
description: How does Spectrum work?
keywords:
  - luna
  - crypto
  - terra
  - spectrum
  - yield aggregators
---

![Spectrum Protocol](https://old.trybe.one/wp-content/uploads/2021/08/0BkK99d69k5uzEp90-1.jpeg)
<small>_Source: [Loop Markets, urboyMM](https://www.loop.markets/earn-more-with-spectrum-protocol-2/)_</small>

## Introduction

I've recently been diving into yield aggregators. The purpose of a yield aggregator is to maximize your yield through stuff like auto-compounding, boosting, and [other financial strategies](https://spectrum-protocol.medium.com/spectrum-protocol-the-2nd-roadmap-dc72ec70282f). The auto-compounding can either increase your share of rewards (through stuff like staking) or your share of the pool. Today, we'll dive into Spectrum Finance, the first yield aggregator for the Terra ecosystem. Our goal will be to examine APY flunctations of Spectrum pools and how they compare to native pooling. The first one we'll look at in this article is the Spectrum Pylon-UST pool (disclosure, I am in this vault). The contract address for this contract is 'terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s'.

## Data

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/fd28f8bf-e755-42b8-9dbe-33fb32d44394/f3e27043-c62d-4718-80d1-ddf0b051b044" width="800" height="450"></iframe>

That's deposits. Here are withdrawals.

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/b8967ce9-45fb-400c-963c-bf696421b4c1/e64f563b-d657-4974-8244-1aba2a81ff85" width="800" height="450"></iframe>

Look closely at the axes for deposits vs withdrawals. Insane! Here's the overall volume.

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/4ffb1a20-c242-4c4e-9979-05097a34341c/c257fdac-42f3-45bb-8b76-62916f4fbcc6" width="800" height="450"></iframe>

We see the lines mirror one another since liquidity has to be added symmetrically, i.e. in a 50-50 ratio. What's more interesting is that Spectrum currently offers [two strategies for compounding](https://docs.spec.finance/protocol/vaults). The first involves selling off rewards to obtain more LP. This way provides a higher APY.

The other method involves the fact that Pylon can also be staked for something like 3%. This reduces sell pressure on MINE.

We'll see who is using what strategy, and who might be running a combination of the two.
