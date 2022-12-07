import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RocketcardComponent } from './rocketcard.component';



@NgModule({
  declarations: [
    RocketcardComponent
  ],
  imports: [
    CommonModule,
		HttpClientModule
  ]
})
export class RocketcardModule { }
