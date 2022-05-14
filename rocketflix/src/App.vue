<script setup lang="ts">
import { watch } from 'vue'

import {
	useMovie, getRandomMovieID,  movie
} from './composables/useMovie'

async function fetchMovie() {
	const id = getRandomMovieID()
	await useMovie(id)
}

watch(movie, () => {
	//if(movie && movie.Response) {
		alert(
			JSON.stringify(movie) ?? 'Deu ruim na reatividade'
		)
	//}
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

	<main v-if="movie">
		<img v-if="movie?.Response" :src="movie?.Poster" alt="Movie poster" />
		<img v-else src="/poster.png" alt="Failed to bring movie info" />
	</main>

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

	header {
		padding: 3rem 0;

		p {
			font-size: 2.2rem;
			font-weight: 600;
		}
	}

	footer {
		padding: 0 1rem;

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
		footer button:hover {
			filter: brightness(0.68);
		}
	}
}
</style>
