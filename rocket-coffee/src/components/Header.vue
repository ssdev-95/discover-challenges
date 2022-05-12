<script lang="ts">
import Button from './Button.vue'
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'
</script>

<template>
<header id="header-wrapper">
	<div>
		<Logo />
  	<Navigation />
		<Button />
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
	background: red;

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 1248px;
		max-width: 98vw;

		a {
			font-size: 18px;
			color: $text;
			text-decoration: none;
			border-bottom: 2px solid $text;
		}

		button {
			display: none;
		}
	}

	@media(min-width: 1024px) {
		div > button {
			display: flex;
		}
	}
}
</style>
