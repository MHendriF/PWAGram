self.addEventListener('install', function(event) {
	console.log('[Service worker] installing service worker .....', event);
});

self.addEventListener('activate', function(event) {
	console.log('[Service worker] activating service worker .....', event);
	return self.clients.claim();
}); 