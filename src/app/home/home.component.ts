import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	challenges = [
		{ path:'countdown', title:'Countdown' },
		{ path:'rocketflix', title: 'Rocketflix' },
		{ path:'theme-switcher', title: 'Theme Switcher' },
		{ path:'sidebar', title: 'Sidebar' }
	]
}
