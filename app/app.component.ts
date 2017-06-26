import { Component } from '@angular/core';
import { NavService } from './nav.service';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html',
	providers: [NavService]
})


export class AppComponent {
	
	pageName: string;

	constructor(private navSrv: NavService) {}

	ngOnInit() {
		
		this.pageName = this.navSrv.getActiveNav().name.toUpperCase();

	}

	onClickNav(event) {
		this.pageName = event.toUpperCase();
	}
}