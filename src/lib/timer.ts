import { get } from 'svelte/store';

import { defaultTitle } from '$lib/config';
import { notify, requestNotificationPermission } from '$lib/notifications';
import { documentTitle, startTime, timerMinutes, timerProgress, timerText } from '$lib/stores';
import { timerTextFromSeconds } from '$lib/utils';

let currentTimerInterval: number | undefined;

const updateTimer = () => {
	if (!get(startTime)) {
		console.error('Timer started without a start time!');
		return;
	}
	const secondsElapsed = (+new Date() - +get(startTime)) / 1000;
	const secondsRemaining = get(timerMinutes) * 60 - secondsElapsed;
	timerProgress.set(secondsElapsed / (get(timerMinutes) * 60));

	if (get(timerProgress) >= 1) {
		timerProgress.set(1);
		clearInterval(currentTimerInterval);
		documentTitle.set(defaultTitle);
		startTime.set(null);
		timerText.set('00:00');
		notify('🍅 Tomato timer finished!');
		return;
	}
	timerText.set(timerTextFromSeconds(secondsRemaining));
	documentTitle.set(timerText);
};

export const handleTimerToggle = () => {
	handleStart();
};

export const handleStart = (minutes: number | undefined = undefined) => {
	requestNotificationPermission();
	if (currentTimerInterval) {
		clearInterval(currentTimerInterval);
	}
	if (minutes) {
		timerMinutes.set(minutes);
		startTime.set(null);
	}
	if (!get(startTime)) {
		startTime.set(new Date());
	}
	updateTimer();
	currentTimerInterval = setInterval(updateTimer, 100);
};
