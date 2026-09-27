/* Offline cache — bump CACHE when you change any asset. */
var CACHE = "btb-v2";
var ASSETS = [
  "./","./index.html","./manifest.webmanifest","./favicon.svg",
  "./assets/css/style.css","./assets/js/book.js","./assets/js/quiz.js","./assets/js/app.js",
  "./assets/img/hero.jpg","./assets/img/author.jpg","./assets/img/og-cover.jpg",
  "./assets/img/part-01.jpg","./assets/img/part-02.jpg","./assets/img/part-03.jpg",
  "./assets/img/part-04.jpg","./assets/img/part-05.jpg","./assets/img/part-06.jpg",
  "./assets/img/part-07.jpg","./assets/img/part-08.jpg","./assets/img/part-09.jpg",
  "./assets/img/part-10.jpg","./assets/img/part-11.jpg","./assets/img/part-12.jpg"
];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  e.respondWith(caches.match(e.request).then(function(hit){
    return hit || fetch(e.request).then(function(res){
      if(res && res.status===200 && res.type==="basic"){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      }
      return res;
    }).catch(function(){ return caches.match("./index.html"); });
  }));
});
