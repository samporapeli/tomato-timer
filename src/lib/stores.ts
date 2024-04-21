import { type Writable, writable } from 'svelte/store';

import { browser } from '$app/environment';
import { defaultTitle } from '$lib/config';

/* Start time of the timer */
const startTimeKey = 'tomatoTimerStartTime';
const storedStartTimeValue = browser && JSON.parse(localStorage.getItem(startTimeKey) || 'null');
const startTimeValue = storedStartTimeValue ? new Date(storedStartTimeValue) : null;
export const startTime: Writable<Date | null> = writable(startTimeValue);

startTime.subscribe((value: Date | null) => {
	browser && localStorage.setItem(startTimeKey, JSON.stringify(value?.toISOString() || null));
});

const timerMinutesKey = 'tomatoTimerMinutes';
const storedTimerMinutesValue = browser && JSON.parse(localStorage.getItem(timerMinutesKey) || 'null');
export const timerMinutes: Writable<number> = writable(storedTimerMinutesValue || 25);

timerMinutes.subscribe((value: number) => {
	browser && localStorage.setItem(timerMinutesKey, JSON.stringify(value));
});

export const timerText: Writable<string> = writable('--:--');
export const timerProgress: Writable<number> = writable(0);

export const documentTitle: Writable<string> = writable(defaultTitle);

type NotificationPermission = 'default' | 'granted' | 'denied';
export const notificationPermissionStatus: Writable<NotificationPermission> = writable(browser && Notification.permission);
