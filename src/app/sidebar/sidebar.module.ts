import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RoleButtonComponent } from './role-button/role-button.component';



@NgModule({
  declarations: [
    SidebarComponent,
    RoleButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SidebarModule { }
