# Beyond the Blueprint — interactive web edition

The complete book (105 stories, 12 themes) as a fast, offline-capable website.
No build step, no frameworks, no server code. Just drop the folder on Netlify.

---

## Deploy to Netlify (2 minutes)

**Option A — drag and drop (easiest)**

1. Go to <https://app.netlify.com/drop>
2. Drag the **unzipped `beyond-the-blueprint-site` folder** onto the page
   (drag the folder itself, not the files inside it).
3. Netlify gives you a live URL immediately. Rename it under
   *Site settings → Change site name*, e.g. `beyond-the-blueprint.netlify.app`.

**Option B — Git**

Push this folder to a GitHub repo and connect it in Netlify.
Build command: *(leave empty)* · Publish directory: `.`

`netlify.toml` already sets caching headers and an SPA fallback.

---

## What's in the box

```
index.html                 shell, meta tags, settings panel
netlify.toml               headers + SPA redirect
manifest.webmanifest       installable web-app metadata
sw.js                      offline cache (bump CACHE after edits)
favicon.svg  robots.txt
assets/css/style.css       design system, 3 themes, print styles
assets/js/book.js          all 105 stories, morals, front matter
assets/js/quiz.js          59 hand-written quiz questions
assets/js/app.js           router, reader, search, quiz engine
assets/img/                hero + 12 chapter plates
```

## Features

**Reading**
- Every story with its *Moral of the Story* panel, drop caps and chapter plates
- Three page tones — Paper, Sepia, Night — and four text sizes
- Progress bar, "continue reading", per-theme completion rings
- Bookmarks and read-state saved in the browser (`localStorage` only — nothing leaves the device)
- Keyboard: `←` `→` between stories, `/` to search, `Esc` to close panels
- "Surprise me" opens a page at random, exactly as the book's own instructions suggest
- Installable and fully readable offline once visited

**Quizzes**
- 12 chapter quizzes (59 questions, every answer explained)
- The Grand Quiz — 20 questions pulled at random from the whole book
- Moral Match — we show the moral, you name the story (generated fresh each run)
- Animated score ring, streak counter, answer review, personal bests

**Search**
- Instant search across titles, full story text and morals, with highlighted snippets

---

## Editing the content

All text lives in `assets/js/book.js` as plain objects:

```js
{ title: "The Acidic Echo",
  body:  ["paragraph one", "paragraph two"],
  moral: "…" }
```

Add or edit a story and it appears everywhere automatically — contents,
reading order, search, progress counts and Moral Match. Story ids, slugs,
word counts and reading order are derived at load time, so nothing needs
renumbering by hand.

Quiz questions live in `assets/js/quiz.js`, keyed by part number.
`a` is the index of the correct option; `why` is shown after answering.

**After changing any file, bump `CACHE` in `sw.js`** (e.g. `btb-v2`) so returning
visitors get the new version instead of the cached one.

---

## Replacing the artwork

Drop new images into `assets/img/` using the same names
(`hero.jpg`, `part-01.jpg` … `part-12.jpg`). Chapter plates look best at
roughly 1100 × 950 px; the hero at 1600 × 700 px.

If you want the original R. K. Laxman-style illustrations from the printed PDF
on every story, export them as `assets/img/story-<id>.jpg` (e.g. `story-3-1.jpg`)
and add an `image` key to that story in `book.js` — the reader will pick it up.

---

Written by Girish Narain Mishra · Foreword by Sri V. S. Sastree


### About the author page
A dedicated **Author** page lives at `#/author` (linked in the top nav and in the
footer). All of its content — photo, bio paragraphs, quick facts, email and phone —
lives in one object at the top of `assets/js/book.js`:

```
window.BOOK.author = { name, role, photo, place, email, phone, bio: [...], facts: [...] }
```

Edit that object and the author page, the home-page strip and the contact chips all
update together. To change the portrait, replace `assets/img/author.jpg`
(portrait orientation works best) and bump `CACHE` in `sw.js`.
