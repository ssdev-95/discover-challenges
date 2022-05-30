<script setup lang="ts">
import { ref, Ref, watch } from "vue";

let isDarkTheme: Ref<boolean> = ref(true)

function toggle() {
	const app = document.querySelector("#app")

	if(!isDarkTheme.value) {
		app.classList.add("light")
		return;
	}

	app.classList.remove("light")
	return;
}

watch(isDarkTheme, toggle);
</script>

<template>
<label
	class="switcher"
	:class="isDarkTheme ? 'active' : ''"
>
	<input
		v-model="isDarkTheme"
		type="checkbox"
	/>
	<div class="icons">
		<img src="/moon.svg" alt="A moon svg icon" />
		<img src="/sun.svg" alt="A sun svg icon" />
	</div>
	<div
		class="thumb"
		:class="isDarkTheme ? 'active' : ''"
	/>
</label>
</template>

<style lang="scss">
@import "../colors.scss";

$dimension:calc(2.5rem - 4px);
$moon:#f1c40f;
$sun:#f39c12;

.switcher {
	background:$label;
	box-shadow: 1px 1px 1px 0px $sun;

	width:6rem;
	height:2.5rem;

	border-radius:2.5rem;
	position:relative;

	display:flex;
	transition:box-shadow 0.25s $easing;

	&.active {
		box-shadow: 1px 1px 1px 0px $moon;
	}

	input {
		transform:translateX(-100vw);
	}

	& > .thumb {
		background:$light;
		position:absolute;
		height:$dimension;
		width:$dimension;
		border-radius:$dimension;

		top:2px;
		left:2px;

		transition:all 0.25s $easing;

		&.active {
			left:calc(100% - $dimension - 2px);
		}
	}

	& > .icons {
		width:inherit;
		height:inherit;
		padding:0.5rem;
		font-size:0;

		position:absolute;

		display:flex;
		align-items:center;
		justify-content:space-between;
	}
}
</style>
