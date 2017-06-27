import { Component } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})


export class AppComponent {
	
	
	constructor() {}
	
	getActiveMenuFromChild(event) {
		console.log(event);
	}
}
