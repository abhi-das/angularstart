import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})

export class AppComponent {
	
	constructor(private activedRoute: ActivatedRoute) {}

	ngOnInit() {
		/*this.activedRoute.params.subscribe(params => {
			let sm = params['executive'];
			if(sm == 'home') {
				sm = '';
			}
		})*/
	}

}
