import { Component, EventEmitter } from '@angular/core';
import { NavListService } from './nav.list.service';

@Component({
	selector: 'nav-component',
	templateUrl: './partials/nav-component.html',
	outputs: ['customChildEve'],
	providers: [NavListService]
})

export class NavComponent {

	private customChildEve = new EventEmitter<string>();

	navList: any;
	selectedIdx: any;
	sectionTitle: string;

	constructor(private navListSrv: NavListService) {}

	ngOnInit() {
		this.navList = this.navListSrv.getMenuList();
		this.selectedIdx = this.navListSrv.getActiveMenuList()[0].isActive;
	}

	onMenuClick(idx) {

		this.customChildEve.emit(idx);

		this.selectedIdx = idx;	
	}



}