import { Component, Input } from '@angular/core';

export type Plan = {
	id?:string
	name:string
	description:string
	price:number
	features:string[]
	popular:boolean
}

@Component({
  selector: 'pricing-card',
  templateUrl: './pricingcard.component.html',
  styleUrls: ['./pricingcard.component.css']
})
export class PricingcardComponent {
	@Input() plan:Plan = {} as Plan
}
