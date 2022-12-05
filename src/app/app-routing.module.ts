import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RocketflixComponent } from './rocketflix/rocketflix.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RocketcardComponent } from './rocketcard/rocketcard.component';
import { RocketnewsComponent } from './rocketnews/rocketnews.component';
import { SocialtreeComponent } from './socialtree/socialtree.component';
import { PricingtableComponent } from './pricingtable/pricingtable.component';

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
}, {
	path: 'sidebar',
	component: SidebarComponent,
	title: 'Sidebar | DCChallenges'
}, {
	path: 'rocketcard',
	component: RocketcardComponent,
	title: 'Rocketcard | DCChallenges'
}, {
	path: 'rocketnews',
	component: RocketnewsComponent,
	title: 'Rocketnews | DCChallenges'
}, {
	path: 'socialtree',
	component: SocialtreeComponent,
	title: 'SocialTreee | DCChallenges'
}, {
	path: 'pricing',
	component: PricingtableComponent,
	title: 'Pricing Table | DCChallenges'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
