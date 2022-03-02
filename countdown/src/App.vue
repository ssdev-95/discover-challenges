<template>
	<main>
		<h1>READY TO LAUNCH IN...</h1>
		<Countdown />
		<p>Subscribe to know more about what's coming on :D</p>
		<button class="subscribe">Subscribe</button>
	</main>
	<img
		class="rocket"
		src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/countdown/src/assets/rocket.svg"
		alt="Rocket"
	/>
</template>

<script setup>
import Countdown from './components/countdown.vue'
</script>

<style lang="scss">
:root {
  $Black: #4D4C59;
  $Purple: #6C63FF;
	$LightGrey: #C8C8C8;
  $TextColor: #9C9AB6;
	$Background: $Black;
}

#app {
  font-family: 'Poppins', sans-serif;
	width: 100vw;
	height: 100vh;
	padding: 1rem;

	background-color: $Background;

	display: flex;
	justify-content: space-between;
	align-items: center;

	& > main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}

	@media(min-width:1024px) {
		padding: 3rem;
	}
}

.rocket {}

.subscribe {}
</style>
