---
layout: post
title: How to create an NFT on Polygon
date: 2021-08-19T06:01:00Z
description: NFTs (Non-fungible tokens) don't need to have high minting costs.
keywords:
  - polygon
  - nft
---

## How to create an NFT on Polygon

### Introduction (Skip this if you want to directly get to learning how to mint)

The NFT market is all the rage with top holders splurging on pixels for status symbols (lets ignore the negative implications re inequality).

The NFT market has several things going for it. For one, it has the ability to create new token models and incentives for traditionally ignored or heavily captured sectors. This includes stuff like the music industry (captured), art (does not scale, NFTs capture a weird duality where its limited but has the potential to scale, people are churning out tons of NFTs, see opensea's 2.x% fees), data markets, and variable pricing (basically everything, uber, tickets, reservations, slots, but because we like stability, we create a system where we mostly don't have to see it).

NFTs can be implemented via a given spec, on Ethereum it is EIP-721, on Tezos it is FA2, on Ada it is... technically possible.

Here's [Flow's NFT spec](https://github.com/onflow/flow-nft).

The main place where people go to buy and sell NFTs, though, is on Ethereum. Most stuff happens on Ethereum.

The problem with Ethereum, though, is it is becoming too valuable. As Ethereum increases in value by burning (EIP-1559) and being the gas in the ecosystem to get from one place to the other, the gas price fricken rises.

Opensea minting, from what I last heard, is roughly \$60 a pop, and will only rise unless the gas issue (the main value prop of holding Ethereum!) is dealt with.

Luckily, we have Polygon. Polygon is super duper cheap and has a large subset of the main players from the Ethereum ecosystem. Polygon is designed to be a **sidechain**, where you can offload your Ethereum assets, and pay a simple 1-time Ethereum gas fee, before enjoying the super low cost gas fees on Polygon.

Polygon can do this via a technology called Plasma which has a bunch of theoretical issues that means Polygon has a bunch of newer hipper competitors with stuff like rollups. In practice, though, Polygon is cheaper (like fractions of a cent cheap) and already has a decent network effect.

So I've gone on a long tangent, but you should have a decent understanding now of why you might want to mint an NFT and why you should pick Polygon to do so.

### Tools and Preparation

If you're completely new to crypto, you should first create a crypto wallet, particularly for the Ethereum network. There are many providers out there; the most popular are Metamask and WalletConnect. There are mobile ones like Rainbow and Argent as well.

After depositing or receiving some funds (whether that comes from Coinbase or wherever), we will want to add Polygon to our wallet's networks. If you go to the [Polygon Bridge](https://wallet.matic.network/bridge/) and click the Connect Wallet button (it requires a Metamask, WalletConnect or Coinbase Wallet wallet to do so), the polygon network should be added to your wallet. If you're not on one of these, you should probably google it because I'm not doing that for you. It probably involves messing with remote procedural call (RPC) settings.

Once you have your wallet recognize the Polygon network (MATIC), you can send funds to it. Note that the address is the same as your ethereum address. You can either send assets over the bridge or you can send MATIC from some sort of centralized exchange like Coinbase.

### Minting an NFT on Polygon via OpenSea

A decent number of defi (decentralized finance) platforms support multiple protocols. [Opensea](https://opensea.io/), a popular NFT marketplace, is one of them.

We can navigate to Opensea and connect our wallet. Take care to check your wallet to make sure that it is on the Polygon network. Opensea will prompt us with a message to sign, indicating that we are signing in.

Once that is done, we can click the create button and will see a form for us to mint.

We can upload our photo.

![stickman upload](https://cldup.com/b_FKACNnZL.png)

We can then specify a name (required), external link, description, collection, and a bunch of other various properties.

We'll input a number for the supply to be minted and **change the blockchain that we're minting on from Ethereum to Polygon**.

We can then hit the blue Create button. If the spec for our mint is erc-1155 then the mints should be free.

If we want to sell our NFT, we'll proceed to hit the sell button (with the min listing price we want), approve WETH as the currency we want to receive, and sign a message indicating we want to list our NFT.

As you can see, [Stickman 1 is listed](https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/26824423530929800973442129736692738732447173725311608746105579846424049221642). If anyone wants to buy it (lol), voila now you can.
