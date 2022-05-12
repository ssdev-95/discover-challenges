<script setup lang="ts" >
import Button from './Button.vue'
</script>

<template>
<main id="main-wrapper" >
	<p>
	  The coffee that'll make your code fly to the next level
	</p>
	<Button />
	<h1>
		Greate Coffee
		<code>&lt;Greate Code/&gt;</code>
	</h1>
</main>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#main-wrapper {
	width: 100%;
	height: calc(100vh - 5rem);

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: flex-start;
	gap: 2.5rem;
	padding: 7.5rem 0;

	text-align: center;

	p {
		font-size: 2rem;
		max-width: 70vw;
		margin-bottom: 2rem;
	}

	h1 {
		font-weight: 600;
		font-size: 50px;
	}

	code {
		/*Old way to outline text*/
		/*text-stroke: 2px $purple;
		text-fill-color: $bg;

		-webkit-text-stroke: 2px $purple;
		-webkit-text-fill-color: $bg;*/
	
		font-size: 50px;
		color: $bg;
		text-shadow: -1px -1px 0 $purple, 1px -1px 0 $purple, -1px 1px 0 $purple, 1px 1px 0 $purple;
	}

	@media(min-width: 1024px) {
		h1,  code {
			font-size: 80px;
		}

		& > p {
			display: none;
		}

		& > button {
			display: none;
		}
	}
}
</style>
