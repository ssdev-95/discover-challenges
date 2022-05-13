<script setup lang="ts">
import { isOpen } from '../composables/toast'
</script>

<template>
<div
	id="toast-wrapper"
	:class="isOpen ? 'shown' : ''"
>
	<div id="icon">
		<img
			src="../assets/cup.png"
			alt="MIT icon"
		/>
	</div>
  <span>A coffee will come from sky soon!</span>
	<span>Keep an eye. :D</span>
</div>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#toast-wrapper {
	width: 260px;
	height: 50px;

	border: 3px solid $purple;
	border-radius: 0.25rem;
	background: rgba(149, 105, 251, 0.68);

	position: fixed;
	bottom: -100px;
	left: 50vw;

	transform: translateX(-50%);
	transition: all 1.2s cubic-bezier(0.7, 0.7, 0.7, 0.7);

	display: grid;
	grid-template-rows: 50% 50%;
	grid-template-columns: repeat(5, 2fr);
	grid-template-areas:"icn ttxt ttxt ttxt ttxt"
	                    "icn btxt btxt btxt btxt";

	&.shown {
		bottom: 17vh;
	}

	& > span {
		color: $text;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 100%;
		transform: translateY(25%);

		&:first-of-type {
			grid-area: ttxt;
		}

		&:last-of-type {
			grid-area: btxt;
		}
	}

	& > #icon {
		grid-area: icn;

		display: flex;
		align-items: center;
		justify-content: center;

		& > img {
			height: 90%;
			width: auto;
			/*filter: invert(100%);*/
		}
	}
}
</style>
