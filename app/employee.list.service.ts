export class EmployeeListService {

	empList = [{
		name: "Sit officiadolore",
		salary: "$ 8,000.00",
		location: "New York",
		role: "Manager II"
	}, {
		name: "Lorem ipsum",
		salary: "$ 35,000.00",
		location: "New York",
		role: "Manager I"
	}, {
		name: "Nostrud exercitation",
		salary: "$ 20,000.00",
		location: "New York",
		role: "Manager II"
	}, {
		name: "Ea duis non",
		salary: "$ 15,000.00",
		location: "New York",
		role: "Manager II"
	}, {
		name: "Ad veniam",
		salary: "$ 29,000.00",
		location: "New York",
		role: "Manager II"
	}];

	get() {
		return this.empList;
	}

	set(emp) {
		this.empList.push(emp);
	}

	delete(emp) {

		let index = this.empList.indexOf(emp);

		if(index >= 0) {
			this.empList.splice(index, 1);
		}

	}

}