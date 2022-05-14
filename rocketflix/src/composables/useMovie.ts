import { reactive, watchEffect } from 'vue'
import axios from 'axios'

const KEY = import.meta.env.VITE_API_KEY
const ENDPOINT = `http://www.omdbapi.com/?apikey`

interface IMovie {
	Poster: string;
	Title: string;
	Plot: string;
	Response: boolean;
}

interface IMovieResponse {
	data: Omit<IMovie, 'Response'> & { Response: string };
}

export let movie: IMovie|null = reactive(null)

export function getRandomMovieID() {
	const sufix = Math.floor(
		Math.random() * (9999999 - 1) + 1
	)
	return `tt${String(sufix).padStart(7, '0')}`
}

export async function useMovie(id:string) {
	const url = `${ENDPOINT}=${KEY}&i=${id}`
	const { data } = await axios.get<IMovieResponse>(url)

  const anotherMovie = { 
		Title: data.Title,
		Plot: data.Plot,
		Poster: data.Poster,
		Response: data.Response === 'True'
	}

	//alert(JSON.stringify(anotherMovie))

	movie = anotherMovie
}

/*watchEffect(() => {
	//if(movie && movie.Response) {
		alert(JSON.stringify(movie))
	//}
})*/

