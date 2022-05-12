<template>
<img
  class="mobile"
	src="../assets/logo-sm.svg"
	alt="Logo rocket coffee"
/>

<img
	class="desktop"
	src="../assets/logo-lg.svg"
	alt="Logo rocket coffee"
/>
</template>

<style scoped lang="scss">
img {
	&.desktop {
		display: none;
	}

	&.mobile {
		display: initial;
	}

	@media(min-width: 860px) {
		&.desktop {
			display: initial;
		}

		&.mobile {
			display: none;
		}
	}
}
</style>
