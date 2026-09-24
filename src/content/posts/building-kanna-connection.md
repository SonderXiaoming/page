---
title: "From Manual Reports to an Account Pool: Building Kanna Connection Re:Dive"
published: 2026-09-24
description: "How a chat bot brought live Princess Connect clan battle data into community conversations, and why its monitoring scheduler had to change."
tags: [Python, Async, Architecture, Open Source, Princess Connect]
category: Engineering
lang: en
draft: false
pinned: false
---

During a Princess Connect clan battle, a team needs to know which boss is active, who has attacked, and what everyone can do next. Players already coordinate in chat, mostly on QQ, but the latest game state lives inside the game. Switching back to the game just to check progress interrupts that conversation. The game's own chat is not a convenient replacement for the team's existing group chat.

Kanna Connection Re:Dive brought that state into the conversation. It connects to chat through OneBot v11 (OB11), with QQ as the primary platform and Telegram and Discord also supported. A bound game account supplies the data that the bot reads and posts to the group. Members can also use commands to inspect teammates' information and perform some otherwise cumbersome game actions.

## The Manual Workflow It Replaced

Before automatic monitoring, a player could attack a boss and then report the result with a group command. This depended on every participant remembering to report accurately and promptly. A missed command, a typo, or a late report left the group's shared picture behind the game.

With Kanna Connection, one or two members of a clan can bind accounts for monitoring. The bot reads the game's data and updates the group without asking all 30 members to record every attack themselves. This removes a major source of manual reporting errors and makes the state available where the team is already planning its next move. The same chat interface supports queries about members and clan battle progress.

## Why the First Scheduler Stopped Scaling Well

The first version attached a long-running monitoring loop to each active group. Its [clan battle command](https://github.com/SonderXiaoming/kanna_connection_redive/blob/main/clanbattle/__init__.py) logs in with a bound account, starts a `while True` loop, fetches the current battle state, compares it with previously seen state, sends updates, and repeats after a one-second sleep. A semaphore caps concurrent work at **40**, but each monitor still has its own persistent loop. As the number of accounts grows, many loops can wake and try to refresh together. A slow account can occupy a concurrency slot while other accounts wait.

I first tried random delays to spread out those requests. Once enough accounts were active, requests could still pile up: random spacing did not directly account for how long an individual upstream request actually took.

## Moving to an Account Pool

The newer design treats starting a monitor as adding an account to a shared pool. The [monitor command](https://github.com/SonderXiaoming/kanna_connection_redive_2/blob/master/clanbattle/__init__.py) enqueues a task, and the [pool implementation](https://github.com/SonderXiaoming/kanna_connection_redive_2/blob/master/util/task_pool.py) takes tasks from a priority queue and uses a semaphore to limit concurrent processing. The [default limit](https://github.com/SonderXiaoming/kanna_connection_redive_2/blob/master/setting.py) is **66**. After an account has been processed, its monitor is scheduled to return to the pool. Both versions cap concurrency; the newer pool brings dispatch, concurrency control, and rescheduling into a reusable component.

The [delay policy](https://github.com/SonderXiaoming/kanna_connection_redive_2/blob/master/util/task_pool.py) uses the elapsed time of an entire monitoring pass, including its processing work. If that pass took **less than 15 seconds**, the scheduler waits for the remaining time up to 15 seconds before re-enqueuing it. Passes taking **15–30 seconds** or **more than 30 seconds** get no additional wait. These are scheduling intervals, not a deliberate delay to a notification that is ready to send. The policy avoids immediately recycling fast accounts into another wave of work while allowing slower passes to rejoin the queue when they finish.

The change addressed the real bottleneck: polling more accounts does not help if each poll competes for the same limited concurrency. A shared pool gives the service a place to control that competition and reuse available capacity. In production, the first version became noticeably slow under load; the newer design stayed responsive even as the number of users grew sharply. Both the scheduling change and the higher concurrency limit may have contributed. I do not have a before-and-after latency or resource benchmark to isolate their effects or put a number on the improvement.

## What the Two Versions Changed

Version 1 already solved the central community problem. Its repository contains the clan battle monitor, group commands, and game client code. Version 2 kept that workflow while reorganizing the project into more distinct areas for the client, database, clan battle features, member management, and WebUI. Its published feature list also adds more explicit permissions, arena monitoring, support features, and support for Bilibili, channel, and Taiwan game regions.

For me, the main reason to revisit the project was maintainability and performance. The first scheduler's per-monitor loops and the growing set of commands were becoming harder to extend at production scale. The account pool is the clearest architectural change; the expanded module structure and account and permission features show why a second version also needed cleaner boundaries. The repository's README describes faster performance and higher concurrency, which matches my experience running the newer version with a much larger user base.

## Scale, with the Right Caveats

A production check showed approximately **2,000 bound game accounts**. In this setup, one QQ user binds one game account, so that is also approximately **2,000 direct users**. I estimate roughly **10,000 people benefit indirectly** through their groups. That last number is an estimate rather than a user count from production data: a 30-person clan may need only one or two people to bind accounts, but the same bound account count cannot simply be multiplied by 30.

This project taught me that a useful bot has to follow the community's actual workflow. Reading game state directly reduced the burden on members; bringing it into chat made that state actionable. As use grew, the next challenge was to schedule that work fairly enough that a few slow accounts did not determine the experience for everyone else.

## Source Code

- [Kanna Connection Re:Dive, version 1](https://github.com/SonderXiaoming/kanna_connection_redive)
- [Kanna Connection Re:Dive 2](https://github.com/SonderXiaoming/kanna_connection_redive_2)
