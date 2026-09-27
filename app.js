/* ============================================================
   Beyond the Blueprint — app engine
   router · reader · search · progress · quizzes
   No frameworks. Everything is stored locally on the device.
   ============================================================ */
(function () {
"use strict";

var B = window.BOOK, Q = window.QUIZ || {};
var main = document.getElementById("main");
var LS = {
  read:   "btb.read",
  marks:  "btb.marks",
  last:   "btb.last",
  theme:  "btb.theme",
  size:   "btb.size",
  best:   "btb.best"
};

/* ---------- helpers ---------- */
function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
function get(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
function set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
function mins(w) { return Math.max(1, Math.round(w / 200)); }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function go(h) { location.hash = h; }

var read  = get(LS.read, {});
var marks = get(LS.marks, {});
var best  = get(LS.best, {});

function isRead(id) { return !!read[id]; }
function setRead(id, v) { if (v) read[id] = 1; else delete read[id]; set(LS.read, read); }
function isMark(id) { return !!marks[id]; }
function toggleMark(id) { if (marks[id]) delete marks[id]; else marks[id] = 1; set(LS.marks, marks); }
function readCount() { return Object.keys(read).length; }
function partRead(p) { var n = 0; p.stories.forEach(function (s) { if (isRead(s.id)) n++; }); return n; }

var toastT;
function toast(msg) {
  var t = document.getElementById("toast");
  t.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7"/></svg>' + esc(msg);
  t.classList.add("on");
  clearTimeout(toastT);
  toastT = setTimeout(function () { t.classList.remove("on"); }, 2200);
}

/* ---------- icons ---------- */
var IC = {
  book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M6 4l13 8-13 8z"/></svg>',
  dice: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
  mark: '<svg viewBox="0 0 24 24"><path d="M7 4h10v16l-5-4-5 4z"/></svg>',
  tick: '<svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></svg>',
  quiz: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.2a2.5 2.5 0 1 1 3.2 3.1c-.6.3-.9.8-.9 1.4v.3"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 4 2.4 5 5.6.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.6-.8z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
  phone:'<svg viewBox="0 0 24 24"><path d="M5 3.5h3.2l1.6 4-2 1.4a12 12 0 0 0 5.3 5.3l1.4-2 4 1.6V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 3.5 6.2 2.5 2.5 0 0 1 5 3.5z"/></svg>',
  pin:  '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>'
};

/* ---------- plate ---------- */
function plate(src, cap, cls) {
  return '<div class="plate ' + (cls || "") + '"><img src="' + src + '" alt="" loading="lazy">' +
         (cap ? '<div class="plate-cap">' + esc(cap) + "</div>" : "") + "</div>";
}

/* ============================================================
   HOME
   ============================================================ */
function vHome() {
  var done = readCount(), total = B.flat.length;
  var last = get(LS.last, null);
  var cont = last && B.byId[last] ? B.byId[last] : null;

  var h = '<section class="hero"><div class="wrap"><div class="hero-grid">' +
    '<div class="fade"><span class="eyebrow">' + IC.book + " Illustrated edition</span>" +
    "<h1>" + esc(B.meta.title) + "<em>" + esc(B.meta.subtitle) + "</em></h1>" +
    '<p class="hero-lede">' + esc(B.meta.tagline) + "</p>" +
    '<div class="hero-cta">' +
      '<a class="btn btn-p" href="#' + (cont ? "/read/" + cont.id : "/read") + '">' + IC.play + (cont ? " Continue reading" : " Start reading") + "</a>" +
      '<a class="btn btn-o" href="#/contents">' + IC.book + " Browse contents</a>" +
      '<button class="btn btn-o" id="home-random">' + IC.dice + " Surprise me</button>" +
    "</div>" +
    '<div class="hero-stats">' +
      "<div><b>" + B.meta.storyCount + "</b><span>Stories</span></div>" +
      "<div><b>" + B.meta.partCount + "</b><span>Themes</span></div>" +
      "<div><b>" + done + "/" + total + "</b><span>Read so far</span></div>" +
    "</div></div>" +
    '<div class="hero-plate fade">' + plate("assets/img/hero.jpg", "Written by " + B.meta.author + " · Foreword by " + B.meta.forewordBy) + "</div>" +
    "</div></div></section>";

  /* author strip */
  var a = B.author;
  h += '<section class="sec"><div class="wrap"><div class="author-strip fade">' +
    '<img class="author-thumb" src="' + a.photo + '" alt="' + esc(a.name) + '">' +
    "<div><p class=\"sec-kicker\">About the author</p><h2>" + esc(a.name) + "</h2>" +
    "<p>" + a.bio[0].replace(/<[^>]+>/g, "").slice(0, 210) + "…</p>" +
    '<a class="btn btn-o btn-s" href="#/author" style="margin-top:.8rem">Read his story</a></div>' +
    "</div></div></section>";

  h += '<section class="sec"><div class="wrap"><div class="sec-head">' +
    '<p class="sec-kicker">The twelve themes</p><h2>What is inside the book</h2>' +
    "<p>Every story stands on its own. Read cover to cover, or open any page at random.</p></div>" +
    '<div class="grid g-3 stagger">' + B.parts.map(cardPart).join("") + "</div></div></section>";

  h += '<section class="sec"><div class="wrap"><div class="quote-block fade"><p>' + esc(B.meta.lastWord) + "</p></div></div></section>";
  return h;
}

function cardPart(p) {
  var n = partRead(p), t = p.stories.length, pc = Math.round(n / t * 100);
  return '<a class="part-card" href="#/part/' + p.slug + '">' +
    '<div class="thumb"><span class="pnum">Part ' + p.num + '</span><img src="' + p.image + '" alt="" loading="lazy">' +
    '<span class="pcount">' + t + " stories</span></div>" +
    '<div class="body"><h3>' + esc(p.title) + "</h3>" +
    '<p class="theme">' + esc(p.theme) + "</p>" +
    '<p class="blurb">' + esc(p.blurb) + "</p>" +
    '<div class="pbar"><i style="width:' + pc + '%"></i></div>' +
    '<div class="pmeta"><span>' + n + " of " + t + " read</span><span>" + pc + "%</span></div>" +
    "</div></a>";
}

/* ============================================================
   CONTENTS
   ============================================================ */
function vContents() {
  return '<section class="sec"><div class="wrap"><div class="sec-head fade">' +
    '<p class="sec-kicker">Contents</p><h2>All ' + B.meta.storyCount + " stories, in twelve themes</h2>" +
    "<p>Tap any theme to open its stories, or search the whole book with the magnifier above.</p></div>" +
    '<div class="grid g-3 stagger">' + B.parts.map(cardPart).join("") + "</div></div></section>";
}

function vPart(slug) {
  var p = null;
  B.parts.forEach(function (x) { if (x.slug === slug) p = x; });
  if (!p) return vNotFound();
  var n = partRead(p);
  return '<section class="sec"><div class="wrap">' +
    crumbs([["#/contents", "Contents"], [null, "Part " + p.num]]) +
    '<div class="sec-head fade"><p class="sec-kicker">Part ' + p.num + " · " + esc(p.theme) + "</p>" +
    "<h2>" + esc(p.title) + "</h2><p>" + esc(p.blurb) + "</p></div>" +
    '<div class="fade" style="margin-bottom:1.6rem">' + plate(p.image, p.theme) + "</div>" +
    '<div class="stat-strip fade"><div class="stat"><b>' + p.stories.length + "</b><span>Stories</span></div>" +
    '<div class="stat"><b>' + n + "</b><span>Read</span></div>" +
    '<div class="stat"><b>' + (Q[p.n] ? Q[p.n].length : 0) + "</b><span>Quiz questions</span></div></div>" +
    '<div class="slist stagger">' + p.stories.map(rowStory).join("") + "</div>" +
    (Q[p.n] ? '<div style="text-align:center;margin-top:1.8rem"><a class="btn btn-g" href="#/quiz/part/' + p.n + '">' + IC.quiz + " Take the Part " + p.num + " quiz</a></div>" : "") +
    "</div></section>";
}

function rowStory(s) {
  return '<a class="srow' + (isRead(s.id) ? " read" : "") + '" href="#/read/' + s.id + '">' +
    '<span class="n">' + (s.index + 1) + "</span>" +
    '<span class="t"><b>' + esc(s.title) + "</b><span>" + mins(s.words) + " min read · " + s.words + " words</span></span>" +
    '<span class="r">' + (isMark(s.id) ? IC.mark : "") + (isRead(s.id) ? '<svg class="tick" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7"/></svg>' : "") + "</span></a>";
}

function crumbs(items) {
  return '<div class="crumbs">' + items.map(function (i, k) {
    return (k ? '<span class="sep">/</span>' : "") + (i[0] ? '<a href="' + i[0] + '">' + esc(i[1]) + "</a>" : "<span>" + esc(i[1]) + "</span>");
  }).join("") + "</div>";
}

/* ============================================================
   READER
   ============================================================ */
function vRead(id) {
  var s = id ? B.byId[id] : B.flat[0];
  if (!s) return vNotFound();
  var p = B.parts[s.part - 1];
  var prev = B.flat[s.order - 1], next = B.flat[s.order + 1];

  set(LS.last, s.id);
  if (!isRead(s.id)) setRead(s.id, true);

  var h = '<section class="reader"><div class="wrap">' +
    crumbs([["#/contents", "Contents"], ["#/part/" + p.slug, "Part " + p.num], [null, s.title]]) +
    '<article class="article fade">' +
    '<header class="article-head"><span class="part-tag">Part ' + p.num + " · " + esc(p.theme) + "</span>" +
    "<h1>" + esc(s.title) + "</h1>" +
    '<div class="article-meta"><span>Story ' + (s.order + 1) + " of " + B.flat.length + "</span>" +
    "<span>" + mins(s.words) + " min read</span></div></header>" +
    '<figure class="article-fig">' + plate(s.image || p.image, p.title) + "</figure>" +
    '<div class="prose">' + s.body.map(function (x) { return "<p>" + x + "</p>"; }).join("") + "</div>" +
    '<div class="moral"><b>Moral of the story</b><p>' + esc(s.moral) + "</p></div>" +
    '<div class="article-actions">' +
      '<button class="btn btn-o btn-s" id="a-mark">' + IC.mark + (isMark(s.id) ? " Bookmarked" : " Bookmark") + "</button>" +
      '<button class="btn btn-o btn-s" id="a-unread">' + IC.tick + " Mark as unread</button>" +
      '<button class="btn btn-o btn-s" id="a-random">' + IC.dice + " Surprise me</button>" +
      '<a class="btn btn-o btn-s" href="#/quiz/part/' + p.n + '">' + IC.quiz + " Quiz this theme</a>" +
    "</div>" +
    '<nav class="pager">' +
      (prev ? '<a class="pv" href="#/read/' + prev.id + '"><span>Previous</span><b>' + esc(prev.title) + "</b></a>" : '<a class="pv ghost"><span>Previous</span><b>Start of the book</b></a>') +
      (next ? '<a class="nx" href="#/read/' + next.id + '"><span>Next</span><b>' + esc(next.title) + "</b></a>" : '<a class="nx ghost"><span>Next</span><b>End of the book</b></a>') +
    "</nav></article></div></section>";

  setTimeout(function () {
    var mk = $("#a-mark");
    if (mk) mk.onclick = function () { toggleMark(s.id); mk.innerHTML = IC.mark + (isMark(s.id) ? " Bookmarked" : " Bookmark"); toast(isMark(s.id) ? "Added to your shelf" : "Removed from your shelf"); };
    var un = $("#a-unread");
    if (un) un.onclick = function () { setRead(s.id, false); toast("Marked as unread"); };
    var rd = $("#a-random");
    if (rd) rd.onclick = randomStory;
  }, 0);
  return h;
}

function randomStory() {
  var s = B.flat[Math.floor(Math.random() * B.flat.length)];
  go("/read/" + s.id);
}

/* ============================================================
   AUTHOR
   ============================================================ */
function vAuthor() {
  var a = B.author;
  return '<section class="sec"><div class="wrap">' +
    crumbs([["#/", "Home"], [null, "About the author"]]) +
    '<div class="author-hero fade">' +
      '<figure class="author-photo">' + plate(a.photo, a.photoCaption) + "</figure>" +
      "<div>" +
        '<p class="sec-kicker">About the author</p>' +
        "<h1 class=\"author-name\">" + esc(a.name) + "</h1>" +
        '<p class="author-role">' + esc(a.role) + "</p>" +
        '<div class="author-bio">' + a.bio.map(function (x) { return "<p>" + x + "</p>"; }).join("") + "</div>" +
        '<div class="author-contact">' +
          '<a class="cchip" href="mailto:' + a.email + '">' + IC.mail + "<span>" + esc(a.email) + "</span></a>" +
          '<a class="cchip" href="tel:' + a.phone.replace(/[^+\d]/g, "") + '">' + IC.phone + "<span>" + esc(a.phone) + "</span></a>" +
          '<span class="cchip">' + IC.pin + "<span>" + esc(a.place) + "</span></span>" +
        "</div>" +
      "</div>" +
    "</div>" +
    '<div class="fact-grid stagger">' + a.facts.map(function (f) {
      return '<div class="fact"><span>' + esc(f.k) + "</span><b>" + esc(f.v) + "</b></div>";
    }).join("") + "</div>" +
    '<div class="quote-block fade"><p>“Behind every blueprint, there is always a person trying their best — and often failing in the most human, most memorable ways.”</p></div>' +
    '<div style="text-align:center"><a class="btn btn-p" href="#/read">' + IC.play + " Start reading his stories</a></div>" +
    "</div></section>";
}

/* ============================================================
   ABOUT THE BOOK
   ============================================================ */
function vAbout() {
  var m = B.meta;
  return '<section class="sec"><div class="wrap">' +
    crumbs([["#/", "Home"], [null, "About the book"]]) +
    '<div class="sec-head fade"><p class="sec-kicker">About the book</p><h2>' + esc(m.title) + " — " + esc(m.subtitle) + "</h2>" +
    "<p>Written by " + esc(m.author) + " · Foreword by " + esc(m.forewordBy) + "</p></div>" +
    '<div class="article fade"><div class="prose nodrop">' +
      "<h3>Foreword</h3>" + m.foreword.map(function (x) { return "<p>" + x + "</p>"; }).join("") +
      "<h3>From the author</h3>" + m.authorNote.map(function (x) { return "<p>" + x + "</p>"; }).join("") +
      "<h3>How to read this book</h3>" + m.howToRead.map(function (x) { return "<p>" + x + "</p>"; }).join("") +
    "</div>" +
    '<div class="moral"><b>The last word</b><p>' + esc(m.lastWord) + "</p></div>" +
    '<div class="article-actions"><a class="btn btn-p btn-s" href="#/author">' + IC.star + " About the author</a>" +
    '<a class="btn btn-o btn-s" href="#/contents">' + IC.book + " Browse contents</a></div>" +
    "</div></div></section>";
}

/* ============================================================
   SEARCH
   ============================================================ */
function vSearch(q) {
  q = (q || "").trim();
  var h = '<section class="sec"><div class="wrap"><div class="sec-head fade" style="text-align:center;margin:0 auto 1.4rem">' +
    '<p class="sec-kicker">Search</p><h2>Search the whole book</h2></div>' +
    '<div class="searchbox"><svg class="si" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
    '<input id="q" type="search" placeholder="Titles, story text or morals…" value="' + esc(q) + '"><kbd>Esc</kbd></div>' +
    '<div id="results">' + (q ? results(q) : '<p class="empty">Type at least two letters to search all ' + B.flat.length + " stories.</p>") + "</div></div></section>";

  setTimeout(function () {
    var i = $("#q"); if (!i) return;
    i.focus(); i.setSelectionRange(i.value.length, i.value.length);
    i.oninput = function () {
      var v = i.value.trim();
      $("#results").innerHTML = v.length > 1 ? results(v) : '<p class="empty">Type at least two letters to search all ' + B.flat.length + " stories.</p>";
      history.replaceState(null, "", "#/search?q=" + encodeURIComponent(v));
    };
  }, 0);
  return h;
}

function results(q) {
  var rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig");
  var hits = [];
  B.flat.forEach(function (s) {
    var hay = s.title + " " + s.body.join(" ") + " " + s.moral;
    if (hay.search(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")) > -1) {
      var plain = s.body.join(" ") + " " + s.moral;
      var at = plain.search(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
      var snip = plain.slice(Math.max(0, at - 70), Math.max(0, at - 70) + 220);
      hits.push('<a class="hit" href="#/read/' + s.id + '"><span class="in">Part ' + s.partNum + " · " + esc(s.partTitle) + "</span>" +
        "<b>" + esc(s.title).replace(rx, function (m) { return "<mark>" + m + "</mark>"; }) + "</b>" +
        "<p>…" + esc(snip).replace(rx, function (m) { return "<mark>" + m + "</mark>"; }) + "…</p></a>");
    }
  });
  if (!hits.length) return '<div class="empty"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><p>No story matches “' + esc(q) + '”.</p></div>';
  return '<p class="sec-kicker" style="text-align:center;margin-bottom:1rem">' + hits.length + " result" + (hits.length > 1 ? "s" : "") + "</p>" + hits.join("");
}

/* ============================================================
   MY SHELF
   ============================================================ */
function vLibrary() {
  var done = readCount(), total = B.flat.length;
  var bm = B.flat.filter(function (s) { return isMark(s.id); });
  var last = get(LS.last, null);
  var cont = last && B.byId[last] ? B.byId[last] : null;
  var bestCount = Object.keys(best).length;

  var h = '<section class="sec"><div class="wrap"><div class="sec-head fade">' +
    '<p class="sec-kicker">My shelf</p><h2>Your reading, saved on this device</h2>' +
    "<p>Progress, bookmarks and quiz scores never leave your browser.</p></div>" +
    '<div class="stat-strip fade">' +
      '<div class="stat"><b>' + done + "</b><span>Stories read</span></div>" +
      '<div class="stat"><b>' + Math.round(done / total * 100) + "%</b><span>Of the book</span></div>" +
      '<div class="stat"><b>' + bm.length + "</b><span>Bookmarks</span></div>" +
      '<div class="stat"><b>' + bestCount + "</b><span>Quizzes attempted</span></div>" +
    "</div>";

  if (cont) h += '<div class="sec-head" style="margin-bottom:.9rem"><h3>Continue reading</h3></div><div class="slist" style="margin-bottom:2rem">' + rowStory(cont) + "</div>";

  h += '<div class="sec-head" style="margin-bottom:.9rem"><h3>Bookmarks</h3></div>';
  h += bm.length ? '<div class="slist stagger">' + bm.map(rowStory).join("") + "</div>"
                 : '<div class="empty"><p>No bookmarks yet — tap the flag on any story to save it here.</p><a class="btn btn-o btn-s" href="#/contents">Browse contents</a></div>';

  h += '<div class="sec-head" style="margin:2.2rem 0 .9rem"><h3>Progress by theme</h3></div><div class="grid g-2">' +
    B.parts.map(function (p) {
      var n = partRead(p), pc = Math.round(n / p.stories.length * 100);
      return '<a class="quiz-tile" href="#/part/' + p.slug + '"><div class="qt-top"><h4>' + esc(p.title) + '</h4><span class="qn">' + pc + "%</span></div>" +
        '<div class="pbar"><i style="width:' + pc + '%"></i></div>' +
        '<span class="qmeta">' + n + " of " + p.stories.length + " stories read</span></a>";
    }).join("") + "</div></div></section>";
  return h;
}

/* ============================================================
   QUIZ HUB
   ============================================================ */
function vQuizHub() {
  var totalQ = 0;
  Object.keys(Q).forEach(function (k) { totalQ += Q[k].length; });

  var h = '<section class="sec"><div class="wrap"><div class="sec-head fade">' +
    '<p class="sec-kicker">Quizzes</p><h2>Test yourself on the book</h2>' +
    "<p>" + totalQ + " hand-written questions across the twelve themes, plus two mixed challenges. Every answer is explained.</p></div>" +
    '<div class="mode-grid stagger">' +
      modeTile("The Grand Quiz", "Twenty questions drawn at random from the whole book. A fresh set every run.", "#/quiz/grand", IC.star) +
      modeTile("Moral Match", "We show the moral — you name the story it belongs to. Generated fresh each time.", "#/quiz/moral", IC.book) +
    "</div>" +
    '<div class="sec-head" style="margin-bottom:1rem"><h3>Chapter quizzes</h3></div><div class="grid g-3 stagger">' +
    B.parts.filter(function (p) { return Q[p.n] && Q[p.n].length; }).map(function (p) {
      var b = best["part-" + p.n];
      return '<a class="quiz-tile" href="#/quiz/part/' + p.n + '"><div class="qt-top"><h4>' + esc(p.title) + '</h4><span class="qn">' + p.num + "</span></div>" +
        '<span class="qmeta">' + Q[p.n].length + " questions · " + esc(p.theme) + "</span>" +
        (b ? '<span class="best">' + IC.star + " Best " + b.s + "/" + b.t + "</span>" : "") + "</a>";
    }).join("") + "</div></div></section>";
  return h;
}

function modeTile(t, d, href, ic) {
  return '<a class="mode" href="' + href + '"><span class="ic">' + ic + "</span><h3>" + esc(t) + "</h3><p>" + esc(d) + "</p>" +
    '<span class="qmeta" style="font-weight:600;color:var(--gold)">Start →</span></a>';
}

/* ---------- quiz engine ---------- */
var QS = null;

function startQuiz(key, title, questions) {
  QS = { key: key, title: title, qs: questions, i: 0, score: 0, streak: 0, bestStreak: 0, log: [], locked: false };
  renderQ();
}

function vQuizRun() { return '<section class="sec"><div class="wrap"><div id="qwrap"></div></div></section>'; }

function renderQ() {
  var w = $("#qwrap"); if (!w || !QS) return;
  if (QS.i >= QS.qs.length) return renderResult();
  var q = QS.qs[QS.i];
  var pct = Math.round(QS.i / QS.qs.length * 100);

  w.innerHTML = '<div class="quiz-card fade">' +
    '<div class="q-top"><span class="q-step">' + esc(QS.title) + " · Question " + (QS.i + 1) + " of " + QS.qs.length + "</span>" +
    '<span class="q-score"><span>Score ' + QS.score + "</span><span>Streak " + QS.streak + "</span></span></div>" +
    '<div class="q-bar"><i style="width:' + pct + '%"></i></div>' +
    '<p class="q-text">' + q.q + "</p>" +
    '<div class="opts" id="opts">' + q.o.map(function (o, k) {
      return '<button class="opt" data-k="' + k + '"><span class="key">' + "ABCD".charAt(k) + "</span><span>" + o + "</span></button>";
    }).join("") + "</div>" +
    '<div id="why"></div>' +
    '<div class="q-foot"><a class="btn btn-o btn-s" href="#/quiz">Leave quiz</a><span id="nextwrap"></span></div></div>';

  $$("#opts .opt").forEach(function (b) { b.onclick = function () { answer(parseInt(b.dataset.k, 10)); }; });
}

function answer(k) {
  if (QS.locked) return;
  QS.locked = true;
  var q = QS.qs[QS.i], ok = k === q.a;
  $$("#opts .opt").forEach(function (b, idx) {
    b.disabled = true;
    if (idx === q.a) b.classList.add("right");
    else if (idx === k) b.classList.add("wrong");
  });
  if (ok) { QS.score++; QS.streak++; QS.bestStreak = Math.max(QS.bestStreak, QS.streak); }
  else QS.streak = 0;
  QS.log.push({ q: q.q, ok: ok, right: q.o[q.a] });

  $("#why").innerHTML = '<div class="q-why"><b>' + (ok ? "Correct" : "Not quite") + "</b>" + (q.why || q.o[q.a]) + "</div>";
  $("#nextwrap").innerHTML = '<button class="btn btn-p btn-s" id="nextq">' + (QS.i + 1 >= QS.qs.length ? "See results" : "Next question") + " →</button>";
  $("#nextq").onclick = function () { QS.i++; QS.locked = false; renderQ(); };
}

function renderResult() {
  var pct = Math.round(QS.score / QS.qs.length * 100);
  var prev = best[QS.key];
  if (!prev || QS.score > prev.s) { best[QS.key] = { s: QS.score, t: QS.qs.length }; set(LS.best, best); }
  var verdict = pct === 100 ? "Flawless. You have read this book properly."
    : pct >= 80 ? "Excellent — the shop floor would approve."
    : pct >= 60 ? "Solid. A second reading will finish the job."
    : pct >= 40 ? "A fair start. The stories are worth revisiting."
    : "Plenty left to discover. Open a page at random and enjoy.";

  var C = 2 * Math.PI * 64;
  $("#qwrap").innerHTML = '<div class="quiz-card fade"><div class="result">' +
    '<div class="ring"><svg viewBox="0 0 150 150"><circle class="bg" cx="75" cy="75" r="64"/>' +
    '<circle class="fg" cx="75" cy="75" r="64" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '" id="ringfg"/></svg>' +
    "<b>" + pct + "%</b></div>" +
    "<h3>" + QS.score + " of " + QS.qs.length + " correct</h3>" +
    '<p class="verdict">' + esc(verdict) + "</p>" +
    '<p class="qmeta" style="margin-bottom:1.2rem">Best streak: ' + QS.bestStreak + (prev ? " · Previous best: " + prev.s + "/" + prev.t : "") + "</p>" +
    '<div class="article-actions" style="border:0;padding:0;margin:0 0 .6rem">' +
      '<button class="btn btn-p btn-s" id="again">Try again</button>' +
      '<a class="btn btn-o btn-s" href="#/quiz">All quizzes</a>' +
      '<a class="btn btn-o btn-s" href="#/contents">Back to the book</a>' +
    "</div>" +
    '<div class="review"><h4>Answer review</h4>' + QS.log.map(function (l) {
      return '<div class="rev-item"><span class="mk ' + (l.ok ? "ok" : "no") + '">' + (l.ok ? "✓" : "✕") + "</span>" +
        "<span>" + l.q + "<em>Answer: " + l.right + "</em></span></div>";
    }).join("") + "</div></div></div>";

  setTimeout(function () { var r = $("#ringfg"); if (r) r.style.strokeDashoffset = C * (1 - pct / 100); }, 60);
  $("#again").onclick = function () { QS.i = 0; QS.score = 0; QS.streak = 0; QS.bestStreak = 0; QS.log = []; QS.locked = false; renderQ(); };
}

function moralMatch() {
  var pool = shuffle(B.flat).slice(0, 12);
  return pool.map(function (s) {
    var wrong = shuffle(B.flat.filter(function (x) { return x.id !== s.id; })).slice(0, 3).map(function (x) { return x.title; });
    var opts = shuffle([s.title].concat(wrong));
    return { q: "“" + s.moral + "”<br><span style=\"font-size:.8rem;color:var(--ink-faint);font-family:var(--ui)\">Which story ends with this moral?</span>",
             o: opts, a: opts.indexOf(s.title),
             why: "From Part " + s.partNum + " — " + s.partTitle + "." };
  });
}

function grandQuiz() {
  var all = [];
  Object.keys(Q).forEach(function (k) { all = all.concat(Q[k]); });
  return shuffle(all).slice(0, 20);
}

function vNotFound() {
  return '<section class="sec"><div class="wrap"><div class="empty">' + IC.book +
    "<h2>That page isn't in this book</h2><p>The link may be old or mistyped.</p>" +
    '<a class="btn btn-p" href="#/">Back to the cover</a></div></div></section>';
}

/* ============================================================
   ROUTER
   ============================================================ */
function route() {
  var h = location.hash.replace(/^#/, "") || "/";
  var qi = h.indexOf("?"), qs = "";
  if (qi > -1) { qs = h.slice(qi + 1); h = h.slice(0, qi); }
  var seg = h.split("/").filter(Boolean);
  var name = seg[0] || "home", html;

  if (!seg.length) { html = vHome(); name = "home"; }
  else if (seg[0] === "contents") { html = vContents(); }
  else if (seg[0] === "part") { html = vPart(seg[1]); name = "contents"; }
  else if (seg[0] === "read") { html = vRead(seg[1]); }
  else if (seg[0] === "author") { html = vAuthor(); name = "author"; }
  else if (seg[0] === "about") { html = vAbout(); }
  else if (seg[0] === "library") { html = vLibrary(); }
  else if (seg[0] === "search") { html = vSearch(decodeURIComponent((qs.split("q=")[1] || ""))); name = ""; }
  else if (seg[0] === "quiz") {
    if (!seg[1]) html = vQuizHub();
    else {
      html = vQuizRun();
      setTimeout(function () {
        if (seg[1] === "grand") startQuiz("grand", "The Grand Quiz", grandQuiz());
        else if (seg[1] === "moral") startQuiz("moral", "Moral Match", moralMatch());
        else if (seg[1] === "part" && Q[seg[2]]) startQuiz("part-" + seg[2], "Part " + B.parts[seg[2] - 1].num + " · " + B.parts[seg[2] - 1].title, Q[seg[2]]);
        else $("#qwrap").innerHTML = vNotFound();
      }, 0);
    }
    name = "quiz";
  }
  else html = vNotFound();

  main.innerHTML = html;
  $$(".nav a").forEach(function (a) { a.classList.toggle("on", a.dataset.r === name); });
  $("#nav").classList.remove("open");
  var hr = $("#home-random"); if (hr) hr.onclick = randomStory;
  window.scrollTo(0, 0);
  paintPanel();
}

/* ============================================================
   CHROME — panel, settings, shortcuts, progress bar
   ============================================================ */
function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); set(LS.theme, t); paintSeg(); }
function applySize(s) {
  var map = { s: "1rem", m: "1.075rem", l: "1.18rem", xl: "1.3rem" };
  document.documentElement.style.setProperty("--fs", map[s] || map.m);
  set(LS.size, s); paintSeg();
}
function paintSeg() {
  var t = get(LS.theme, "paper"), s = get(LS.size, "m");
  $$("#seg-theme button").forEach(function (b) { b.classList.toggle("on", b.dataset.theme === t); });
  $$("#seg-size button").forEach(function (b) { b.classList.toggle("on", b.dataset.size === s); });
}
function paintPanel() {
  var pp = $("#panel-parts");
  if (pp && !pp.dataset.done) {
    pp.innerHTML = B.parts.map(function (p) { return '<a href="#/part/' + p.slug + '">' + p.num + " · " + esc(p.title) + "</a>"; }).join("");
    pp.dataset.done = "1";
  }
  var pr = $("#panel-progress");
  if (pr) pr.textContent = readCount() + " of " + B.flat.length + " stories read (" + Math.round(readCount() / B.flat.length * 100) + "%).";
}
function openPanel(v) {
  $("#panel").classList.toggle("on", v);
  $("#scrim").classList.toggle("on", v);
  $("#panel").setAttribute("aria-hidden", v ? "false" : "true");
}

function boot() {
  applyTheme(get(LS.theme, "paper"));
  applySize(get(LS.size, "m"));

  $("#btn-menu").onclick = function () {
    var n = $("#nav"); n.classList.toggle("open");
    this.setAttribute("aria-expanded", n.classList.contains("open"));
  };
  $("#btn-settings").onclick = function () { openPanel(true); };
  $("#panel-close").onclick = function () { openPanel(false); };
  $("#scrim").onclick = function () { openPanel(false); };
  $("#btn-search").onclick = function () { go("/search"); };
  $("#btn-random").onclick = randomStory;
  $$("#seg-theme button").forEach(function (b) { b.onclick = function () { applyTheme(b.dataset.theme); }; });
  $$("#seg-size button").forEach(function (b) { b.onclick = function () { applySize(b.dataset.size); }; });
  $("#btn-reset").onclick = function () {
    if (!confirm("Clear all reading progress, bookmarks and quiz scores on this device?")) return;
    read = {}; marks = {}; best = {};
    set(LS.read, read); set(LS.marks, marks); set(LS.best, best);
    localStorage.removeItem(LS.last);
    toast("Progress cleared"); openPanel(false); route();
  };

  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") { if (e.key === "Escape") e.target.blur(); return; }
    if (e.key === "/") { e.preventDefault(); go("/search"); }
    else if (e.key === "Escape") openPanel(false);
    else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      var m = location.hash.match(/^#\/read\/(.+)$/); if (!m) return;
      var s = B.byId[m[1]]; if (!s) return;
      var t = B.flat[s.order + (e.key === "ArrowRight" ? 1 : -1)];
      if (t) go("/read/" + t.id);
    }
  });

  window.addEventListener("scroll", function () {
    var d = document.documentElement;
    var p = d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight);
    $("#readbar").style.width = (p * 100).toFixed(1) + "%";
  }, { passive: true });

  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();

})();
