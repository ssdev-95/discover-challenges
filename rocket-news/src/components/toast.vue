<script setup>
import { email, isToastShown } from '../composables/toast'
const msg = "Confimation email sent to"
</script>

<template>
<div
	id="toast-wrapper"
	:class="isToastShown ? 'shown' : ''"
>
	<div>
		<img src="/assets/send.svg" alt="Aarow icon" />
	</div>

	<div>
		<p>{{ msg }}</p>
	</div>

	<div>
		<p>{{ email }}</p>
	</div>
</div>
</template>

<style scoped lang="scss">
@import "../colors.scss";
#toast-wrapper {
	background: rgba(42,119,83,.67);
	border: 1px solid #42B983;
	border-radius: 0.5rem;

	height: 3rem;
	width: 17rem;
	padding: 2px 0;

	display: grid;
	grid-template-rows: 50% 50%;
	grid-template-columns: repeat(5, 1fr);
	grid-template-areas: "img msg msg msg msg"
											 "img email email email email";

	position: fixed;
	bottom: -4.25rem;
	left: 50vw;

	transform: translateX(-50%);
	transition: all 2s cubic-bezier(0.7,0.7,0.7,0.7);
	
	&.shown {
		bottom: 12vh;
	}

	& > div {
		position: relative;
		grid-area: msg;

		&:first-child {
			grid-area: img;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&:last-child {
			grid-area: email;
			padding-right: 0.8rem;
		}

		p {
			color: #42B983;
			font-size: 1rem;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		img {
			filter: invert(100%);
		}
	}
}
</style>
