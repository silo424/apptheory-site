---
title: "Building an iOS App with Claude in Xcode: An Honest Account"
date: 2026-08-28T00:34:14.399Z
description: "A note on what building an iOS app alongside an agentic coding assistant is actually like, minus the marketing."
---

A note on what building an iOS app alongside an agentic coding assistant is actually like, minus the marketing.

Where it genuinely helps: scaffolding, boilerplate, and the long tail of API surface you would otherwise be looking up. SwiftUI and SwiftData have wide APIs with sharp edges, and having something that has read all of it is a real advantage. Pure functions with clear inputs and outputs — schedulers, parsers, solvers — come out well, and they are testable, so you can verify rather than trust.

Where it does not help: anything requiring taste. Layout that feels right, the wording on a button, whether a feature should exist at all. It will produce something plausible and you will not notice it is mediocre until later.

The failure mode worth naming is confident wrong code that compiles. It looks finished, it runs, and the bug surfaces a week later in a case nobody tested. The defence is the same as it has always been: tests around the logic you actually depend on, and reading the diff rather than accepting it.

The honest summary is that it moves the bottleneck. Typing was never the slow part of building software. Deciding what to build, and noticing when what you built is wrong, still is — and neither has been automated.
