<script lang="ts">
	import Footer from '../components/Footer.svelte';

	import { defaultTitle, plausible } from '$lib/config';
</script>

<svelte:head>
	{#if plausible.isConfigured}
		<script async defer data-domain="{plausible.dataDomain}" src="{plausible.scriptSrc}"></script>
	{/if}
	<title>{defaultTitle}</title>
</svelte:head>

<section>
	<h1>Tomato Timer</h1>
	<slot />
</section>
<Footer />

<style lang="scss">
@use '../styles/colors.scss' as *;
$transition-time: 0.15s;

:global(html), :global(body) {
	background-color: $background-color;
	color: white;
	font-family: 'Roboto', sans-serif;
	text-align: center;
	padding: 0;
	margin: 0;

	:global(button), :global(input) {
		min-height: 3rem;
		border: none;
		border-radius: 0.8rem;
		margin: 0.1rem 0.3rem;
		background-color: darken($background-color, 10%);
		color: white;
		font-weight: bold;
		cursor: pointer;
		transition: $transition-time;
		&:hover {
			background-color: darken($background-color, 20%);
			border-radius: 0.6rem;
		}
		&:focus {
			outline: none;
			background-color: darken($background-color, 20%);
		}
	}

	// hide the default input spinners
	:global(input[type="number"]::-webkit-inner-spin-button),
	:global(input[type="number"]::-webkit-outer-spin-button),
	:global(input[type="number"]) {
		-webkit-appearance: none;
		-moz-appearance: textfield;
	}

	:global(button) {
		padding: 0.5rem 1rem;
	}

	:global(input) {
		padding: 0rem 1rem;
	}

	:global(h1) {
		margin-bottom: 3rem;
	}

	:global(a) {
		color: white;
		text-decoration: underline;
		font-weight: bold;
		transition: $transition-time;
		&:hover {
			color: lighten($tomato-color, 50%);
		}
	}

	section {
		max-width: 25rem;
		min-height: calc(100vh - 6rem);
		margin: 0 auto 4rem auto;
		padding: 0.2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
