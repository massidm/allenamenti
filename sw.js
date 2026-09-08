// Cache offline: l'app deve aprirsi in palestra anche senza rete.
const CACHE = 'allenamenti-v9';
const FILES = ['./', './index.html', './app.js', './esercizi.js', './manifest.webmanifest',
               './logo.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
// I file dell'applicazione vanno chiesti sempre alla rete saltando la cache
// HTTP: GitHub Pages li dichiara validi per dieci minuti, e senza questo
// l'aggiornamento arrivava con quel ritardo anche riavviando l'app.
const GUSCIO = /\.(html|js|webmanifest)$|\/$/;

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  const shell = GUSCIO.test(url.pathname);
  const rete = shell
    ? fetch(e.request, {cache: 'no-store'})
    : fetch(e.request);
  e.respondWith(
    rete.then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
