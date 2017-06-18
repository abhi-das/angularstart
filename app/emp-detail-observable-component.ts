import { Component } from '@angular/core';

import { EmpDetailModal } from './emp-detail-modal';

import { EmpDetailServiceObserv } from './emp-detail-service-observ';

@Component({
	selector: "emp-detail-observe",
	templateUrl: './partials/emp-detail-observe.html',
	providers: [ 
		EmpDetailServiceObserv
	]
})

export class EmpDetailObserveComponent {

	detailInfo: EmpDetailModal[];

	constructor(private detailObsService: EmpDetailServiceObserv) {}

	ngOnInit() {
		this.detailObsService.getDetails().subscribe(empInfo => this.detailInfo = empInfo );
	}
}