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
$Black: #4D4C59;
$White: #f0f2f5;
$Purple: #6C63FF;
$LightGrey: #C8C8C8;
$TextColor: #9C9AB6;
$Bg: $White;

$BgBottom: "https://raw.githubusercontent.com/xSallus/discover-challenges/main/countdown/src/assets/bottom-image.svg";
$BgTop: "https://raw.githubusercontent.com/xSallus/discover-challenges/main/countdown/src/assets/top-image.svg";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
  font-family: 'Poppins', sans-serif;
	width: 100vw;
	height: 100vh;
	padding: 1rem;

	background-color: $Bg;
	background-image: url($BgTop), url($BgBottom);
	background-repeat: no-repeat, no-repeat;
	background-position: top right, bottom left;

	display: flex;
	justify-content: space-between;
	align-items: center;

	& > main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	
		gap: 2rem;

		& > h1 {
			color: $Purple;
			font-weight: 600;
		}

		& > p {
			color: $TextColor;
			font-size: 1rem;
			text-wrap: word-wrap;

			@media (max-width:720px) {
				width: 75vw;
			}
		}
	}

	@media(min-width:1024px) {
		padding: 3rem;
		background-position: top center, bottom center;
	}
}

.rocket {
	width: 50%;
	height: auto;
	@media(max-width:1024px) {
		display: none;
	}
}

.subscribe {
	width: 10rem;
	padding: 0.7rem 1.25rem;
	background: $Purple;
	border-radius: 0.68rem;
	border: none;
	color: $White;
	text-align: center;
}
</style>
