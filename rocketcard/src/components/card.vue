<template>
  <section
		class="wrapper"
		v-bind:style="{ backgroundColor: props.bgcolor }"
	>
	  <div class="card">
		  <header>
				<div class="seal">
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/logo.svg"
						alt="selo rocketseat de qualidade"
					/>
				</div>
				<p>birobirobiro</p>
			</header>

			<div class="user-info">
			  <span>
				  <img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/followers.svg"
						alt="svg icon"
					/>
					999 Followers
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg"
						alt="svg icon"  
	        />
					150 Following
	      </span>
				<span>
				  <img
					  src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/repository.svg"
					  alt="svg icon"
					/>
					45 Repisitories
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/company.svg"
						alt="svg icon"
					/>
					@Rocketseat
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/location.svg"
						alt="svg icon"
					/>
					Bebedouro
				</span>
			</div>

			<img
				class="avatar"
				src="https://avatars.githubusercontent.com/u/22185823?v=4    "
				alt="github_user_birobirobiro"
			/>

			<footer>
			  <img
					src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/logo.svg"
					alt="selo rocketseat de qualidade"
				/>
				<p>ROCKETCARD</p>   
      </footer>
		</div>
	</section>
</template>

<script>
const api_uri = 'https://api.github.com/users/'

export default {
  name: 'Card',
	props: ['bgcolor'],
	beforeMount: async () => {
		const [, login] = String(window.location).split('=')
		const res = await fetch(`${api_uri}${login}`)
		const user = await res.json()
		this.user = user

		alert(JSON.stringify(user))
	},
	data: (props) => {
		let user = {}

		return { props, user }
	}
}
</script>
<style lang="scss">
@import "../assets/styles/card.mixin.scss";

.wrapper {
	@include Wrapper;
}

.card {
  @include Card;
}
</style>
