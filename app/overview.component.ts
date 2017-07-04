import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDetailService } from './emp.detail.service';

@Component({
	templateUrl: './partials/overview.html'

})

export class OverviewComponent {

	displayOverview;

	constructor(private actRoute: ActivatedRoute, private empDtSrv: EmpDetailService) {}

	showMe() {
		console.log("hello");
	}

	ngOnInit() {

		/*this.actRoute.parent.params.subscribe(
			function(params) {
				this.thisId = params.id;
				// this.displayOverview = this.empDtSrv.getEmpDetail(this.thisId);
			}, 
			function(err) {
				console.error(err);
			},
			function() {
				console.log("completed");
			}
		);*/

		this.actRoute.parent.params.subscribe(params => { 
			this.displayOverview = this.empDtSrv.getEmpDetail(params.id);
		});

	}

	ngOnDestroy() {
		// console.log("destroy..");
		
	}

}
