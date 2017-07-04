import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDetailService } from './emp.detail.service';

@Component({
	templateUrl: './partials/bio.html'
})

export class BioComponent {

	displayBio;
	constructor(private activeRoute: ActivatedRoute, private empDtSrv: EmpDetailService){}

	ngOnInit() {
		/*this.activeRoute.parent.params.subscribe(
			function(params) {

				this.thisId = params.id;
				// this.displayBio = this.empDtSrv.getEmpDetail(this.thisId);
				// console.log("completed ,,", this.thisId);
			}, 
			function(err) {
				console.error(err);
			}, 
			function() {
				console.log("completed");
			}
		);*/	

		this.activeRoute.parent.params.subscribe(params => { 
			this.displayBio = this.empDtSrv.getEmpDetail(params.id);
		});
	}

	ngOnDestroy() {
		// console.log("destroy..")
	}
}
