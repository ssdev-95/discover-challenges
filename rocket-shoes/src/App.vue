<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Main from './components/main.vue'
</script>

<template>
  <Header />
  <Main />
	<Footer />
</template>

<style lang="scss">
@import "./colors.scss";

* {
  font-family:Roboto, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  
	margin:0;
	padding:0;
	box-sizing:border-box;
}

#app {
	width:100vw;
	min-height:100vh;
	background:$background;
}
</style>
