import { Component, EventEmitter } from '@angular/core';
import { NavListService } from './nav.list.service';

@Component({
	selector: 'nav-component',
	templateUrl: './partials/nav-component.html',
	outputs: ['customChildEvent'],
	providers: [NavListService]
})

export class NavComponent {

	navList: any;
	selectedIdx: any;
	sectionTitle: string;
	private customChildEve = new EventEmitter<any>();

	constructor(private navListSrv: NavListService) {}

	ngOnInit() {
		this.navList = this.navListSrv.getMenuList();
		this.selectedIdx = this.navListSrv.getActiveMenuList()[0].isActive;
	}

	onMenuClick(idx) {
		this.selectedIdx = idx;
		
		this.customChildEve.emit(idx);
	}



}