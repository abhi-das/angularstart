import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryItemComponent } from './component.country-item';
import { CountryDetailComponent } from './component.country.detail';

import { FormsModule } from '@angular/forms';

@NgModule({
	imports:[
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent, CountryItemComponent, CountryDetailComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}