import { Injectable } from '@angular/core';

@Injectable()

export class FlightListService {

	fLIst = [{
		"airways": "Australia Airways",
		"id": 1
	},
	{
		"airways": "Netherland Airways",
		"id": 2
	},
	{
		"airways": "Indian Airways",
		"id": 3
	},
	{
		"airways": "Jet Airways",
		"id": 4
	}];

	getFlightList() {
		return this.fLIst;
	}


}