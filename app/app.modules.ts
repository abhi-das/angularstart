import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserInfoComponent } from './component.user.info';
import { UserInfoFormComponent } from './component.user.info.form';

import { ReactiveFormsModule } from '@angular/forms';

import { UserProfileRulesService } from './service.user.form.rules'

@NgModule({
	imports:[
		BrowserModule, ReactiveFormsModule
	],
	declarations: [
		AppComponent, UserInfoComponent, UserInfoFormComponent
	],
	providers: [
		UserProfileRulesService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}