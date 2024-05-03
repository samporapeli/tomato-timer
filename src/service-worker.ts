import { defaultPath } from '$lib/config';

// Register the service worker
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', () => {});

/* eslint-disable no-undef */
// Handle notification clicks
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
					if (client.url.endsWith(defaultPath)) {
						if (event.action.startsWith('start-'))
							client.postMessage({ type: 'notification-action', value: event.action });
						client.focus();
					}
				}
				// If no client is found, open a new window.
				// Unfortunately, the action is not passed to the new window as of now.
				if (clients.openWindow) return clients.openWindow(defaultPath);
			}),
	);
});
/* eslint-enable no-undef */
