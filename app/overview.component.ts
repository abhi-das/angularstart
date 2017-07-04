import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDetailService } from './emp.detail.service';

@Component({
	templateUrl: './partials/overview.html'

})

export class OverviewComponent {

	empId;
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
			//params direct can be assigned to getEmpDetail function; require to store in variable, otherwise build error will be occured.
			this.empId = params;
			this.displayOverview = this.empDtSrv.getEmpDetail(this.empId.id);
		});

	}

	ngOnDestroy() {
		// console.log("destroy..");
		
	}

}
