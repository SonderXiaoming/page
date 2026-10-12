---
title: "Why a Chemistry Joke Needed a Solver and an Indexed Search"
published: 2026-10-11
description: "From industrial coffee and banana jokes to floating-point coefficients, searchable candidate indexes, and a browser search that can pause and resume."
tags: [TypeScript, Vue, Algorithms, Web Workers, Open Source]
category: Engineering
lang: en
draft: false
pinned: false
---

I kept seeing jokes about “industrially producing” coffee or a banana by arranging chemical symbols into a word. `2Na + Ba → Banana` captures the idea: the letters balance if you ignore case, even though it is not a chemical reaction. I built [auto_chem_joke](https://github.com/SonderXiaoming/auto_chem_joke) to search for more equations in that spirit. I expected the equation step to be a straightforward matrix problem. It became the hardest part of the project; the large search space and the need to stop, resume, and locate a particular result came next. The [live generator](https://sonderxiaoming.github.io/auto_chem_joke/) lets people try a target word themselves.

## Turning a Word into Candidate Ingredients

The [generator](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/utils/elementMatcher.ts) starts with target words and a list of element symbols. It can also consider common substances and optional byproducts. First it expands formula notation and counts the letters that the target contains. It then builds a set of candidate ingredients for each required letter. If an ingredient introduces letters absent from the target, the optional byproduct search has to account for them; otherwise the candidate is skipped.

Each letter can have several matching ingredients, so candidate lists quickly form a Cartesian product. That creates two problems: finding a valid equation and keeping track of where the search is among all the failures.

## Solving the Letter Balance

For one candidate combination, the generator counts each letter on the proposed left and right sides. If `A` records the left-side letter counts and `B` the right-side counts, the coefficients must satisfy `A × x = B × y`. I initially thought this would be a simple matrix solve. In practice, the matrix is not necessarily square or full rank, so there may be no ordinary inverse. A numerical solution can also contain fractions, zero or negative coefficients, or small floating-point errors; the joke needs usable positive integers.

The [solver](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/utils/calEquation.ts) tries a bounded set of right-side coefficients, then uses singular value decomposition to compute a pseudoinverse for the left side. It rejects non-finite or negative values, checks the numerical residual, converts the remaining values toward integer coefficients, and applies size limits. This was the harder work behind an equation that appears simple on the screen. A pseudoinverse returns one numerical solution; it does not enumerate every solution that might exist when the system has extra degrees of freedom.

There are intentional limits here. The solver searches a bounded coefficient range and rejects oversized or invalid integer solutions, so it is not a complete enumerator of every mathematically possible equation. Matching letters also does not check atoms, reaction conditions, or physical plausibility. The output is a wordplay generator with a mathematical filter.

## Giving Every Search Position an Address

I wanted to be able to stop at any point, continue later, and find a particular candidate without losing my place. The [index conversion](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/utils/tool.ts) treats the candidate-list lengths like digits with different bases: a single main index maps to a specific position in each list. When byproducts are enabled, a second index tracks that inner search. The [page](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/pages/MainPage.vue) displays both positions and lets a new run start from entered indexes. Pausing the existing worker keeps its current generator state; terminating it discards that state and requires initialization again.

That indexing scheme makes traversal and manual location practical, but the current implementation should not be described as a formal guarantee of unique results. Different indexed choices can collapse to the same selected ingredient set, and the terminal index currently wraps to the first choice. Those edge cases are distinct from the goal of searching without repetition or omissions.

## Keeping the Browser Usable

The number of candidate combinations can become much larger than the number of successful jokes. Running that loop directly in the page would make controls and progress indicators feel stuck. The [Vue interface](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/pages/MainPage.vue) sends work to a [Web Worker](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/worker/equationWorker.ts). The worker advances the search in small chunks, limited by both a step count and a short time budget, and schedules the next chunk after yielding back to the event loop.

The worker also throttles progress messages and batches optional failed-combination reports. The page can start automatic generation, stop it, or terminate the worker; successful equations arrive as they are found. This design matters because the difficult case is not a single slow equation. It is the long stretch of candidates that produce no result while the user still expects the interface to respond.

The industrial coffee and banana jokes gave me the target. Getting a valid-looking integer balance made me deal with linear algebra and numerical limits; finding and resuming a search position required an explicit order; and the worker made it possible to explore that search from a browser. The result is a toy with real engineering problems inside it.

## Source Code

- [auto_chem_joke](https://github.com/SonderXiaoming/auto_chem_joke)
- [Candidate generator](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/utils/elementMatcher.ts)
- [Equation solver](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/utils/calEquation.ts)
- [Web Worker](https://github.com/SonderXiaoming/auto_chem_joke/blob/main/src/worker/equationWorker.ts)
