<script setup lang="ts" >
import { showToast } from '../composables/toast'
</script>

<template>
  <button
		id="get-coffee-button"
		@click="showToast"
	>
	   GET MY COFFEE!
		 <img src="../assets/arrow.svg" alt="Arrow left icon" />
	</button>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#get-coffee-button {
	background: rgba(0,0,0,0);
	border: 2px solid $purple;
	border-radius: 0.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.25rem 0.75rem;

	font-size: 11px;
	font-weight: 500;

	width: 174.12px;
	height: 35px;

	img {
	  height: 11px;
		width: auto;
	}

	@media(min-width: 860px) {
		height: 172px;
		width: 37px;

		img {
			display: none;
		}
	}
}
</style>
