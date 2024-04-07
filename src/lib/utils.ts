const padded = (input: number | string): string => {
	return input.toString().padStart(2, '0');
};

export const timerTextFromSeconds = (secondsRemaining: number): string => {
	const minutes = Math.floor(secondsRemaining / 60);
	const seconds = Math.floor(secondsRemaining - minutes * 60);
	return `${padded(minutes)}:${padded(seconds)}`;
};
