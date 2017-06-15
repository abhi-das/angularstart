import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ValidatorRulesService } from './validator.rules.service';

@Component({
	selector: "emp-search-form",
	templateUrl: "./partials/emp-search-form.html"
})

export class EmpSearchFormComponent {
	form: any;
	
	constructor(private validatorRulesService: ValidatorRulesService) {}

	ngOnInit() {
		
		this.form = new FormGroup({
			empName: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('[\\w\\-\\s\\/]+')
			])),
			lastName: new FormControl('', this.validatorRulesService.lastNameRules),
			empLocation: new FormControl('', this.locationChecker)
		});
	}

	locationChecker(control) {

		// let locationList = ["New York", "Munich", "Germany", "York Land"];
		// let temp = locationList.map((val) => { return val.toLowerCase(); });
		// if(temp.indexOf(control.value) === -1 ) {

		if(control.value.toLowerCase() !== "test" ) {
			return { 'empLocation' : true };
		} else {
			return null;
		}

	}

	onSubmit(empDetail) {
		console.log(empDetail);
	}

}
