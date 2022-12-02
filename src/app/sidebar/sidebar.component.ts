import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
	roles = [
		{ name:"Search", icon:"search.svg" },
		{ name:"Dashboard", icon: "grid.svg" },
		{ name:"Pets", icon: "pet.svg" },
		{ name:"Customers", icon: "user.svg" },
		{ name:"Vets", icon: "vet.svg" },
		{ name:"Settings", icon: "settings.svg" }
	]

	isMenuOpen = false
	selectedRole = 'Search'

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen
	}

	selectRole(role:string) {
		if(this.selectedRole === role) {
			return
		}

		this.selectedRole = role
	}
}
