import { notificationPermissionStatus } from '$lib/stores.ts';
import { notificationsAvailable } from './utils.ts';

export const notify = async (message: string, actions=[]) => {
	if (!notificationsAvailable) return;
	if (Notification.permission === 'granted') {
		if ('serviceWorker' in navigator) {
			const registration = await navigator.serviceWorker.getRegistration();
			const options = {
				body: message,
				icon: 'icons/icon-256x256.png',
				badge: 'icons/badge-96x96.png',
				actions,
			};
			registration?.showNotification('Tomato Timer', options) || new Notification(message);
		} else {
			new Notification(message);
		}
	} else {
		alert(message);
	}
};

export const requestNotificationPermission = async () => {
	if (!notificationsAvailable) return;
	if (Notification.permission === 'granted') {
		return;
	}
	await Notification.requestPermission();
	notificationPermissionStatus.set(Notification.permission);
};
