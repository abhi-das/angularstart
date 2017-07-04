import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app.route';

import { EmpListService } from './emp.list.service';
import { EmpDetailService } from './emp.detail.service';

import { EmpHomeComponent } from './emp.home.component';
import { EmpListComponent } from './emp.list.component';
import { EmpDetailComponent } from './emp.detail.component';
import { OverviewComponent } from './overview.component';
import { BioComponent } from './bio.component';

import { AppComponent } from './app.component';


@NgModule({
	imports:[
		BrowserModule,
		APP_ROUTES
	],
	declarations: [
		AppComponent, EmpHomeComponent, EmpListComponent, EmpDetailComponent, OverviewComponent, BioComponent
	],
	providers: [ EmpListService, EmpDetailService],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}