import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './nav.component';
import { AppComponent } from './app.component';


@NgModule({
	imports:[
		BrowserModule
	],
	declarations: [
		AppComponent, NavComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}