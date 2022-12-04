import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RocketflixComponent } from './rocketflix.component';

@NgModule({
  declarations: [
    RocketflixComponent
  ],
  imports: [
    CommonModule,
		HttpClientModule
  ]
})
export class RocketflixModule {
}
