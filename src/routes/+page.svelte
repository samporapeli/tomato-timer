<script lang="ts">
	import { onMount } from 'svelte';

	import NotificationStatus from '../components/NotificationStatus.svelte';

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
<button disabled={!manualInputMinutes} on:click={() => handleStart(manualInputMinutes)}>{manualInputMinutes ? `Custom (${manualInputMinutes} minute${manualInputMinutes === 1 ? '' : 's'})` : 'input is not valid'}</button>
</div>

<h2 id="timer">{$timerText}</h2>
<h3 id="progress">{($timerProgress * 100).toFixed(2)} %</h3>
<NotificationStatus />

<style lang="scss">
	#quickstart, #manual {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.3rem;
	}

	#manual {
		input {
			width: 25%;
			text-align: right;
		}
		button {
			width: 70%;
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
