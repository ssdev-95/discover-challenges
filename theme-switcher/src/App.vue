<script setup lang="ts">
import Switcher from "./components/switcher.vue";
</script>

<template>
	<Switcher />
</template>

<style lang="scss">
@import "./colors.scss";

* {
	margin:0;
	padding:0;
	box-sizing:border-box;
}

#app {
  background:$dark;
	width:100vw;
	height:100vh;

	display:flex;
	align-items:center;
	justify-content:center;

	transition:background 0.35s $easing;

	&.light {
		background:$light;
	}
}
</style>
