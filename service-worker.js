// LPB Hub PWA Service Worker
// Strategie : stale-while-revalidate (sert le cache instantanement,
// puis met a jour en arriere-plan si reseau dispo).
// Permet a l'app de s'ouvrir hors-ligne avec la derniere version vue.

// Bump ce nom a chaque deploiement majeur pour forcer le SW a jeter l'ancien cache.
// Le cycle install (skipWaiting) + activate (claim + delete old caches) garantit
// que le nouveau code arrive sur le client en moins d'un reload.
const CACHE = 'lpb-hub-v2';
const ASSETS = [
  './',
  './index.html',
  './favicon.png',
  './favicon-64.png',
  './manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  // Pre-cache les fichiers critiques au premier chargement.
  // skipWaiting permet d'activer immediatement le nouveau SW sans attendre la fermeture des onglets.
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  // Nettoyage des vieux caches a chaque deploiement (changement du nom CACHE).
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Ne touche pas aux requetes non-GET (POST/PATCH/DELETE vers Supabase).
  if (req.method !== 'GET') return;

  // Ne touche pas aux requetes cross-origin (Supabase, GitHub Pages CDN, etc.) :
  // on laisse passer en direct, le cache offline ne marche que pour notre origin.
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Stale-while-revalidate :
  //  1. Retourne immediatement la version cachee (rapide)
  //  2. Lance en parallele un fetch reseau pour mettre a jour le cache
  //  3. Si pas de cache : attend le reseau
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((networkRes) => {
        if (networkRes && networkRes.ok && networkRes.type === 'basic') {
          const clone = networkRes.clone();
          caches.open(CACHE).then((cache) => cache.put(req, clone));
        }
        return networkRes;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
