import { defaultPath } from '$lib/config';

// Register the service worker
self.addEventListener('install', () => {});
self.addEventListener('activate', () => {});

// Handle notification clicks
/* eslint-disable no-undef */
self.addEventListener('notificationclick', (event) => {
	event.notification.close();
	event.waitUntil(
		clients
			.matchAll({
				type: 'window',
				includeUncontrolled: true,
			})
			.then((clientList) => {
				for (const client of clientList) {
					if (client.url.endsWith(defaultPath)) return client.focus();
				}
				if (clients.openWindow) return clients.openWindow(defaultPath);
			}),
	);
});
/* eslint-enable no-undef */
