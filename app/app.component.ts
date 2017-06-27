import { Component } from '@angular/core';
import { NavListService } from './nav.list.service';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html',
	providers: [ NavListService ]
})


export class AppComponent {
	
	title: string;
	constructor(private navLsSrv: NavListService) {}
	
	ngOnInit() {
		this.title = this.navLsSrv.getActiveMenuList()[0].name;
	}

	getActiveMenuFromChild(idx) {

		this.title = this.navLsSrv.getMenuByIndex(idx).name;
	}
}
