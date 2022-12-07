import { Component } from '@angular/core';

@Component({
  selector: 'app-socialtree',
  templateUrl: './socialtree.component.html',
  styleUrls: ['./socialtree.component.css']
})
export class SocialtreeComponent {
	username = 'xSallus'

	links = [{
		title: 'Linkedin',
		href: 'https://linkedin.com/in/salomao-vasconcelos'
	}, {
		title: 'GitHub',
		href: 'https://github.com/xSallus'
	}]
}
