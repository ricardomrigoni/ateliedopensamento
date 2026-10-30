/* Ateliê do Pensamento — service worker
   Permite instalar o Ateliê como aplicativo e abri-lo sem internet.
   Estratégia: tenta sempre a versão mais nova na rede; se não houver
   conexão, usa a cópia guardada. Não toca nas chamadas ao Supabase
   (outro domínio) nem guarda dados pessoais: eles ficam no navegador
   e na sua nuvem, como antes. */
const VERSAO = 'atelie-v1.4.1';
const ARQUIVOS = ['./', './index.html', './config-nuvem.js', './manifest.webmanifest', './icone-192.png', './icone-512.png', './icone-maskable-512.png', './icone.svg', './apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Supabase e outros domínios passam direto
  e.respondWith(
    fetch(req).then((resp) => {
      if (resp && resp.ok) { const copia = resp.clone(); caches.open(VERSAO).then((c) => c.put(req, copia)); }
      return resp;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
