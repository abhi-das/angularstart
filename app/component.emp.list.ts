import { Component } from '@angular/core';

import { EmployeeListService } from './employee.list.service';

@Component({
	selector: 'emp-list',
	templateUrl: './partials/emp-list.html'
})

export class EmpListComponent {

	empList;

	constructor(private emplistService: EmployeeListService) {}

	ngOnInit() {

		this.empList = this.emplistService.get();

	};

	onDelete(emp) {

		this.emplistService.delete(emp);

	}

};