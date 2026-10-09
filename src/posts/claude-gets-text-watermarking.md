---
title: "Claude Gets Text Watermarking"
date: 2026-08-27T23:19:12.575Z
description: "Anthropic has detailed its watermarking approach for Claude's text output, covering how the mechanism works and what it does — and does not do — to the text itself."
---

Anthropic has detailed its watermarking approach for Claude's text output, covering how the mechanism works and what it does — and does not do — to the text itself.

Text watermarking is a harder problem than image watermarking. An image has enormous redundancy to hide a signal in; prose does not, and any scheme has to survive editing, paraphrasing, and truncation while not degrading the writing. Those goals pull against each other, and most published approaches trade some of one for the other.

The practical question for anyone building on these models is what survives a round of human editing. A watermark that disappears the moment someone rewrites a paragraph answers a different question than one that persists.

Source: Anthropic, August 14, 2026.
