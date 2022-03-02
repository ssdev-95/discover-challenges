<template>
<div
	class="wrapper"
	:class="{'dark-mode': isDarkMode}"
>
  <Switcher />
  <Tree />
</div>
</template>

<script setup>
import { ref, provide, onBeforeMount } from 'vue'
import Tree from '@/components/tree.vue'
import Switcher from '@/components/switcher.vue'

let isDarkMode = ref(false)
function toggleTheme() {
	const state = !isDarkMode.value

	isDarkMode.value = state
	localStorage.setItem('@Tree:theme', state?1:0)
}

onBeforeMount(() => {
	const state = !!localStorage.getItem('@Tree:theme')
	alert(state)
	isDarkMode.value = state
})

provide('IS-DARK-MODE', isDarkMode)
provide('TOGGLE-THEME', toggleTheme)
</script>

<style lang="scss">
$BG-LIGHT: #f0f2f5;
$BG-DARK: #000000;
$BT-PRIMARY: #41b883;

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.wrapper {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;

	background: $BG-LIGHT;
	transition: background 0.25s cubic-bezier(0.7, 0.7, 0.7, 0.7);

	&.dark-mode {
		background: $BG-DARK;
	}
}
</style>
