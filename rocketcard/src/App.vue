<template>
  <div id="app">
	  <div>
			<p>Compartilhe seu #rocketcard</p>
			<RocketCard bgcolor="#000"/>
	  </div>
		<div>
		  <p>Customizar Rocketcard</p>
			<button>Gerar background</button>
		</div>
	</div>
</template>

<script>
import RocketCard from "./components/card.vue"

export default {
  name: 'App',
  components: { RocketCard }
}
</script>

<style lang="scss">
@import "./assets/styles/colors.mixin.scss";
@import "./assets/styles/home.mixin.scss";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: $white;

	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#app {
	@include App;
}
</style>
