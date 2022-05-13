<script setup lang="ts">
import Sidebar from './components/sidebar.vue'
import { selectedRole } from './composables/menu'
</script>

<template>
  <Sidebar />
	<h2>{{selectedRole}}</h2>
</template>

<style lang="scss">
@import "./colors.scss";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

	font-weight: 500;
  text-align: center;
	color: $text-color;
}

#app {
	width: 100vw;
	height: 100vh;
	overflow-y: auto;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	background: $body-bg-color;

	h2 {
		margin: 1.8rem 1.25rem;
	}

	button {
		background: transparent;
		border: none;
	}
}
</style>
