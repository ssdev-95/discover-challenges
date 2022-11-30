import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountdownComponent } from './countdown/countdown.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [{
	path: 'countdown',
	component: CountdownComponent
}, {
	path: '',
	component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
