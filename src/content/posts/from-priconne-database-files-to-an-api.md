---
title: "Making Priconne Game Data Readable Across Three Regions"
published: 2026-10-11
description: "Why readable Princess Connect databases were needed, and how a fork became a versioned release index and download API for three regions."
tags: [Python, API, SQLite, Data, Open Source, Princess Connect]
category: Engineering
lang: en
draft: false
pinned: false
---

A game reference tool needs data it can actually interpret. Princess Connect's game database contains hashed or obfuscated field names, so simply obtaining a database file does not always give a developer readable tables and columns. The upstream database project did not provide the fully readable data I needed, and other tools such as pcr-tool later stopped providing complete name recovery. [Kanna Note](https://github.com/SonderXiaoming/kanna_note) and [Misora Note](https://github.com/SonderXiaoming/MisoraNote) both needed a dependable source of usable CN, TW, and JP data. That is why I made [my priconne-database fork](https://github.com/SonderXiaoming/priconne-database) a place to publish the prepared databases, plus a release index and small API for clients to find them.

## What Came from Upstream, and What Changed

This project is a fork of [Expugn/priconne-database](https://github.com/Expugn/priconne-database), which served game master databases from several regions. Its [README](https://github.com/Expugn/priconne-database#supported-regions) explicitly points Japanese and Taiwan users to old versions as the last readable databases after table and column names became obfuscated. The original workflow checked for updates and committed database files to Git. My fork focuses on publishing databases with reliably recoverable names made readable for the three regions my tools use: CN, TW, and JP. The [public branch](https://github.com/SonderXiaoming/priconne-database) now holds a Vercel API, a JSON history index, tests, and documentation; the database files themselves are published as [GitHub Releases](https://github.com/SonderXiaoming/priconne-database/releases) rather than stored in the Git branch.

The README draws an important boundary: the public repository does not contain the code that produces, decrypts, or restores names in the databases. The API serves metadata and download redirects for files prepared outside this repository; it does not perform that processing when a client makes a request. The public README also says names that cannot be identified reliably are left as they are rather than guessed.

## Making Versions Discoverable

The [history index](https://github.com/SonderXiaoming/priconne-database/blob/master/data/history.json) lists release entries with their region, version, filename, download URL, and SHA-256. Some entries also have a Brotli asset URL. The [API](https://github.com/SonderXiaoming/priconne-database/blob/master/api/databases.py) reads that index, sorts versions numerically within each region, and returns both the latest entry per region and the available history. A client can request a region or an exact version instead of scraping a release page or hardcoding a filename.

For example, `GET /api/databases?region=jp` returns Japanese entries. Adding `version=...` selects a particular release. Adding `download=1` changes the response into a redirect to the selected file. This keeps the API small: it tells clients which asset to use, while GitHub Releases serves the database itself.

## One File, Several Ways to Download It

The API supports original `.db` files and, where a release has one, Brotli-compressed `.db.br` files. A request with `compression=br` selects the compressed asset; versions without one are omitted from that filtered result. The published SHA-256 refers to the **decompressed SQLite database**, so a client should decompress first and then compare the hash. The API supplies the checksum; the client is responsible for doing the check.

There is also a download-source choice. `source=github` uses the GitHub asset URL and `source=proxy` uses the configured proxy. With `source=auto`, the [handler](https://github.com/SonderXiaoming/priconne-database/blob/master/api/databases.py) checks Vercel's country header and selects the proxy for mainland China, with GitHub as the default elsewhere. It returns both URLs in the response so a client can still choose explicitly. JSON responses advertise a five-minute cache lifetime and vary by that country header, which matters because the chosen URL can change with the request's location.

## What the Client Still Has to Do

Version metadata and a checksum do not make a download safe to install on their own. Misora Note's [database file handling](https://github.com/SonderXiaoming/MisoraNote/blob/master/lib/core/db/database_file.dart) shows the other half of the design: it decompresses Brotli data outside the main UI isolate, opens the staged SQLite file read-only for an integrity check, keeps the old file as a backup during replacement, and rolls back if opening the replacement fails. The service makes the correct file discoverable; the app makes the update survivable.

The repository also has [API tests](https://github.com/SonderXiaoming/priconne-database/blob/master/tests/test_databases_api.py) for latest-version selection, country-based source choice, Brotli filtering, and download redirects. They verify the public routing logic, though they are not a measurement of network uptime or download speed.

The result is a deliberately narrow service between prepared game data and the tools that consume it. The underlying value to Kanna Note and Misora Note is a consistently available, readable database; the versioned index answers where to get the right file. Keeping the upstream credit and the public repository's scope clear is part of explaining what this fork actually contributes.

## Source Code

- [Original project: Expugn/priconne-database](https://github.com/Expugn/priconne-database)
- [Three-region release index and API](https://github.com/SonderXiaoming/priconne-database)
- [Misora Note database installation](https://github.com/SonderXiaoming/MisoraNote/blob/master/lib/core/db/database_file.dart)
