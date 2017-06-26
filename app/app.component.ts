import { Component } from '@angular/core';


@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})


export class AppComponent {
	
	pageName: string;

	ngOnInit() {
		this.pageName = 'HOME';
	}

	onClickNav(event) {
		this.pageName = event.toUpperCase();
	}
}