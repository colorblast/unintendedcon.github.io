---
layout: post
title: Average Terra APY
date: 2021-09-10T22:42:00Z
description: What APY can you expect from staking your Luna going forward?
keywords:
  - luna
  - crypto
  - terra
  - staking
---

## Introduction

In case you are not familiar, Terra is a proof of stake (POS) network built upon the Cosmos SDK. By staking up your Luna (locking it up), Terra is able to secure itself. This staking obviously comes with opportunity cost and risk downside, so the network incentivizes it through inflationary block rewards. Today, we'll look at what APY Luna staking has been for the past 6 months so we can determine from a financial standpoint whether staking your Luna is worth it.

## Some definitions

I'm still a relative crypto / data analytics greenhorn, so I'm going to go by an APY that is not specific to whatever validator you are using. That is, I am including the validator commission in the APY calculation. APY will not be counted based off USD value since Luna is short-term volatile ([long term who knows!](https://twitter.com/balajis/status/1436065199665008641)) and the price changes rather considerably. We're also only considering the staking rewards that is in Luna, not in KRT or any of the other stablecoins in the Terra ecosystem.

## Methodology

We're taking all the rewards blocks in the terra transitions table, grabbing all the Luna rewards and averaging them. The group by clause for this averaging is the date associated with the reward. We then divide this reward in half to account for the validator's guaranteed half. This gets us average delegator rewards per day. We can then tabulate the rolling staked balance per day and divide by this to get the day by day apr. We can then finally convert the apr to an apy using the conventional apr to apy formula. We will use a compounding frequency of a day.

## Data

We can first pull in Luna APR.

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/8928d514-28ae-4459-b3f9-c2f490dfb4dd/e01ba58c-4310-4294-b3f5-23de7ae0b80b" width="800" height="450"></iframe>

You can multiply the result by 100 to get the day by day percent APR. We see significant increases in APR in March, May, and September, when stakers unstaked their Luna in preparation for significant upside (crypto bullrun, columbus-5) and sigificant downside (may crash).

Here's what the APY would be for each projected day.

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/9fee2f27-7c92-41a3-be6e-ac53fc53dd54/7f2a3dbe-e339-4ee4-8570-2c969115fe5f" width="800" height="450"></iframe>

We can see that the overall APY tracks to around 5 or 6% daily with significant spikes. This tracks to the [staking rewards APY](https://www.stakingrewards.com/earn/terra/) which is 5.87%.

## Is it worth it?

We can see that Terra staking is at around a 8% APY (from 6% rewards + another 2% inflation). Whether it is worth it depends on a person's risk appetite and options. It's still probably better than the existing financial products out there, but it's not particularly high for where crypto is at. It's also relatively low risk, albeit alot of the apy comes from people unstaking in advance of arbitrage opportunity. If you're starting out, I'd think staking Luna in this fashion is a great choice. Stuff like liquid staking via lido or staking cash flows via stader should mean you get the best of both worlds, where staking does not result in opportunity cost.
