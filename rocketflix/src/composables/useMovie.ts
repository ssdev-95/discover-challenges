import { reactive } from 'vue'
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

export const movie: IMovie|null = reactive(null)

export function getRandomMovieID() {
	const sufix = Math.floor(
		Math.random() * (9999999 - 1) + 1
	)
	return `tt${String(sufix).padStart(7, '0')}`
}

export async function useMovie(id:string) {
	const url = `${ENDPOINT}=${KEY}&i=${id}`
	const { data } = await axios.get<IMovieResponse>(url)
	//alert(data.Response)
  movie = { 
		...data,
		Response: data.Response === 'True' ?? false
	}
}

