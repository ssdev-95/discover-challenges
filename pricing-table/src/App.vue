<script setup lang="ts">
import PriceCard from './components/price-card.vue'
import { plans } from './composables/plans'
</script>

<template>
<header>
	<h1>Meet our plans</h1>
	<p>Meet our solutions and choose the suitable plan for your next project.</p>
</header>

<div>
	<PriceCard
		v-for="plan of plans"
		:key="plan.id"
		:planid="plan.id"
	/>
</div>

<footer>
	<p>Made with 💙 in a smartphone. . .</p>
</footer>
</template>

<style lang="scss">
@import "./colors.scss";

* {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	width: 100vw;
	min-height: 100vh;
	background: $white;

	& > header {
		width: 100vw;
		height: 22rem;
		padding: 3rem 0;
		background: $blue;
		color: $white;

		h1 {
			margin: 0 auto;
		}

		p {
		 margin: 2rem auto;
		}
	}

	& > div {
		 transform: translateY(-8rem);
		 display: flex;
		 justify-content: center;
		 gap: 1.5rem;
		 flex-wrap: wrap;
		 max-width: 90vw;
		 margin: 0 auto;
	}

	& > footer {
		width: 100%;
		height: 2.5rem;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-top: auto;
	}
}
</style>
