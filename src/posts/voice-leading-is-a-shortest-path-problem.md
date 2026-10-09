---
title: "Voice Leading Is a Shortest-Path Problem"
date: 2026-08-28T00:34:14.375Z
description: "Ask a guitarist to play Cmaj7 to Am7 to Dm7 to G7 and most will jump between memorised shapes, often travelling half the neck between chords. It works, but it sounds like four separate events rather than one moving line."
---

Ask a guitarist to play Cmaj7 to Am7 to Dm7 to G7 and most will jump between memorised shapes, often travelling half the neck between chords. It works, but it sounds like four separate events rather than one moving line.

Good voice leading means each note moves as little as possible — ideally not at all. Framed that way it stops being a matter of taste and becomes a graph problem.

Each chord in the progression is a layer of nodes, one per playable voicing. Each edge between consecutive layers carries a cost: how far the fingers travel, how many notes are held in common, whether the shape jumps position. Then it is a shortest-path search through the layers.

The interesting part is the cost function, because that is where the musical judgment lives. Total fret distance alone produces sequences that are efficient and lifeless. Weighting held notes more heavily produces something that sounds intentional — the ear rewards a voice that stays put more than it rewards one that moves a little.

The scoring is where the opinions are, and it is worth arguing about. The search itself is the easy half.
