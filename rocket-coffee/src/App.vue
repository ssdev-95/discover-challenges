<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@import "./colors.scss";

* {
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Manrope', sans-serif;
	color: $text;
}

#app {
  height: 100vh;
	width: 100vw;
	background: $bg;
}

a {
	text-decoration: none;
}
</style>
