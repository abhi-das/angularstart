import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpDetailObserveComponent } from './emp-detail-observable-component';
import { ShowCountryComponent } from './show.country.component';

import { FormsModule } from '@angular/forms';

import { HttpModule  } from '@angular/http';

@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		AppComponent, EmpDetailObserveComponent, ShowCountryComponent
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}