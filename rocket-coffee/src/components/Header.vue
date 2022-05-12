<script setup lang="ts">
import Logo from './Logo.vue'
import Button from './Button.vue'
import MenuButton from './MenuButton.vue'
import Navigation from './Navigation.vue'
</script>

<template>
<header id="header-wrapper">
	<div>
		<Logo />
  	<Navigation />
		<Button />
		<MenuButton />
	</div>
</header>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#header-wrapper {
  width: 100%;
	height: 5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 1248px;
		max-width: 98vw;
		padding: 0.2rem 1.5rem;

		& > #get-coffee-button {
			display: none;
		}
	}

	@media(min-width: 860px) {
		div > button {
			display: flex;
		}
	}
}
</style>
