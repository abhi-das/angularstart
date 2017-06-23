import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { NotificationComponent } from './notification.component';

import { AppRouter } from './app.route'

@NgModule({
	imports:[
		BrowserModule,
		AppRouter
	],
	declarations: [
		AppComponent, DashboardComponent, NotificationComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}