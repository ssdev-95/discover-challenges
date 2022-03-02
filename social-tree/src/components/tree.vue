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
		<a class="link-card" href="#" >
			<span>LINK</span>
		</a>
		<a class="link-card" href="#" >
			<span>LINK</span>
		</a>
		<a class="link-card" href="#" >
			<span>LINK</span>
		</a>
		<a class="link-card" href="#" >
			<span>LINK</span>
		</a>
	</div>
	<div class="user-social">
		<SocialLink
			:url="social.twitter"
			icon="@/assets/twitter.svg"
			alt="twitter"
		/>
		<SocialLink
			:url="social.twitch"
			icon="@/assets/twitch.svg"
			alt="twitch" 
		/>
		<SocialLink
			:url="social.instagram"
			icon="@/assets/instagram.svg"
			alt="instagram"
		/>
		<SocialLink
			:url="social.linkedin"
			icon="@/assets/linkedin.svg"
			alt="linkedin"
		/>
		<SocialLink
			:url="social.github"
			icon="@/assets/github.svg"
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
	@include link-tree;
}

.user-pic {
	@include user-pic;
}

.user-links {
	@include user-links;
}

.user-social {
	@include user-social;
}
</style>
