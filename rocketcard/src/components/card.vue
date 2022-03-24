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
					1000 Followers
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg"
						alt="svg icon"  
	        />
					54 Following
	      </span>
				<span>
				  <img
					  src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/repository.svg"
					  alt="svg icon"
					/>
					41 Repositories
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
					Brasil
				</span>
			</div>

			<img
				class="avatar"
				src="https://github.com/birobirobiro.png"
				alt="github_user_avatar"
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
const api_uri = 'https://api.github.com/users'
const index = '@rocketcard:profile'

export default {
  name: 'RocketCard',
	async beforeMount() {
	  const url = String(window.location)
		const [, login] = url.split('=')
		const res = await fetch(`${api_uri}/${login}`)
		const user = await res.json()

		localStorage.setItem(index, JSON.stringify(user))
	},
	data() {
	  const stored = localStorage.getItem(index)

		if (!stored) {
		  return {
			  login: 'N/A',
				avatar_url: 'https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg',
				public_repos: 'N/A',
				followers: 'N/A',
				following: 'N/A',
				company: 'N/A',
				location: 'N/A'
			}
		}

		return {
		  user: JSON.parse(stored)
		}
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
