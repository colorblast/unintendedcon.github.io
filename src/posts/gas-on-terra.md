---
layout: post
title: Actual Gas Usage on Terra
date: 2021-09-12T19:41:00Z
description: How much gas can you get away with?
keywords:
  - luna
  - crypto
  - terra
  - gas
---

## Introduction

Gas on Terra is fairly cheap. It's usually a couple cents or so and is because swaps or transfers are like .0002 of a Luna or something. Interaction with the rest of the Terra ecosystem uses UST for gas, with a usual fixed price of 0.5UST or so. We're interested in how much the gas limit price might be since converting Luna to UST is pretty much a given if you want to interact with the Terra smart contract ecosystem. If we're moving a large amount of money (particularly in adverse market conditions such as a bank run!) we'd like to be able to bridge our money to some sort of stablecoin (ust and anchor protocol!) without paying excessive gas costs. We'll look at the gas used and gas limit for the largest 5 transactions by USD in the past 30 days to get an indicator of what this might look like.

## Definitions

We go by the 5 largest transactions since more money gets moved during adverse conditions. Additionally, we go by value in USD rather than some other relative indicator such as value in Luna. Bread and other stuff is still largely denominated in USD.

## Methodology

We will be taking our data from Flipside Crypto's transfer and swap tables. These represent native swaps / transfers on Terra. We will take all the transactions from the past 30 days for each tables and union them together. We can then order them by the amount in USD they represent and take only the top 5. We will then run a select statement that grabs the gas used and gas limit from the transactions table, looking the transactions up by their transaction ids[^1].

This method makes the assumption that the swaps are mostly fair and are not skewed since it relies on token0's price in USD as the price. A more thorough analysis would also look at the price of token1 as well and compare the difference between the two.

## Data

<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/77d3fe06-df6c-4a47-b8ce-ab86714d48c8/46eb5edc-2559-4934-b768-af063aafc3f3" width="800" height="450"></iframe>

We can see that all of these transactions consume only 80% of the gas specified in their gas limits. The gas limit is necessarily higher to have a buffer zone to make sure the transactions go through.

The fact that the gas cost percentage is uniform among all 5 of them during a time when Terra has seen a massive increase in network activity is a fairly good thing. It doesn't really mean much, however, since this is more of a good practice to do on all networks.

## Conclusions

**Gas costs on Terra are fairly standard and are low-cost. You can expect your transaction to go through usually if you have a 20% buffer zone.**

## Appendix

[^1]: Here's the SQL for this method.

```sql
with txs_transfers as (select tx_id, event_amount_usd from terra.transfers where event_amount_usd IS NOT NULL and block_timestamp::date > CURRENT_DATE - 30),
txs_swaps as (select tx_id, token_0_amount_usd as event_amount_usd from terra.swaps where block_timestamp::date > CURRENT_DATE - 30),
tx_ids as (select * from (select * from txs_transfers union all select * from txs_swaps) order by event_amount_usd desc limit 5)

select tx_id, gas_used / gas_wanted from terra.transactions where tx_id in (select tx_id from tx_ids);
```
