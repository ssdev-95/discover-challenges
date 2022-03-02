<template>
<button
	class="switcher"
	:class="{'dark-mode': isDarkMode}"
	@click="toggleTheme"
>
	<div class="thumb"/>
</button>
</template>

<script setup>
import { inject } from 'vue'

const isDarkMode = inject('IS-DARK-MODE')
const toggleTheme = inject('TOGGLE-THEME')
</script>

<style lang="scss">
@import "@/styles/switcher.scss";

.switcher {
	@include Switcher;
}
</style>
