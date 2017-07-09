import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightListComponent } from './flight.list.component';
import { FlightListService } from './flight.list.service';
import { FlightInfoComponent } from './flight.info.component';
import { FlightInfoService } from './flight.info.service'; 
import { FlightTimeComponent } from './flight.time.component';
import { FlightLocationComponent } from './flight.location.component';
import { TimeParentComponent }  from './time.parent.component';
import { TimeChildComponent }  from './time.child.component';

import { APP_ROUTE } from './app.route';


@NgModule({
	imports:[
		BrowserModule,
		APP_ROUTE
	],
	declarations: [
		AppComponent, FlightInfoComponent, FlightListComponent, FlightTimeComponent, FlightLocationComponent,
		TimeParentComponent, TimeChildComponent
		
	],
	providers: [
		FlightInfoService, FlightListService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}