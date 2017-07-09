import { Route, Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './flight.list.component';
import { FlightInfoComponent } from './flight.info.component';
import { ModuleWithProviders } from '@angular/core';
import { FlightTimeComponent } from './flight.time.component';
import { FlightLocationComponent } from './flight.location.component';

const homePageRoute: Route = {
	path: '',
	pathMatch: 'full',
	redirectTo: 'flight'
}

const flightListRoute: Route = {
	path: 'flight',
	component: FlightListComponent
}

const flightInfoRoute: Route = {
	path: 'flight/:id',
	component: FlightInfoComponent,
	children: [
		{path: 'time', component: FlightTimeComponent},
		{path: 'location', component: FlightLocationComponent},
		{path: '', pathMatch: 'full', redirectTo: 'time'}
	]
}

const routes: Routes = [
	flightListRoute,
	flightInfoRoute,
	homePageRoute
];

export const APP_ROUTE: ModuleWithProviders = RouterModule.forRoot(routes);


