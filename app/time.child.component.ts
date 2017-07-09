import { Component } from  '@angular/core';

@Component({
	selector: 'time-child',
	templateUrl: './partials/time-child.html'
})

export class TimeChildComponent {


	constructor() {}
	count;

	ngOnInit() {
		
	}

	revealInfo(cnum) {

		this.count = cnum;

	}


}