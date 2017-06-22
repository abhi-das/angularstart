import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ExecutiveComponent } from './executive.component';
import { AppComponent } from './app.component';

import { routing } from './app.route';


@NgModule({
	imports:[
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent, HomeComponent, ContactComponent, ExecutiveComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}