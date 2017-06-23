import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home.page.component';
import { ProductPageComponent } from './product.page.component';


import { Routing } from './app.router';

@NgModule({
	imports:[
		BrowserModule,
		Routing
	],
	declarations: [
		AppComponent, HomePageComponent, ProductPageComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}