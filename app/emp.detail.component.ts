import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDetailService } from './emp.detail.service';

@Component({
	selector: 'emp-detail',
	templateUrl: './partials/emp-detail.html'
})

export class EmpDetailComponent {

	public currentId;
	public empBio;

	constructor(private activeroute: ActivatedRoute, private empDetailSrv: EmpDetailService,
		private router: Router){}

	ngOnInit() {

		this.currentId = this.activeroute.snapshot.params['id'];

		this.empBio = this.empDetailSrv.getEmpDetail(this.currentId);
	}

	onBtnSelect(selectType) {
		// this.router.navigate(['emplist/:id/'+selectType]);
		this.router.navigate(['emplist/'+this.currentId+'/'+selectType]);
	}

}