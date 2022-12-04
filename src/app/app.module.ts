import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { RocketflixModule } from './rocketflix/rocketflix.module';

import { AppComponent } from './app.component';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { RocketcardModule } from './rocketcard/rocketcard.module';
import { RocketnewsModule } from './rocketnews/rocketnews.module';
import { SocialtreeModule } from './socialtree/socialtree.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
		CommonModule,
    BrowserModule,
    AppRoutingModule,

		HomeModule,
		RocketflixModule,
		ThemeSwitcherModule,
		SidebarModule,
		RocketcardModule,
		RocketnewsModule,
		SocialtreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
