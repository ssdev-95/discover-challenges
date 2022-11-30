import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountdownComponent } from './countdown/countdown.component'

const routes: Routes = [{
	path: 'countdown',
	component: CountdownComponent,
	title: 'Countdown | DCChallenges'
}, {
	path: '',
	component: HomeComponent,
	title: 'Home | DCChallenges'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
