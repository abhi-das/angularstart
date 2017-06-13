import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryItemComponent } from './component.country-item';
import { CountryDetailComponent } from './component.country.detail';

import { FavDirective } from './fav.directive';

import { FormsModule } from '@angular/forms';


import { ColorLegendComponent } from './component.color.legend';

@NgModule({
	imports:[
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent, CountryItemComponent, CountryDetailComponent, FavDirective, ColorLegendComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}