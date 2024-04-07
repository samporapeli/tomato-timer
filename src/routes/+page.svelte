<script lang="ts">
	import { onMount } from 'svelte';
	import { timerTextFromSeconds } from '$lib/utils';
	
	const defaultTitle = 'Tomato Timer';
	
	let timerMinutes = 25;
	let timerText = timerTextFromSeconds(timerMinutes * 60);
	let progress = 0;
	let startTime: Date | undefined;
	let currentTimerInterval: number | undefined;
	
	const updateTimer = () => {
		if (!startTime) {
			console.error('Timer started without a start time!');
			return;
		}
		const secondsElapsed = (+new Date() - +startTime) / 1000;
		const secondsRemaining = timerMinutes * 60 - secondsElapsed;
	
		if (secondsRemaining <= 0) {
			clearInterval(currentTimerInterval);
			document.title = defaultTitle;
			timerText = '00:00';
			alert('Timer finished!');
			return;
		}
		timerText = timerTextFromSeconds(secondsRemaining);
		document.title = timerText;
		progress = secondsElapsed / (timerMinutes * 60);
	};
	
	const handleTimerToggle = () => {
		handleStart();
	};
	
	const handleStart = (minutes: number | undefined = undefined) => {
		if (currentTimerInterval) {
			clearInterval(currentTimerInterval);
		}
		if (minutes) {
			timerMinutes = minutes;
		}
		startTime = new Date();
		updateTimer();
		currentTimerInterval = setInterval(updateTimer, 125);
	};
	
	onMount(() => {
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
<input type="number" min="0" bind:value={timerMinutes} />
<button on:click={handleTimerToggle}>Start</button>
</div>

<h2>{timerText}</h2>
<h3>{(progress * 100).toFixed(2)} %</h3>
