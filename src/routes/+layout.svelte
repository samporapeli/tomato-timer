<section>
	<h1>Tomato Timer</h1>
	<slot />
</section>

<style lang="scss">
:global(html) {
	background-color: hsl(9, 20%, 4%);
	color: white;
	text-align: center;

	:global(button), :global(input) {
		min-height: 3rem;
	}

	h1 {
		margin-bottom: 3rem;
	}

	section {
		max-width: 20rem;
		min-height: 80vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
