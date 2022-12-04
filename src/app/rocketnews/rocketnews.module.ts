import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RocketnewsComponent } from './rocketnews.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    RocketnewsComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
		ReactiveFormsModule
  ]
})
export class RocketnewsModule { }
