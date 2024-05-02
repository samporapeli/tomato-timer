<script lang="ts">
	import { onMount } from 'svelte';

	import NotificationStatus from '../components/NotificationStatus.svelte';

	import { startTime, timerMinutes, timerProgress, timerText } from '$lib/stores';
	import { startTimer, presets } from '$lib/timer';


	let manualInputMinutes = $timerMinutes || 25;
	
	onMount(() => {
		if ($startTime) {
			startTimer();
		}
		// listen messages from the service worker
		navigator.serviceWorker.addEventListener('message', (event) => {
			if (event.data.type === 'notification-action') {
				startTimer(Number.parseInt(event.data.value.split('-')[1]));
			}
		});
	});

	const handleMinuteInputKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') startTimer(manualInputMinutes);
	};
</script>

<div id="quickstart">
{#each presets as minutes}
	<button on:click={() => startTimer(minutes)}>{minutes} minutes</button>
{/each}
</div>
<div id="manual">
<input type="number" min="0" bind:value={manualInputMinutes} on:keydown={handleMinuteInputKeydown}/>
<button disabled={!manualInputMinutes} on:click={() => startTimer(manualInputMinutes)}>{manualInputMinutes ? `Custom (${manualInputMinutes} minute${manualInputMinutes === 1 ? '' : 's'})` : 'input is not valid'}</button>
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
