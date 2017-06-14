import { Component } from '@angular/core';

import { EmployeeListService } from './employee.list.service'; 

@Component({
	selector: "emp-add",
	templateUrl: "./partials/emp-add.html"
})

export class EmpAddComponent {

	constructor(private empListService: EmployeeListService) {}

	addEmp(name,salary,location) {

		var emp = {
			name: name,
			salary: salary,
			location: location
		};

		this.empListService.set(emp);
		console.log("Add Employee here.", emp);
	}

}