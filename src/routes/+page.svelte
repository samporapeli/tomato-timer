<script lang="ts">
	import { onMount } from 'svelte';
	import { startTime, timerMinutes, timerProgress, timerText } from '$lib/stores';
	import { handleStart, handleTimerToggle } from '$lib/timer';
  import { defaultTitle } from '$lib/config';

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

<h2>{$timerText}</h2>
<h3>{($timerProgress * 100).toFixed(2)} %</h3>
