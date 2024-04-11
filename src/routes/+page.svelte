<script lang="ts">
	import { onMount } from 'svelte';

	import { defaultTitle } from '$lib/config';
	import { startTime, timerMinutes, timerProgress, timerText } from '$lib/stores';
	import { handleStart, handleTimerToggle } from '$lib/timer';


	let manualInputMinutes = $timerMinutes || 25;
	
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

<div id="quickstart">
{#each [25, 5, 10] as minutes}
	<button on:click={() => handleStart(minutes)}>{minutes} minutes</button>
{/each}
</div>
<div id="manual">
<input type="number" min="0" bind:value={manualInputMinutes} />
<button on:click={() => handleStart(manualInputMinutes)}>Start</button>
</div>

<h2 id="timer">{$timerText}</h2>
<h3 id="progress">{($timerProgress * 100).toFixed(2)} %</h3>

<style lang="scss">
	#quickstart, #manual {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.3rem;
	}

	button, input {
		min-height: 3rem;
	}

	#manual {
		input {
			width: 80%;
		}
		button {
			width: calc(20% - 1rem);
		}
	}

	#timer {
		margin-top: 4rem;
	}

	#progress {
		margin-top: 3rem;
		color: lightgray;
	}
</style>
