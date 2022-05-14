<script setup lang="ts">
import { Ref, ref, watch } from 'vue'

import {
	useMovie, getRandomMovieID, hasFailed,
	movieTitle, moviePoster, moviePlot
} from './composables/useMovie'

const isLoading:Ref<boolean> = ref(false)

async function fetchMovie() {
	const id = getRandomMovieID()
	isLoading.value = true
	await useMovie(id)
}

watch(isLoading, () => {
	if(isLoading) {
		setTimeout(() => {
			isLoading.value = false
		}, 3000)
	}
})
</script>

<template>
  <header>
		<img
			src="/shuffle.svg"
			alt="Shuffle icon, two curved arrows"
		/>
	  <p>Don't know what to watch next?</p>
	</header>

	<main v-if="!isLoading">
	  <div v-if="!hasFailed">
			<img
				v-if="moviePoster"
				:src="moviePoster"
				loading="lazy"
				alt="N/A"
			/>
			<div>
				<h1 v-if="movieTitle">{{movieTitle}}</h1>
				<p v-if="moviePlot" class="justify">
				  {{moviePlot}}
				</p>
			</div>
		</div>

		<div v-else>
			<img
				src="/poster.png"
				loading="lazy"
				alt="Failed to bring movie info"
			/>
			<p>
				Oops, today isn't a nice day to watch some movie, do ya?
				<p>Autodevs, let's code!</p>
			</p>
		</div>
	</main>

	<div
		v-else
		class="spinner-wrapper"
	>
		<div />
	</div>

	<footer>
	  <button @click="fetchMovie">
			<img
				src="/shuffle.svg"
				alt="Shuffle icon, two curved arrows"
			/>
			Find movie!
		</button>
		<p>Click on 'Find movie' button to let us bring you<br/>info of some cool movie to watch today!</p>
	</footer>
</template>

<style lang="scss">
$blue: #0A3068;
$red: #C12A23;
$black: #000000;
$white: #FFFCF9;
$gray: #1A1A1A;
$algo: #8C8C8C;
$algo2: #E9E6E3;
$gradient: linear-gradient(235deg, $red 1%, $black, $blue 95%);


* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app {
	height: 100vh;
	width: 100vw;
	background: $gradient;
	color: $algo2;
	overflow-y: scroll;

	header {
		padding: 3rem 0;

		p {
			font-size: 2.2rem;
			font-weight: 600;
		}
	}

	main div {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		img {
			margin: 0 auto;
			width: 45vw;
			height: auto;
		}

		p.justify {
			text-align: justify;
		}

		p, h1 {
			max-width: 72vw;
			font-size: 1.25rem;
			margin: 0 auto;
		}
	}

	footer {
		padding: 0 1rem;
		margin-bottom: 4rem;

		button {
			background: $algo2;
			color: $gray;
			font-weight: 600;
			border: 0;
			border-radius: 4px;
			padding: 0.5rem 1rem;

			display: flex;
			align-items: center;
			gap: 1rem;

			margin: 1rem auto 1.8rem;

			img {
				height: 1.25rem;
				width:  auto;
			}

			&:active {
				filter: brightness(0.68);
			}
		}
	}

	@media(min-width:1024pc) {
		main > div {
			flex-direction: row;
		}
		footer button:hover {
			filter: brightness(0.68);
		}
	}
}

.spinner-wrapper {
	height: 4rem;
	width: 4rem;
	margin: 0 auto 4rem;
	border-radius: 100%;

	div {
		width: inherit;
		height: inherit;
		border-radius: inherit;

		position: relative;
		background: $gradient;

		animation: SPIN 750ms infinite cubic-bezier(0.7,0.7,0.7,0.7);

		&::after {
			content: "";
			width: 85%;
			height: 85%;
			border-radius: inherit;
	
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 3;

			transform: translate(-50%, -50%);
			background: $black;
		}
	}
}

@keyframes SPIN {
  0% { transform: rotate(0deg); }
	50% { transform: rotate(180deg); }
	100% { transform: rotate(360deg); }
}
</style>
