import { Component } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})
/*
export class Countries {

	countryName: string;
	countryShortName: string;

}*/


export class AppComponent {
	
	countryName:  string;

	countryList: any;


	onClickTest(item, ele){
		// console.log(item);
		// console.log(ele);
		this.countryName = item;
	}

	addCountryFn(value){

		if(value !== '' && this.countryList.indexOf(value) < 0) {
			this.countryList.push(value);
		}

	}

	constructor() {
		this.countryName = "CANADA";
		this.countryList = [
			"Canada", "United State", "United Kingdom", "Switzerland"
		];
	}
}
/*
var COUNTRIES:Countries[] = [{
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