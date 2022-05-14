import { ref, Ref } from 'vue'
import axios from 'axios'

const KEY = import.meta.env.VITE_API_KEY
const ENDPOINT = `http://www.omdbapi.com/?apikey`

interface IMovie {
	Poster: string;
	Title: string;
	Plot: string;
	Response: string;
}

interface IMovieResponse {
	data: IMovie
}

export const movieTitle: Ref<string>= ref('')
export const moviePlot: Ref<string> = ref('')
export const moviePoster: Ref<string> = ref('')
export const hasFailed: Ref<boolean>= ref(false)

export function getRandomMovieID() {
	const sufix = Math.floor(
		Math.random() * (9999999 - 1) + 1
	)
	return `tt${String(sufix).padStart(7, '0')}`
}

export async function useMovie(id:string) {
	const url = `${ENDPOINT}=${KEY}&i=${id}`
	const { data } = await axios.get<IMovieResponse>(url)

	movieTitle.value = data.Title,
	moviePlot.value = data.Plot,
	moviePoster.value = data.Poster,
	hasFailed.value = data.Response !== 'True'
}
