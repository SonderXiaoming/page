---
title: "From Game API to 100+ Monitors: Building Kanna Connection Re:Dive"
published: 2026-09-09
description: "A technical case study of the monitoring and notification system behind Kanna Connection Re:Dive."
tags: [Python, Async, Architecture, Open Source, Princess Connect]
category: Engineering
lang: en
draft: true
pinned: false
---

> **Drafting note:** This article is intentionally unpublished. The structure and confirmed facts are in place; the bracketed prompts need project-specific details before publication.

Kanna Connection Re:Dive began with a community problem: players needed timely boss-spawn information, but repeatedly checking the game and relaying updates by hand did not scale.

I built a Python service that collected updates from reverse-engineered game APIs and delivered them to designated community channels. The original system eventually served roughly **100 group chats**—an estimated audience of about **3,000 people** when using 30 members per group as a rough average. This is the story of how that workflow evolved—and what I would design differently today.

## The Problem Behind the Bot

Explain the user workflow before the project existed:

- Who needed the updates?
- What did a “monitor” represent?
- How quickly did an update need to arrive?
- What failed when the process was manual?

The audience was not one centralized server. It was spread across about a hundred independent group chats, each expecting the same information in the context where its members already talked and coordinated.

**Detail to add later:** [Describe the practical cost of a missed or delayed notification and one memorable community use case.]

## Turning an Unofficial API into a Reliable Data Source

The project depended on game APIs that were not designed as a public integration surface. That made data collection more than a normal request-and-response task.

Topics to cover:

- How the relevant endpoints and response formats were discovered
- Authentication or session constraints that can be discussed publicly
- Rate limits, schema changes, and incomplete responses
- How sensitive account information was kept out of logs and notifications

**Detail to confirm:** [Add one concrete API failure mode and how the service recovered from it.]

## The Monitoring Architecture

At a high level, the system had to coordinate three responsibilities:

1. collect state from the game service;
2. decide whether an event was new and worth notifying;
3. deliver the update to the correct channel without duplication.

The difficult part was not making one request—it was keeping many independent monitors timely and isolated from one another.

**Detail to confirm:** [Describe the async task model, scheduling strategy, persistence layer, and how monitor state was partitioned.]

## A Categorized Delay Policy

Delivery timing was not controlled by one blanket delay. I classified responses by how long the upstream request had already taken:

- responses that returned too quickly were held to a **15-second delivery window**;
- medium-speed responses received no additional delay;
- slow responses also received no additional delay.

In practice, only the fastest category receives extra waiting time; the other two categories continue as soon as their upstream responses are ready.

**Detail to add later:** [Explain the thresholds between the three categories and why 15 seconds was chosen.]

## Scaling Past 100 Concurrent Monitors

More monitors meant more opportunities for slow requests, retries, duplicate events, and one failing account to interfere with the rest of the system.

Useful evidence to add here:

- Peak number of active group chats (roughly 100)
- Estimated audience (about 3,000 people, using 30 members per group)
- Typical polling interval and notification latency
- CPU and memory footprint
- Retry and backoff behavior
- How duplicate notifications were prevented
- What observability existed when something went wrong

**Detail to add later:** [Add measurements or a representative production incident.]

## Why I Started Version 2

The second version was an opportunity to keep the community workflow while revisiting the parts of the original design that had become difficult to maintain.

**Detail to confirm:** [List the three biggest limitations in version 1 and the corresponding design changes in version 2.]

## What the Project Taught Me

Kanna Connection sits in an unusual space between reverse engineering, asynchronous services, and community software. It taught me that reliability is not an abstract backend property: for users, reliability means receiving the right information in the right place at the moment it matters.

The most reusable lessons were:

- isolate failures when many independent jobs share one service;
- treat unofficial upstream APIs as unstable dependencies;
- make duplicate prevention and recovery part of the initial design;
- optimize for the community's real workflow, not just the elegance of the code.

**Detail to confirm:** [Close with one lesson that changed how you approached later research or engineering systems.]

## Source Code

- [Kanna Connection Re:Dive](https://github.com/SonderXiaoming/kanna_connection_redive)
- [Kanna Connection Re:Dive 2](https://github.com/SonderXiaoming/kanna_connection_redive_2)
