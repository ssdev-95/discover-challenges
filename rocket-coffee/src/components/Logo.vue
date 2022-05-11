<script lang="ts">
import { ref, Ref } from 'vue'
const width: Ref<any> = ref(window.innerWidth)

alert(width, ': ', typeof window.innerWidth)
</script>

<template>
  <img
	  id="logo-wrapper"
		src="../assets/logo-mobile.svg"
		alt="Logo rocket coffee"
	/>
</template>

<style scoped lang="scss">
#logo-wrapper {
	height: 2.8rem;
	width: auto;
}
</style>
