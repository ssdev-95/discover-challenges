import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment'

type MovieResponse = {
	Title?: string
	Poster?: string
	Plot?: string
	Response: string
	Error?: string
}

@Injectable()
@Component({
  selector: 'app-rocketflix',
  templateUrl: './rocketflix.component.html',
  styleUrls: ['./rocketflix.component.css']
})
export class RocketflixComponent {
	constructor(private http: HttpClient) { }

	KEY = environment.OMDB_API_KEY
	ENDPOINT = `http://www.omdbapi.com/?apikey`
	subscription:Subscription = {} as Subscription
	movie: MovieResponse = {
		Response: 'False'
	} as MovieResponse
	loading = false

	getRandomMovieID() {
		const sufix = Math.floor(
			Math.random() * (9999999 - 1) + 1
		)
		return `tt${String(sufix).padStart(7, '0')}`
	}

	getRandomMovie() {
		const id = this.getRandomMovieID()
		const url = `${this.ENDPOINT}=${this.KEY}&i=${id}`
		this.loading = true

		this.subscription = this
		  .http
			.get<MovieResponse>(url)
			.subscribe((movie:MovieResponse) => {
				this.movie = movie
				this.loading = false
				console.log(this.movie.Response)
			})
	}

	ngOnDestroy() {
		this.subscription.unsubscribe()
		this.movie = {} as MovieResponse
	}
}
