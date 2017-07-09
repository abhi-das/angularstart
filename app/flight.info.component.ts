import { Component } from '@angular/core';
import { FlightInfoService } from './flight.info.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
	selector: 'flight-info',
	templateUrl: './partials/flight-info.html'
})

export class FlightInfoComponent {


	constructor(private _infoSrv: FlightInfoService,
		private _router: Router,
		private _activeRouter: ActivatedRoute) {}

	flightId;
	flightInfo;

	ngOnInit() {

		this.flightId = this._activeRouter.snapshot.params['id'];
		this.flightInfo = this._infoSrv.getInfoById(this.flightId)[0];

	}

	showConent(path) {
		this._router.navigate([`flight/${this.flightId}/${path}`]);
	}

}