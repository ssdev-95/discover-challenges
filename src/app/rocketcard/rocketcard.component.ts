import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { environment } from '../../environments/environment'
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
	constructor(private httpClient: HttpClient) {}
	url = `https://api.github.com/users/${environment.USER_LOGIN}`
	gitSubscription:Subscription = {} as Subscription

	user:GitUser = {} as GitUser
	isLoading:boolean = true
	accentColor:string = '#8257E6'

	getGitUserData() {
		this.gitSubscription = this
		  .httpClient
			.get<GitUser>(this.url)
			.subscribe((user) => {
				this.user = user
				this.isLoading = false
			})
	}

	toggleCardAccentColor () {
		this.accentColor = generateHEXColor()
	}

	ngOnInit() {
		if(!environment.USER_LOGIN) {
			throw Error('Failed to load environment data')
		}

		this.getGitUserData()
	}

	ngOnDestroy() {
		this.gitSubscription.unsubscribe()
	}
}
