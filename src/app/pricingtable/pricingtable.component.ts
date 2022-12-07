import { Component } from '@angular/core';
import type { Plan } from './pricingcard/pricingcard.component'

@Component({
  selector: 'app-pricingtable',
  templateUrl: './pricingtable.component.html',
  styleUrls: ['./pricingtable.component.css']
})
export class PricingtableComponent {
	plans:Plan[] = [{
		id: 'salame_ajciejwejdj',
		name: 'Salame Bronze',
		description: 'The most of Salame',
		price: 2345,
		features: ['Reliable'],
		popular: false
	}, {
		id: 'mixto_kwedqjwjwee',
		name: 'Mixto Gold',
		description: 'An outmost set of things',
		price: 2895,
		features: ['Reliable', 'Delicinha'],
		popular: true,
	}, {
		id: 'kikao_kwifudkaka',
		name: 'Kikao Platinum',
		description: 'The Ultimate experience',
		price: 3365,
		features: ['Reliable', 'Delicinha', 'And much more...'],
		popular: false
	}]
}
