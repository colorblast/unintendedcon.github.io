---
layout: post
title: Summarizing Robin Hanson's Logarithmic Market Scoring Rule Paper
date: 2021-08-19T06:01:00Z
description: How exactly do AMMs function (logarithmic market scoring rule)?
keywords:
  - amm
  - robin hanson
  - logarithmic market scoring rule
---

_this is a draft and wip_

Automated market makers (AMMs) are algorithmic market makers, most of them tend to follow some sort of bond curve. The most famous, uniswap, operates under a constant product bond curve, generalized as x \* y = k. For more on that, you can check out [Haseeb Qureshi's excellent explainer](https://haseebq.com/what-explains-the-rise-of-amms/) on how they work. He explains the three most popular curves (x \* y, x + y, stable), impermanent loss, and why AMMs are good for gas costs.

Most AMMs rely on Robin Hanson's logarithmic market scoring rule. Hanson explains in this paper that predicting stuff is hard. Stuff like corruption, deliberate misleading information, the sheer irrationality of humans, and power would seem to reduce convergence. Nevertheless, trends and rational patterns do appear. Asset commoditization quantify assets and enables exchanges that most would say is relatively fair. Hanson is particularly enamored with prediction markets for their ability to create discrete probability clusters and speculative markets which quantifies a value for an asset. Hanson seeks to tie these two together into something called a market scoring rule. Since probability clusters can't produce a definitive quantity, and definitive quantities tell us nothing about the probability, Hanson proposes an algorithm where anyone may submit a given asset, it's probability, and it's price and anyone may alter that asset's probability and profit conditional on paying the last person's price.

The effect that this has is
