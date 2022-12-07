import { Component, Input } from '@angular/core';

@Component({
  selector: 'rocket-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
	@Input() title: string = ''
	@Input() isVisible:boolean = false
}
