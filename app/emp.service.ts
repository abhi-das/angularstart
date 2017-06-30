import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class EmpService {

	constructor() {}

	loadList = [{
		name: 'Kloos',
		location: 'Japan'
	}, {
		name: 'Hooper',
		location: 'Korea'
	}, {
		name: 'Michel',
		location: 'London'
	}];


	newList = [{
		name: 'Perrice',
		location: 'Paris'
	}, {
		name: 'Bela',
		location: 'Germany'
	}, {
		name: 'Shela',
		location: 'America'
	}, {
		name: 'Suvy',
		location: 'Swizerland'
	}];


	private empListSource = new BehaviorSubject<any>(this.loadList);

	currentList = this.empListSource.asObservable();

	setTheRecentList(lst: any) {
		this.empListSource.next(lst);
	}

}