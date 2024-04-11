import { get } from 'svelte/store';
import { timerTextFromSeconds } from '$lib/utils';
import { startTime, timerMinutes, timerProgress, timerText, documentTitle } from '$lib/stores';
import { defaultTitle } from '$lib/config';

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
		alert('Timer finished!');
		return;
	}
	timerText.set(timerTextFromSeconds(secondsRemaining));
	documentTitle.set(timerText);
};

export const handleTimerToggle = () => {
	handleStart();
};

export const handleStart = (minutes: number | undefined = undefined) => {
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
