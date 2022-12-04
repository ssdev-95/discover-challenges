import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { generateHEXColor } from './utils/hex_code';

type GitUser = {
	login:string
	avatar_url:string
	company:string
	location:string

	followers:number
	following:number
	public_repos:number
}

@Component({
  selector: 'app-rocketcard',
  templateUrl: './rocketcard.component.html',
  styleUrls: ['./rocketcard.component.css']
})
export class RocketcardComponent {
	constructor(
		private httpClient: HttpClient,
		private route: ActivatedRoute
	) {}

	gitSubscription:Subscription = {} as Subscription
	routeSubscription:Subscription = {} as Subscription

	user:GitUser = {} as GitUser
	isLoading:boolean = true
	accentColor:string = '#8257E6'

	getGitUserData(login:string) {
		const url = `https://api.github.com/users/${login}`
		this.gitSubscription = this
		  .httpClient
			.get<GitUser>(url)
			.subscribe((user) => {
				this.user = user
				this.isLoading = false
			})
	}

	toggleCardAccentColor () {
		this.accentColor = generateHEXColor()
	}

	ngOnInit() {
		this.routeSubscription = this
		  .route
		  .queryParams
			.subscribe((params) => {
				if(!params['login']) {
					throw Error('Failed to load environment data')
				}

				this.getGitUserData(params['login'])
			})
	}

	ngOnDestroy() {
		this.gitSubscription.unsubscribe()
		this.routeSubscription.unsubscribe()
	}
}
