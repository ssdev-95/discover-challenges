import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
	isDarkMode = true

	toggleDarkMode() {
		this.isDarkMode = !this.isDarkMode
	}
}
