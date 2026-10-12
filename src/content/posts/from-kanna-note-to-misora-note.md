---
title: "From Kanna Note to Misora Note: Rebuilding a Game Reference Tool"
published: 2026-10-11
description: "From a Python rewrite of pcr-tool for chat, through a hand-designed Pillow chart, to a Flutter app prompted by an Apple user's needs."
tags: [Python, Pillow, Flutter, Dart, Open Source, Princess Connect]
category: Engineering
lang: en
draft: false
pinned: false
---

When a Princess Connect player wants to check a character's skills or the next clan battle boss, the answer needs to be easy to find and easy to read. My first answer to that problem was [Kanna Note](https://github.com/SonderXiaoming/kanna_note), a HoshinoBot plugin that returns game information in chat. Later, someone with an Apple-only setup told me they would normally use an open-source reference app such as pcr-tool, but the options they knew were Android apps. That conversation helped push me toward [Misora Note](https://github.com/SonderXiaoming/MisoraNote), a Flutter app built around the same quick-reference idea. The two projects belong in one story: the data questions stayed familiar, but the place where people read the answers changed.

## Starting with a Tool I Already Used

Kanna Note began as my Python rewrite of the reference features in [wthee's pcr-tool](https://github.com/wthee/pcr-tool), an Android game reference tool written in Kotlin. I wanted its character and battle information inside the chat bot that our community was already using. Bringing those features to HoshinoBot meant translating the data and lookup logic into Python, then building a new presentation for chat with Pillow.

The [plugin's commands](https://github.com/SonderXiaoming/kanna_note#%E6%8C%87%E4%BB%A4) cover character introductions, skills, unique equipment, bond stories, boss skills, clan battle information, schedules, and more. It works across the Chinese, Taiwan, and Japanese game databases; a region prefix can select a server when needed. Its [database update code](https://github.com/SonderXiaoming/kanna_note/blob/master/download.py) downloads and checks the SQLite files that supply those lookups. This let a group ask for current information without every member opening a separate reference app.

## Drawing the Answer Was Part of the Engineering

A bot response has to survive a narrow chat window, mixed Chinese and Japanese names, long skill descriptions, and a wide range of image sizes. I spent a lot of time on the Pillow side of Kanna Note. The [`draw` modules](https://github.com/SonderXiaoming/kanna_note/tree/master/draw) do much more than paste text onto a background: they build different layouts for introductions, skills, equipment, bosses, events, and clan battle details.

For example, the [character introduction renderer](https://github.com/SonderXiaoming/kanna_note/blob/master/draw/draw_introduce.py) wraps text before deciding the image height, chooses fonts according to the text, and places labeled fields at measured positions. The [drawing utilities](https://github.com/SonderXiaoming/kanna_note/blob/master/draw/util.py) measure glyph bounds, draw rounded labels and shadows, and combine smaller images into a finished result. These details turned database results into cards that someone could scan in a group chat.

The **满补线** chart is the clearest example of my own visual design. I made this layout without a reference, while some of the other cards drew at least partly on existing apps. The [renderer](https://github.com/SonderXiaoming/kanna_note/blob/master/draw/draw_max_boss_time_return.py) lays out boss HP and calculated damage thresholds in a wide table, gives each battle phase its own color, then joins the phase sections into one image. I still think it is one of the best-looking pieces of Kanna Note.

![Kanna Note's 满补线 chart, with color-coded battle phases, boss HP and calculated damage thresholds](/images/posts/kanna-note-max-boss-time-return.png "The 满补线 chart, designed for Kanna Note and shown in its repository README")

## Trying a New Language and a New Surface

After Kanna Note, the Apple user's request gave me a concrete reason to try Flutter and Dart: I wanted the reference idea to work beyond the Android apps they had found. It was also a chance to learn a new language and development stack. A chat plugin answers a command with a message; an app lets someone browse, search, move between pages, change a setting, and return to a detail view. That change in interface called for a new design.

The current app includes character and enemy searches, skill and equipment details, clan battle information, schedules, and other reference pages. Its [navigation code](https://github.com/SonderXiaoming/MisoraNote/blob/master/lib/core/router/responsive_navigation.dart) uses a bottom bar on phones and a side rail on larger screens. The repository's [releases](https://github.com/SonderXiaoming/MisoraNote/releases) provide builds for several desktop and mobile platforms. That cross-platform work was part of the language experiment: one Dart codebase had to make the same information usable at different screen sizes.

The unfamiliar language made the UI work harder than I expected. I could picture effects I wanted but did not yet know the Flutter tools well enough to implement them easily. As coding assistants improved, they became more useful at helping me turn those ideas into working interface details. The challenge was still to decide how the information should look and behave across different screens.

## One Data Problem, Two Different Clients

Both projects rely on game data that changes. Kanna Note can update the three regional databases for bot-side queries. Misora Note checks database versions and downloads data into the app. The public [priconne-database project](https://github.com/SonderXiaoming/priconne-database) provides releases and a lightweight version and download API for those regional databases. It grew from another open-source repository; its public branch covers the API and release index, while the production pipeline that creates the databases is separate.

On the app side, updating a local database cannot mean blindly replacing the file while a player is using it. Misora Note's [database file code](https://github.com/SonderXiaoming/MisoraNote/blob/master/lib/core/db/database_file.dart) decompresses Brotli data in an isolate, checks the downloaded SQLite file, keeps a backup during replacement, and restores it if reopening the new file fails. Kanna Note's newer [downloader](https://github.com/SonderXiaoming/kanna_note/blob/master/download.py) also handles compressed database files and validates them. The underlying concern is shared: a reference tool is only useful if an update leaves its data readable.

## What Carried Over

Kanna Note taught me to shape raw game data into an answer that fits the place where people ask for it. That meant SQL queries, text handling, and deliberate image layout, with the 满补线 chart as the design I am proudest of. An Apple user's request gave me a reason to take the idea beyond the bot, and Misora Note became a Flutter learning project as well as a reference app. The progression was from drawing useful answers for chat to making those answers navigable across devices.

## Source Code

- [pcr-tool, the original reference](https://github.com/wthee/pcr-tool)
- [Kanna Note](https://github.com/SonderXiaoming/kanna_note)
- [Misora Note](https://github.com/SonderXiaoming/MisoraNote)
- [priconne-database](https://github.com/SonderXiaoming/priconne-database)
