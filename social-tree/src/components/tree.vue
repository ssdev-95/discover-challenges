<template>
<div class="link-tree">
  <div class="user-pic">
		<img src="" alt="xSallus" />
	</div>
	<div class="user-links"></div>
	<div class="user-social">
		<img src="../assets/twitter.svg" alt="twitter" />
		<img src="../assets/twitch.svg" alt="twitch" />
		<img src="../assets/instagram.svg" alt="instagram" />
		<img src="../assets/linkedin.svg" alt="linkedin" />
		<img src="../assets/github.svg" alt="github" />
	</div>
</div>
</template>

<script setup></script>

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
