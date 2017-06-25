export class MenuListData {
	item = [{
		name: 'Home Decore',
		path: 'home-decore'
	}, {
		name: 'Bath Product',
		path: 'bath-product'
	}, {
		name: 'Computer Games',
		path: 'computer-game'
	}];

	getList() {
		return this.item;
	}

	setMenuList(itm) {
		this.item.push(itm);
	}

}