<template>
<div
	class="wrapper"
	:class="{'dark-mode': isDarkMode}"
>
  <button @click="toggleTheme">
		<span v-if="isDarkMode.value">Dark</span>
		<span v-else>Light</span>
	</button>
  <Tree />
</div>
</template>

<script setup>
import { ref, provide, onBeforeMount } from 'vue'
import Tree from '@/components/tree.vue'

let isDarkMode = ref(true)
function toggleTheme() {
	const state = !isDarkMode.value

	isDarkMode.value = state
	localStorage.setItem('@Tree:theme', state?1:0)
}

onBeforeMount(() => {
	isDarkMode.value = !!localStorage.getItem('@Tree:theme')
})

provide('IS-DARK-MODE', isDarkMode)
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

	& > button {
		padding: 0.25rem 0.5rem;
		width: 3rem;
		border-radius: 50px;
		background: transparent;

		position: absolute;
		top: 1rem;
		right: 1rem;

		border: 2px solid $BT-PRIMARY;

		transition: all 0.5s ease;

		&:active {
			filter: invert(10%);
		}

		& span {
			color: $BT-PRIMARY;
		}
	}

	&.dark-mode {
		background: $BG-DARK;

		& > button {
			background: $BT-PRIMARY;
			border: none;

			& span {
				color: $BG-LIGHT;
			}
		}
	}
}
</style>
