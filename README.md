# apptheory.ai

The AppTheory website: an indie iOS studio site with a blog. It's built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages.

## How it deploys

Every push to `main` runs `.github/workflows/deploy.yml`, which:

1. installs dependencies
2. downloads any missing images or video into `src/assets/media/` (see `scripts/fetch-media.mjs`)
3. builds the site into `_site/`
4. publishes it to GitHub Pages

One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## Writing a blog post

Add a Markdown file to `src/posts/`. The file name becomes the URL, so `my-new-post.md` is published at `/post/my-new-post/`.

```markdown
---
title: "My New Post"
date: 2026-10-10
description: "One or two sentences used on the blog list and in search results."
---

Write the post here in Markdown.
```

Commit and push. The site rebuilds in about a minute.

## Adding an app

1. Copy `src/apps/fretninja/` to `src/apps/<new-app>/` and edit the copy.
2. Add a card for the app to `src/apps/index.njk`.
3. Optionally add it to the nav in `src/_data/site.json`.

Each app gets the same URLs as FretNinja: `/apps/<app>/` for the main page (usable as the App Store **Support URL**) and `/apps/<app>/privacy/` for the privacy policy (the **Privacy Policy URL**).

## Old Wix URLs

`src/redirects.njk` sends the old flat URLs to their new homes:

| Old URL | New URL |
| --- | --- |
| `/fretninja`, `/ghostmap` | `/apps/fretninja/` |
| `/fretninja-privacy`, `/ghostmap-privacy` | `/apps/fretninja/privacy/` |
| `/fretninja-review`, `/ghostmap-review` | `/apps/fretninja/review/` |

Blog posts keep their Wix URLs (`/post/<slug>`).

## Working locally

```bash
npm install
npm run media   # download images and video once
npm start       # http://localhost:8080 with live reload
```

## Custom domain

`src/CNAME` holds `www.apptheory.ai`. At your DNS provider:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-github-username>.github.io` |

Leave any MX or TXT records (email, verification) untouched. Once the certificate is issued, tick **Enforce HTTPS** in Settings → Pages.
