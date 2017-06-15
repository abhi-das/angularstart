import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { EmpSearchFormComponent } from './component.emp.search.form';

@NgModule({
	imports:[
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent, EmpSearchFormComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}