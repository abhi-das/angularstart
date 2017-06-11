import { Component } from '@angular/core';


export class Countries {

	countryNm: string;
	countryShortName: string;

}

@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})


export class AppComponent {
	
	countryName:  string;

	countryList: any;


	onClickTest(item, ele) {
		// console.log(item);
		// console.log(ele);
		this.countryName = item;
	}

	addCountryFn(value) {
		
		var entryIndex = this.countryList.map(function(e){
			return e.countryNm.toLowerCase();
		}).indexOf(value.toLowerCase());

		if(value !== '' && entryIndex < 0) {
			this.countryList.push({
				countryNm: value
			});
		}
	}

	constructor() {
		this.countryName = "CANADA";
		this.countryList = [
			{
				countryNm: "Canada",
				countryShortName: "CA"
			}, {
				countryNm: "Netherland",
				countryShortName: "ND"
			}, {
				countryNm: "Austria",
				countryShortName: "AS"
			}, {
				countryNm: "Astralia",
				countryShortName: "AST"
			}, {
				countryNm: "Swizerland",
				countryShortName: "SZ"
			}
		];
	}
}

/*var COUNTRIES:Countries[] = [{
	countryName: "Canada",
	countryShortName: "CA"
}, {
	countryName: "Netherland",
	countryShortName: "ND"
}, {
	countryName: "Austria",
	countryShortName: "AS"
}, {
	countryName: "Astralia",
	countryShortName: "AST"
}, {
	countryName: "Swizerland",
	countryShortName: "SZ"
}];*/