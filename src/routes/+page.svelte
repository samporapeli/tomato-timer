<script lang="ts">
	import { onMount } from 'svelte';
	import { timerTextFromSeconds } from '$lib/utils';
	import { startTime, timerMinutes } from '$lib/stores';
	
	const defaultTitle = 'Tomato Timer';
	
	let timerText = '--:--';
	let progress = 0;
	let currentTimerInterval: number | undefined;
	let manualInputMinutes = $timerMinutes || 25;
	
	const updateTimer = () => {
		if (!$startTime) {
			console.error('Timer started without a start time!');
			return;
		}
		const secondsElapsed = (+new Date() - +$startTime) / 1000;
		const secondsRemaining = $timerMinutes * 60 - secondsElapsed;
		progress = secondsElapsed / ($timerMinutes * 60);
	
		if (progress >= 1) {
			progress = 1;
			clearInterval(currentTimerInterval);
			document.title = defaultTitle;
			startTime.set(null);
			timerText = '00:00';
			alert('Timer finished!');
			return;
		}
		timerText = timerTextFromSeconds(secondsRemaining);
		document.title = timerText;
	};
	
	const handleTimerToggle = () => {
		handleStart();
	};
	
	const handleStart = (minutes: number | undefined = undefined) => {
		if (currentTimerInterval) {
			clearInterval(currentTimerInterval);
		}
		if (minutes) {
			timerMinutes.set(minutes);
			startTime.set(null);
		}
		if (!$startTime) {
			startTime.set(new Date());
		}
		updateTimer();
		currentTimerInterval = setInterval(updateTimer, 100);
	};
	
	onMount(() => {
		if ($startTime) {
			handleStart();
		}
		document.addEventListener('keydown', (event) => {
			if (event.code === 'Space') {
				handleTimerToggle();
			}
		});
	});
</script>

<svelte:head>
	<title>{defaultTitle}</title>
</svelte:head>

<h1>Tomato Timer</h1>

<div id="quickstart">
{#each [25, 5, 10] as minutes}
	<button on:click={() => handleStart(minutes)}>{minutes} minutes</button>
{/each}
</div>
<div id="manual">
<input type="number" min="0" bind:value={manualInputMinutes} />
<button on:click={() => handleStart(manualInputMinutes)}>Start</button>
</div>

<h2>{timerText}</h2>
<h3>{(progress * 100).toFixed(2)} %</h3>
