import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserProfileRulesService } from './service.user.form.rules';

@Component({
	selector: "user-info-form",
	templateUrl: "./partials/user-info-form.html"
})

export class UserInfoFormComponent {

	form;

	constructor(private userRulesService: UserProfileRulesService){}

	ngOnInit() {
		this.form = new FormGroup({
			firstName: new FormControl('', this.userRulesService.firstNameRules),
			lastName: new FormControl('', Validators.compose([
				Validators.required				
			])),
			location: new FormControl('', Validators.compose([
				Validators.required
			])),
			email: new FormControl('', Validators.compose([
				Validators.required
			]))
		});
	}

	onFormSubmit(form) {
		console.log(form);
	}
}