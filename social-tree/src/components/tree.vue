<template>
<div
	class="link-tree"
	:class="{'dark-mode': isDarkMode}"
>
  <div class="user-pic">
		<img
			:src="avatar_url"
			alt="xSallus"
		/>
	</div>
	<p>&lt;{{username}}&nbsp;&bsol;&gt;</p>
	<div class="user-links">
		<a
			class="link-card" 
			href="https://rocketseat.com.br/ignite"
			target="__blank"
		>
			<span>Dê um boost na sua carreira | Ignite</span>
		</a>
		<a
			class="link-card"
			href="https://lp.rocketseat.com.br/inscricao/showmethecode?utm_source=google_ads&utm_medium=cpc&utm_term=srch&gclid=CjwKCAiApfeQBhAUEiwA7K_UHxJFwm_EODjdJ4vPOUC99LI5Ly3qEqJC3AjV4U_KOIa5NGrC7M5OJRoCVf4QAvD_BwE"
			target="__blank"
		>
			<span>Imscreva-se | Show Me The Code</span>
		</a>
		<a class="link-card" href="#" >
			<span>...</span>
		</a>
		<a class="link-card" href="#" >
			<span>...</span>
		</a>
	</div>
	<div class="user-social">
		<SocialLink
			:url="social.twitter"
			icon="https://raw.githubusercontent.com/xSallus/discover-challenges/main/social-tree/src/assets/twitter.svg"
			alt="twitter"
		/>
		<SocialLink
			:url="social.twitch"
			icon="https://raw.githubusercontent.com/xSallus/discover-challenges/main/social-tree/src/assets/twitch.svg"
			alt="twitch" 
		/>
		<SocialLink
			:url="social.instagram"
			icon="https://raw.githubusercontent.com/xSallus/discover-challenges/main/social-tree/src/assets/instagram.svg"
			alt="instagram"
		/>
		<SocialLink
			:url="social.linkedin"
			icon="https://raw.githubusercontent.com/xSallus/discover-challenges/main/social-tree/src/assets/linkedin.svg"
			alt="linkedin"
		/>
		<SocialLink
			:url="social.github"
			icon="https://raw.githubusercontent.com/xSallus/discover-challenges/main/social-tree/src/assets/github.svg"
			alt="github"
		/>
	</div>
</div>
</template>

<script setup >
import { inject } from 'vue'
import SocialLink from '@/components/social-link.vue'

const nickname = 'xsallus'
const username = 'Salomao S.'
const avatar_url = `https://github.com/${nickname}.png`
const social = {
	twitch: null,
	twitter: `https://mobile.twitter.com/${nickname}_dev`,
	instagram: `https://www.instagram.com/${nickname}.dev/`,
	linkedin: 'https://linkedin.com/in-salomao-vasconcelos',
	github: `https://github.com/${nickname}`
}

const isDarkMode = inject('IS-DARK-MODE')
</script>

<style lang="scss">
@import "@/styles/tree.scss";

.link-tree {
	@include LinkTree;
}

.user-pic {
	@include UserPic;
}

.user-links {
	@include UserLinks;
}

.user-social {
	@include UserSocial;
}
</style>
