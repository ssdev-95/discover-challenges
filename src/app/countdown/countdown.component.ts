import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
	timeout:NodeJS.Timer = {} as NodeJS.Timer
	initTime = 40 * 60

	timer = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

	ngOnInit() {
		this.timeout = setInterval(() => {
			if(this.initTime > 0) {

  			this.timer = {
					...this.timer,
					minutes: Math.floor(this.initTime / 60),
					seconds: Math.round(this.initTime % 60)
				}

				this.initTime -= 1
			} else {
				clearTimeout(this.timeout)
				this.initTime = 40 * 60
			}
		}, 1000)
	}

	ngOnDestroy() {
		clearTimeout(this.timeout)
	}
}
