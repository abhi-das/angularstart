import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { EmpAddComponent } from './component.emp.add'; 
import { EmpListComponent } from './component.emp.list';

import { EmployeeListService } from './employee.list.service';


@NgModule({
	imports:[
		BrowserModule
	],
	declarations: [
		AppComponent, EmpAddComponent, EmpListComponent
	],
	providers: [
		EmployeeListService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}