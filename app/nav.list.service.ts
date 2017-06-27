export class NavListService {
	menuList = [{
		name: 'Rooftop Accessary',
		path: 'rooftop-accessary',
		isActive: false
	}, {
		name: 'Living Room Decore',
		path: 'living-room-decore',
		isActive: true
	}, {
		name: 'Bath Decore',
		path: 'bath-decore',
		isActive: false
	}, {
		name: 'Living Room Accessary',
		path: 'living-room-accessary',
		isActive: false
	}];

	getMenuList() {
		return this.menuList;
	}

	getActiveMenuList() {
		// var isActiveIndex = this.menuList.map(function(itm){
		// 	return itm.isActive===true;
		// }).indexOf(true);

		var activeList = this.menuList.filter(function(ele, idx){

			if(ele.isActive === true) {
				var selectActive = {
					element : ele,
					index : idx
				};
				return selectActive;
			}
		})

		return activeList;
	}

	getMenuByIndex(idx) {
		return this.menuList[idx];
	}
}