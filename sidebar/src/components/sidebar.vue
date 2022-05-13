<script setup lang="ts">
import { isMenuOpen, roles } from '../composables/menu'
import MenuButton from './menu-button.vue'
import RoleButton from './role-button.vue'
</script>

<template>
<section id="menu-wrapper">
	<header :class="!isMenuOpen ? 'reset' : ''">
		<img
			src="../assets/logo.svg"
			:style="isMenuOpen ? 'width:initial;' : 'width: 0;'"
			alt="Vet logo icon"
		>
	  <MenuButton />
	</header>
	<div :class="!isMenuOpen ? 'reset' : ''">
		<RoleButton
			v-for="role of roles"
			:key="role.name"
			:role="role"
		/>
	</div>
	<footer :class="!isMenuOpen ? 'reset' : ''">
		<div :style="isMenuOpen ? 'width:initial;' : 'width: 0;'">
			<img
				src="https://avatars.githubusercontent.com/u/14876382?v=4"
				alt="User profike picture: Birobirobiro "
			/>
			<p>
				Tio Yan
				<span>Best Ademiro</span>
			</p>
		</div>
	  <img
			src="../assets/log-out.svg"
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
	transition: width 0.5s cubic-bezier(0.7, 0.7, 0.7, 0.7);

	header {
		width: 100%;
		padding: 1rem;
		height: 4rem;

		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: width 0.5s cubic-bezier(0.7,0.7,0.7,0.7);

		&.reset {
			justify-content: center;
		}
	}

	div {
		width: 100%;
		padding: 1rem;
		height: calc(100% - 8rem);


		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		transition: width 0.5s cubic-bezier(0.7,0.7,0.7,0.7);

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
		justify-content: flex-start;
		gap: 0.5rem;

		transition: width 0.5s cubic-bezier(0.7,0.7,0.7,0.7);

		&.reset {
			justify-content: center;

			img:last-child {
				margin: 0;
			}
		}
		
		& > div {
			display: flex;
			height: 100%;
			overflow: hiddeb;

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

  		img {
  			height: 2.5rem;
  			width: auto;
  			border-radius: 0.85rem;
		  }
		}
		
		img {
			width: auto;
			margin-left: 1.5rem;
			height: 2.28rem;
		}
	}
}
</style>
