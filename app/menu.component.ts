import { Component } from "@angular/core";

import { MenuListData } from './menu.list.data';

@Component({
	selector: 'menu-list',
	templateUrl: './partials/menu-list.html',
	providers: [
		MenuListData
	]
})

export class MenuListComponent {

	menuList;

	constructor(private menuListData: MenuListData ) {}

	ngOnInit() {
		this.menuList = this.menuListData.getList();
	}

}