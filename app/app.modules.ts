import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuListComponent } from './menu.component';

import { HomeDecoreComponent } from './home.decore.component';
import { BathProductComponent } from './bath.product.component';
import { ComputerGameComponent } from './computer.game.component';

import { AppRoute } from './app.route';

@NgModule({
	imports:[
		BrowserModule, AppRoute
	],
	declarations: [
		AppComponent, MenuListComponent, HomeDecoreComponent, BathProductComponent, ComputerGameComponent 
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}