import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { AmazonFeedComponent } from './amazon.component';
import { AppComponent } from './app.component';


@NgModule({
	imports:[
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent, AmazonFeedComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}