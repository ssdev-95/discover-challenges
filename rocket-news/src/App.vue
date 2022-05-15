<script setup>
import { ref } from 'vue'

import Toast from './components/toast.vue'
import Main from './components/main.vue'

const email = ref('')
</script>

<template>
	<header>
		<img src="/assets/logo.svg" alt="RocketNews logo"/>
	</header>
  <Main />
  <Toast />
</template>

<style lang="scss">
@import "./colors.scss";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $text-color;
}

#app {
	height: 100vh;
	width: 100vw;
	background-color: $body-bg-color;
	overflow-y: auto;

	header {
		height: 7rem;
		width: 100%;
		display: flex;
		align-items: center;

		padding-left: 1.25rem;
	
		img {
			height: 4rem;
			width: auto;
		}
	}

	@media(min-width:700px) {
	  background-image: url(/assets/read_news.jpg);
		background-repeat: no-repeat;
		background-size: 55% 100%;
		background-position: right center;
	}
}

button {
	font-size: 0;
}

a {
	text-decoration: none;
}
</style>
