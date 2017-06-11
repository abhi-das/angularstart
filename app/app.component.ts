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

	countryList = COUNTRIES;
	// countryName = Countries;

}

var COUNTRIES:Countries[] = [{
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
}];