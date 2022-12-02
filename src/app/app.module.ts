import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { RocketflixModule } from './rocketflix/rocketflix.module';

import { AppComponent } from './app.component';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
		CommonModule,
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		HomeModule,
		RocketflixModule,
		ThemeSwitcherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
