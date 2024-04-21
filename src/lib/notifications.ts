import { notificationPermissionStatus } from './stores.ts';

export const notify = (message: string) => {
	if (!Notification) return;
	if (Notification.permission === 'granted') {
		new Notification(message);
	} else {
		alert(message);
	}
};

export const requestNotificationPermission = async () => {
	if (!Notification) return;
	if (Notification.permission === 'granted') {
		return;
	}
	await Notification.requestPermission();
	notificationPermissionStatus.set(Notification.permission);
};
