import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rocketnews',
  templateUrl: './rocketnews.component.html',
  styleUrls: ['./rocketnews.component.css']
})
export class RocketnewsComponent {
	emailControl = new FormControl()
	isToastVisible = false

	timeout:NodeJS.Timeout = {} as NodeJS.Timeout

	submit(event:Event) {
		event.preventDefault()
		this.isToastVisible = true

		this.timeout = setTimeout(() => {
			this.isToastVisible = false

			Promise.resolve().then(() => {
				this.emailControl.setValue('')
			})
		},2500)
	}

	ngOnDestroy() {
		clearTimeout(this.timeout)
	}
}
