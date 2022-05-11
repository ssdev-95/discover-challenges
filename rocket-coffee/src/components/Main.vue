<template>
<main id="main-wrapper" >
	<h1>Greatr Coffee</h1>
	<code>&lt;Greate Code/&gt;</code>
</main>
</template>

<style scoped lang="scss">
@import "../colors.scss";

#main-wrapper {
	width: 100%;
	height: calc(100vh - 5rem);

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	font-size: 50px;

	h1 {
		font-weight: 600;
	}

	code {
		color: $purple;
	}

	@media(min-width: 1024px) {
		font-size: 80px;
	}
}
</style>
