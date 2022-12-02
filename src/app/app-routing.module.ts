import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RocketflixComponent } from './rocketflix/rocketflix.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

const routes: Routes = [{
	path: '',
	component: HomeComponent,
	title: 'Home | DCChallenges'
},{
	path: 'countdown',
	component: CountdownComponent,
	title: 'Countdown | DCChallenges'
}, {
	path: 'rocketflix',
	component: RocketflixComponent,
	title: 'Rocketflix | DCChallenges'
}, {
	path: 'theme-switcher',
	component: ThemeSwitcherComponent,
	title: 'Theme Switcher | DCChallenges'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
