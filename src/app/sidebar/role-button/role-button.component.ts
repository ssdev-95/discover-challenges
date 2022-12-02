import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-role-button',
  templateUrl: './role-button.component.html',
  styleUrls: ['./role-button.component.css']
})
export class RoleButtonComponent {
	@Input() selectedRole:string = ''
	@Input() icon:string = ''
	@Input() role:string = ''
	@Input() isMenuOpen:boolean = false

	@Output() selectRole:EventEmitter<string> = new EventEmitter()

	handleSelectRole() {
		this.selectRole.emit(this.role)
	}
}
