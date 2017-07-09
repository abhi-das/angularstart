import { Component } from '@angular/core';
import { FlightListService } from './flight.list.service';
import { Router } from '@angular/router';

@Component({
	selector: 'flight-list',
	templateUrl: './partials/flight-list.html'
})

export class FlightListComponent {

	constructor(private _fListSrv: FlightListService,
		private _router: Router) {}

	flightList: Array<any>;
	flightId: string;

	ngOnInit() {

		this.flightList = this._fListSrv.getFlightList();

	}

	showInfo(flight) {

		this.flightId = flight.id;
		this._router.navigate(["flight", this.flightId]);		

	}


}