<template>
  <section class="wrapper">
	  <div class="card">
		  <header>
				<div class="seal">
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/logo.svg"
						alt="selo rocketseat de qualidade"
					/>
				</div>
				<p>{{ user.login }}</p>
			</header>

			<div class="user-info">
			  <span>
				  <img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/followers.svg"
						alt="svg icon"
					/>
					{{ user.followers }} Followers
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg"
						alt="svg icon"  
	        />
					{{ user.following }} Following
	      </span>
				<span>
				  <img
					  src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/repository.svg"
					  alt="svg icon"
					/>
					{{ user.public_repos }} Repositories
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/company.svg"
						alt="svg icon"
					/>
					{{ user.company }}
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/location.svg"
						alt="svg icon"
					/>
					{{ user.location }}
				</span>
			</div>

			<img
				class="avatar"
				:src="user.avatar_url"
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
			  user: {
		   	  login: 'N/A',
	  			avatar_url: 'https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg',
	   			public_repos: 'N/A',
	  			followers: 'N/A',
	  			following: 'N/A',
  				company: 'N/A',
	  			location: 'N/A'
				}
			}
		}
		const parsed = JSON.parse(stored)
		return {
		  user: {
			  login: parsed.login ?? 'N/A',
				avatar_url: parsed.avatar_url ?? 'https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg',
				public_repos: parsed.public_repos ?? 'N/A',
				followers: parsed.followers ?? 'N/A',
				following: parsed.following ?? 'N/A',
				company: parsed.company ?? 'N/A',
				location: parsed.location ?? 'N/A'   
	    }
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
