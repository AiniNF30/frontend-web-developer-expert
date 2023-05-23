import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...'./']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (!(event.request.url.indexOf('https') === 0)) return; // skip the request. if request is not made with http protocol

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
