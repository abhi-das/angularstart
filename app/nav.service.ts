export class NavService {

	navList = [{
		name: 'Home Decore',
		path: 'home-decore',
		isActive: false
	}, {
		name: 'Bath Products',
		path: 'bath-product',
		isActive: false
	}, {
		name: 'Computer Game',
		path: 'computer-game',
		isActive: true
	}];

	getNav() {
		return this.navList;
	}

	setNav(itm) {
		this.navList.push(itm);
	}

	getActiveNav() {
		var activeNavIdx = this.navList.map(function(itm){ return itm.isActive === true }).indexOf(true);
		if (activeNavIdx >= 0) { 
			return	this.navList[activeNavIdx];
		} else{ 
			this.navList[0].isActive = true;
			return	this.navList[0];
		};
	}


}