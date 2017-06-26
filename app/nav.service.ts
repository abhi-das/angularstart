export class NavService {

	navList = [{
		name: 'Home Decore',
		path: 'home-decore'
	}, {
		name: 'Bath Products',
		path: 'bath-product'
	}, {
		name: 'Computer Game',
		path: 'computer-game'
	}];

	getNav() {
		return this.navList;
	}

	setNav(itm) {
		this.navList.push(itm);
	}

}