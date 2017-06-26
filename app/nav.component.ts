import { Component, EventEmitter } from '@angular/core';
import { NavService } from './nav.service';

@Component({
	selector: 'nav-component',
	templateUrl: './partials/nav-component.html',
	outputs: ['childEv'],
	providers: [NavService]
})

export class NavComponent {


	private childEv = new EventEmitter<string>();
	navList;

	constructor(private navSrv: NavService) {}

	ngOnInit() {
		this.navList = this.navSrv.getNav();
	}

	changePage(vl) {

		// console.log(vl.target.innerHTML);
		this.childEv.emit(vl.target.innerHTML);
	}

}