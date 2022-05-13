<script setup lang="ts">
import { isMenuOpen, roles } from '../composables/menu'
import MenuButton from './menu-button.vue'
import RoleButton from './role-button.vue'
</script>

<template>
<section id="menu-wrapper">
	<header :class="!isMenuOpen ? 'reset' : ''">
		<img
			v-if="isMenuOpen"
			src="/assets/logo.svg"
			alt="Vet logo icon"
		>
	  <MenuButton />
	</header>
	<div :class="!isMenuOpen ? 'reset' : ''">
		<RoleButton
			v-for="({ name, icon }) of roles"
			:key="name"
			:role="name"
			:icon="'/assets/'+icon"
		/>
	</div>
	<footer :class="!isMenuOpen ? 'reset' : ''">
		<div
			v-if="isMenuOpen"
		>
		<img
			src="https://avatars.githubusercontent.com/u/14876382?v=4"
			alt="User profike picture: Birobirobiro"
		/>
	  <p>
			Tio Yan
			<span>Ademiro</span>
		</p>
		</div>
	  <img
			src="/assets/log-out.svg"
			alt="log out button"
		/>
	</footer>
</section>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#menu-wrapper {
	min-height: 100vh;
	width: fit-content;
	overflow-y: auto;

	background: $green;
	transition: all 1.5s cubic-bezier(0.7, 0.7, 0.7, 0.7);

	header {
		width: 100%;
		padding: 1rem;
		height: 4rem;

		display: flex;
		align-items: center;
		justify-content: space-between;

		&.reset {
			justify-content: center;
		}
	}

	& > div {
		width: 100%;
		padding: 1rem;
		height: calc(100vh - 8rem);


		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		gap: 1rem;

		&.reset > button.active {
			background: $light-grey;
		}

		@media(min-height:720px) {
			height: calc(100vh - 8rem);
		}
	}

	footer {
		height: 4rem;
		width: 100%;
		padding: 0.5rem;

		background: $light-green;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;

		overflow: hidden;

		&.reset {
			justify-content: center;
		}

		& > div {
		  display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;

			height: 4rem;
			overflow: hidden;

			transition: width 0.5s cubic-bezier(0.7, 0.7, 0.7, 0.7);
	
		  img {
				height: 3rem;
				width: auto;
				border-radius: 0.85rem;
			}
	
		  p {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: flex-start;

				span {
					font-weight: 400;
					font-size: 90%;
				}
			}
		}

		& >img {
			width: auto;
			height: 2.28rem;
		}
	}
}
</style>
