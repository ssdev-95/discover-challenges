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
		for="plan of plans"
		:key="plan.id"
		:plan="plan"
	/>
</div>
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
	height: 100vh;
	background: $white;
}
</style>
