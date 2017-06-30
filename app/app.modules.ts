import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { SharedService } from './shared.service';
import { EmpService } from './emp.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductDisplayComponent } from './product.display';
import { NewListComponent } from './new.list.comp';


@NgModule({
	imports:[
		BrowserModule
	],
	declarations: [
		AppComponent, HomeComponent, ProductDisplayComponent, NewListComponent
	],
	providers: [ SharedService, EmpService ],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}