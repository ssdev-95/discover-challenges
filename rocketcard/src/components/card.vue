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
				<p>{{user.login}}</p>
			</header>

			<div class="user-info">
			  <span>
				  <img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/followers.svg"
						alt="svg icon"
					/>
					{{user.followers}} Followers
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/following.svg"
						alt="svg icon"  
	        />
					{{user.following}} Following
	      </span>
				<span>
				  <img
					  src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/repository.svg"
					  alt="svg icon"
					/>
					{{user.public_repos}} Repositories
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/company.svg"
						alt="svg icon"
					/>
					{{user.company}}
				</span>
				<span>
					<img
						src="https://raw.githubusercontent.com/xSallus/discover-challenges/main/rocketcard/src/assets/location.svg"
						alt="svg icon"
					/>
					{{user.location}}
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
  name: 'Card',
	beforeMount: async () => {
	  const { location } = window
		const [, login] = String(location).split('=')
		const res = await fetch(`${api_uri}/${login}`)
		const user = await res.json()

		localStorage.setItem(index, JSON.stringify(user))
	},
	data: () => {
	  const stored = localStorage.getItem(index)
		const user = stored ? JSON.parse(stored) : {
			login: 'N/A',
  		avatar_url: '',
  		company: 'N/A',
  		location: 'N/A',
  		public_repos: '00',
  		followers: '00',
  		following: '00'
		}

		setTimeout(()=>{
		  alert(stored)
		}, 3000)

		return { user }
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
