<script lang="ts">
	import { appVersion } from '$lib/config';
</script>

<footer>
<div>🍅 Tomato Timer v{appVersion} ⏲️</div>
<div>🛠️ Created by <a href="https://sampo.website">Sampo Rapeli</a> 🧑‍💻</div>
<div>💻 <a href="https://github.com/samporapeli/tomato-timer">Source code</a> (GPL-3.0) 🔓</div>
</footer>


<style lang="scss">
@use '../styles/colors.scss' as *;
footer {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0;
	padding: 0.5rem;
	font-size: 0.8rem;
	min-height: 2rem;
	transition: 0.15s;
	border-radius: 1rem 1rem 0 0;
	background-color: darken($background-color, 10%);
	&:hover {
		border-radius: 0.4rem 0.4rem 0 0;
		background-color: darken($background-color, 20%);
	}
	div {
		margin: 0.2rem;
	}
}
</style>
