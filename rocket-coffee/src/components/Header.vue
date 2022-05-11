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

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		a {
			font-size: 18px;
		}
	}
}
</style>
