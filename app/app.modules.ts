import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { EmpSearchFormComponent } from './component.emp.search.form';

import { ValidatorRulesService } from './validator.rules.service';

@NgModule({
	imports:[
		BrowserModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent, EmpSearchFormComponent
	],
	providers: [
		ValidatorRulesService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}