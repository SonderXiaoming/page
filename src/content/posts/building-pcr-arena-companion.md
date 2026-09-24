---
title: "The Half-Full Queue: Scaling PCR Arena Companion Across Four Game Environments"
published: 2026-09-24
description: "How PCR Arena Companion evolved from account-bound polling to prioritized work and a shared account pool."
tags: [Python, Async, Architecture, Bot, Princess Connect]
category: Engineering
lang: en
draft: false
pinned: false
---

An arena lookup in Princess Connect is time-sensitive. A player wants to inspect an opponent and decide what to do while the matchup is still relevant. This project grew from community work, especially [cc004's `pcrjjc2`](https://github.com/cc004/pcrjjc2), which rebuilt the earlier arena plugin to run without a separate backend API. The setup I started from relied on a shared game account to serve requests. For a small number of players, it was fast enough. As more players asked for lookups and rank-change notifications, waiting for that account became a visible part of the experience.

Adding accounts sounded like the obvious fix, but it raised a scheduling question: which account should take the next lookup, and should a player's direct request wait behind an entire round of routine notifications?

## More Accounts, Same Long-Running Loops

Early multi-account adaptations increased capacity by starting a persistent worker for each query account. My first public [PCR Arena Companion implementation](https://github.com/SonderXiaoming/pcrjjc_huannai/blob/main/query.py), developed from that community lineage, follows this pattern: each account has an asynchronous `while True` worker consuming jobs from a shared priority queue. Faster workers could already take more jobs from that shared queue. However, account use, request processing, and notification callbacks remained inside each persistent worker. Adding more workers also did not, by itself, decide when to enqueue the next round of background checks.

This is often described casually as “more threads,” but the published Python code uses asynchronous tasks. The later refactor made account availability and task dispatch explicit; the existence of a long-running loop alone does not imply busy-waiting or wasted CPU.

## Four Environments and Two Kinds of Work

The next public [PCR Arena Companion 2](https://github.com/SonderXiaoming/pcrjjc_huannai2) expanded support across four query environments: Bilibili, channel server, Taiwan server 1, and the other Taiwan servers. Its [platform definitions](https://github.com/SonderXiaoming/pcrjjc_huannai2/blob/main/var.py) and [query code](https://github.com/SonderXiaoming/pcrjjc_huannai2/blob/main/query.py) show a separate priority queue for each environment. A direct lookup gets a higher priority than the routine pass that checks bound users for notification changes. That means a player asking for information now can move ahead of background polling already waiting in the same environment.

This version still assigned a long-running queue consumer to each query account. It was a substantial step in organizing work by region and urgency, but the later account-pool design had not yet appeared in the public `huannai2` code.

## Separating Jobs from Accounts

In my later `pcrjjc5_huannai` implementation, each of the four environments has an `AccountPool` with **two queues**. This section and the half-full rule describe that local revision; the public repositories linked below document the earlier stages. A priority queue holds the user IDs to check; a second queue holds available logged-in game accounts. The dispatcher takes a pending job, waits for an available account, and starts the query. When the query finishes, that account goes back to the available-account queue before the result callback runs.

This changes what an account means to the scheduler. It is a reusable resource for the next eligible job rather than a worker permanently attached to its own endless query loop. Direct lookups can enter the job queue at high priority; notification checks enter at lower priority. As in the earlier shared-queue design, faster accounts can take more work. The clearer resource lifecycle also lets an account become available without waiting for notification delivery to finish. The number of active game requests is naturally bounded by the number of accounts available to the pool.

## The Half-Full Rule

Background notifications require checking a large set of bound user IDs repeatedly. Waiting until the job queue is completely empty before adding the next batch sounds reasonable, but an active bot may rarely see an empty queue. Direct queries can keep arriving, leaving the periodic scan stalled even while the bot continues to serve individual users.

The newer scheduler therefore watches the pending job queue before it adds another background batch. It waits while the queue contains **at least half** as many jobs as the next batch would add, then enqueues that batch once the queue drops **below half** that size. For example, if the next scan covers 100 bound IDs, the refill threshold is 50 pending jobs. The rule starts the next round before full emptiness is required while still limiting how much routine work is piled onto the queue at once.

This is a scheduling heuristic, not a guarantee that background work can never be delayed: an uninterrupted surge of higher-priority queries can still keep the pending count above the threshold. Its value is that occasional requests no longer force the scheduler to wait for a perfectly empty queue.

## Why Channel Support Became Shared Code

Channel-server support had its own path into the project. At the time, the available tools for those players felt concentrated in a small set of implementations. After learning how channel-server login worked, I adapted an existing open-source version as a first working option. Even that early adaptation felt quicker in use than the older code I had tried, though I did not collect a comparable benchmark.

As the channel-server user base grew, I brought over features from the newer arena work. Maintaining those features separately made the overlap obvious. Most of the query, scheduling, binding, and notification logic could be shared; the meaningful differences were mainly how an account logged in and how its client was organized. The code moved toward one system with environment-specific client setup rather than separate feature sets that had to be updated in parallel. The public second-generation repository acknowledges the upstream projects that helped with Bilibili, Taiwan, and channel support in its [README](https://github.com/SonderXiaoming/pcrjjc_huannai2/blob/main/README.md).

## What Actually Changed

The progression was larger than “add more accounts.” The first public fork demonstrated multi-account query workers sharing a priority queue. The second generation organized that scheduling across four environments. The newer revision separated queued work from available accounts and used the half-full rule to keep periodic scanning moving. The [early README](https://github.com/SonderXiaoming/pcrjjc_huannai/blob/main/README.md) already describes multiple bound UIDs, per-UID notification choices, and private or group delivery; those were continuing user features, not inventions of version 2. The first README also says arena history lived in memory and was lost on restart, while the [second-generation README](https://github.com/SonderXiaoming/pcrjjc_huannai2/blob/main/README.md) documents database files and migration utilities. That is a concrete maintainability change alongside the clearer client and account modules.

The practical lesson is that low latency depends on **when** work enters a queue and **which available account** takes it. More accounts help, but the scheduling rules determine whether those accounts serve the player's immediate question or spend their time on work that could have waited.

## Source Code

- [Community foundation: cc004/pcrjjc2](https://github.com/cc004/pcrjjc2)
- [PCR Arena Companion, early public adaptation](https://github.com/SonderXiaoming/pcrjjc_huannai)
- [PCR Arena Companion 2](https://github.com/SonderXiaoming/pcrjjc_huannai2)
