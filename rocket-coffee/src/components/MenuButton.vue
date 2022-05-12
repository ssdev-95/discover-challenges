<script setup lang="ts" >
import { isOpen, toggleMenu } from '../composables/menu'
</script>

<template>
<button
	id="hamburger-button"
	@click="toggleMenu"
>
	<img
		v-if="isOpen"
		src="../assets/menu-buguer-close.svg"
		alt="Menu mobile icon: two rectangles"
	/>

	<img
		v-else
		src="../assets/menu-buguer-open.svg"
		alt="Menu mobile icon: styled X"
	/>
</button>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#hamburger-button {
	background: rgba(0,0,0,0);

	display: flex;
	align-items: center;
	justify-content: center;

	border: 0;

	z-index: 6;

	@media(min-width: 860px) {
		display: none;
	}
}
</style>
