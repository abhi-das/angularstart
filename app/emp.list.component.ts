import { Component } from '@angular/core';
import { EmpListService } from './emp.list.service';
import { Router } from '@angular/router';

@Component({
	selector: 'emp-list',
	templateUrl: './partials/emp-list.html'
})

export class EmpListComponent {

	empListArr;

	constructor( private empListSrv: EmpListService, private router: Router) {}


	ngOnInit() {

		this.empListArr = this.empListSrv.getEmpList();

	}

	showDetailFn(id) {
		this.router.navigate(['/emplist', id]);
	}

}