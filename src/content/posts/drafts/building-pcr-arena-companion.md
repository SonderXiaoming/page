---
title: "The JJC Tool That Grew with Its Community"
published: 2026-09-09
description: "A future case study of PCR Arena Companion, from group-chat lookups to multi-account notifications and CAPTCHA handling."
tags: [Python, Async, Bot, Open Source, Princess Connect]
category: Engineering
lang: en
draft: true
pinned: false
---

> **Drafting note:** This article is intentionally unpublished. The public feature history is outlined below; personal stories, architecture details, and usage numbers can be added later.

PCR Arena Companion began as a practical answer to a familiar Princess Connect question: how can a player check JJC matchup information without leaving the group chat where the discussion is already happening?

The first version brought arena lookups into HoshinoBot. The second grew into a broader notification system with multiple accounts, regional server support, different delivery paths, and CAPTCHA handling. The interesting story is not a feature checklist—it is how repeated community requests gradually reshaped the tool.

## The Original Group-Chat Workflow

Start with the people rather than the implementation:

- What did players need to know before choosing an arena matchup?
- What steps did they previously perform by hand?
- Which commands became part of normal group-chat conversation?
- What did users ask for once the first version was already useful?

**Story to add later:** [Describe the first group that used the plugin and the moment it became clear that a second version was needed.]

## From One Account to Many

Version 2 supports binding multiple UIDs instead of assuming that one user has one game account. Notification preferences can be configured per UID, which matters when accounts belong to different regions or are used in different ways.

Topics to expand:

- how account identity is stored and selected;
- how commands avoid ambiguity when several UIDs are bound;
- how per-account notification settings are represented;
- how migrations preserved data from earlier versions.

**Technical detail to add later:** [Explain the data model and one edge case caused by multi-UID binding.]

## Notifications Where the Community Wants Them

The tool can send updates through private messages or group chats. That sounds like a small option, but it changes permission checks, routing, error handling, and the amount of context that can safely appear in a message.

**Story to add later:** [Compare a private-notification workflow with a group-notification workflow and explain why both remained necessary.]

## Supporting Multiple Regions

Princess Connect accounts do not all live behind the same regional environment. The companion therefore supports multiple server regions while presenting a consistent command experience to users.

Topics to expand:

- which protocol or data differences had to be normalized;
- how region is associated with an account;
- which failures are region-specific;
- how changes upstream are detected and maintained.

## CAPTCHA: Automatic When Possible, Manual When Necessary

The second version attempts automatic CAPTCHA handling, but it also keeps a manual fallback path. That combination is important: automation covers the common case, while a user-facing fallback prevents an external challenge from turning into a complete dead end.

**Technical detail to add later:** [Describe the CAPTCHA state machine, timeout behavior, and the boundary between the bot and the manual helper.]

## Persistence, Concurrency, and Recovery

Account bindings, notification preferences, and delivery state have to survive restarts. Meanwhile, several users may trigger lookups or account updates at once.

Topics to expand:

- the local database layout;
- async task boundaries and locking;
- retry and duplicate-prevention behavior;
- safe handling of credentials and logs;
- recovery after a restart or an upstream outage.

**Technical detail to add later:** [Add one production failure and the change it prompted.]

## What Community Maintenance Actually Means

A community tool is never finished when the first command works. It has to absorb changing APIs, new server regions, different account habits, bot-framework changes, and requests that only make sense after people have used it for months.

The strongest closing for this story will be a concrete example of a user request that looked small but forced a deeper architectural change.

**Story to add later:** [Choose that request and trace it from conversation to implementation.]

## Source Code

- [PCR Arena Companion](https://github.com/SonderXiaoming/pcrjjc_huannai)
- [PCR Arena Companion 2](https://github.com/SonderXiaoming/pcrjjc_huannai2)
