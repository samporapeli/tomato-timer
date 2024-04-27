<section>
	<h1>Tomato Timer</h1>
	<slot />
</section>

<style lang="scss">
$tomato-color: hsl(13, 66%, 44%);
$background-color: darken($tomato-color, 10%);

:global(html) {
	background-color: $background-color;
	color: white;
	font-family: 'Roboto', sans-serif;
	text-align: center;

	:global(button), :global(input) {
		min-height: 3rem;
		border: none;
		border-radius: 0.8rem;
		margin: 0.1rem 0.3rem;
		background-color: darken($background-color, 10%);
		color: white;
		font-weight: bold;
		cursor: pointer;
		transition: 0.15s;
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

	h1 {
		margin-bottom: 3rem;
	}

	section {
		max-width: 25rem;
		min-height: 80vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
