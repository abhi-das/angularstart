import { Component } from '@angular/core';

import { CountryItemComponent } from './component.country-item';
import { CountryDetailComponent } from './component.country.detail';


export class Countries {

	countryNm: string;
	countryShortName: string;

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

@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})


export class AppComponent {

	countryList = COUNTRIES;
	currentCountry: Countries;

	showCountry(country) {
		this.currentCountry = country;
	}

}
