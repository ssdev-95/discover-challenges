<script setup lang="ts" >
import { isOpen, toggleMenu } from '../composables/menu'
</script>
<template>
  <nav
		id="navigation-wrapper"
		:class="!isOpen ? 'hidden' : ''"
	>
	  <a href="#">Home</a>
		<a href="#">Menu</a>
		<a href="#">Rewards</a>
		<a href="#">Gift Cards</a>
		<a href="#">Stores</a>
	</nav>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#navigation-wrapper {
	height: 100vh;
	width: 100vw;

	padding: 2rem;

	display: flex;
	flex-direction: column;
	align-items:flex-start;
	justify-content:flex-start;
	gap: 1.5rem;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;

	background: $bg;

	& > a {
	  color: $text;
	}

	@media(max-width: 859px) {
		transition: all 0.5s cubic-bezier(0.7, 0.7, 0.7, 0.7);

		&.hidden {
			top: -100vh;
		}
	}

	@media(min-width: 860px) {
		flex-direction: row;
		position: relative;
	
		background: transparent;

		height: 100%;
		width: fit-content;
	}
}
</style>
