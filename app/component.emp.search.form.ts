import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
	selector: "emp-search-form",
	templateUrl: "./partials/emp-search-form.html"
})

export class EmpSearchFormComponent {

	onSubmit(empDetail) {
		console.log(empDetail);
	}

}
