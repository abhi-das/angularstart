import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './nav.component';
import { AppComponent } from './app.component';
import { NavActiveDirective } from './nav.active.directive';

@NgModule({
	imports:[
		BrowserModule
	],
	declarations: [
		AppComponent, NavComponent, NavActiveDirective
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}