import { Injectable } from '@angular/core';

@Injectable()

export class EmpListService {

	empList = [{
		name: 'Luis Morton',
		empNumber: '0002',
		location: "New York"
	}, {
		name: 'Reli Jortham',
		empNumber: '0003',
		location: "New Jersy"
	}, {
		name: 'John Goms',
		empNumber: '0004',
		location: "Sanfrancisco"
	}, {
		name: 'Deli Heaven',
		empNumber: '0005',
		location: "Canada"
	}];

	getEmpList() {
		return this.empList;
	}

}