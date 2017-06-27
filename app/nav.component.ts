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
	selectedMenu;

	constructor(private navSrv: NavService) {}

	ngOnInit() {
		this.navList = this.navSrv.getNav();
		this.selectedMenu = this.navSrv.getActiveNav().index;
	}

	changePageSelection(vl,idx) {

		this.childEv.emit(vl.target.innerHTML);
		
		this.selectedMenu = idx;
	}

}