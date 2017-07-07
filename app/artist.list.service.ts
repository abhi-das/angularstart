import { Injectable } from '@angular/core';


@Injectable()

export class ArtistListService {

	arList = [{
		name: 'Faith Evans',
		id: "fe"
	}, {
		name: 'Gregg Allman',
		id: "ba"
	}, {
		name: 'Sylvia Robinson',
		id: "sr"
	}, {
		name: 'Cher',
		id: "ch"
	}]


	getArList() {
		return this.arList;
	}


}