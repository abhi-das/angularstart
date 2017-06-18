import { Component } from '@angular/core';

import { EmpDetailService }  from './emp.detail.service';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html',
	providers: [ EmpDetailService ]
})

export class AppComponent {

	basicEx: any;
	constructor(private empDetailService: EmpDetailService) {}

	ngOnInit(){

		this.empDetailService.fetchData().subscribe(
			(data) => this.basicEx = data
		);

	}

}
