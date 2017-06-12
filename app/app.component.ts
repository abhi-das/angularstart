import { Component } from '@angular/core';

import { CountryItemComponent } from './component.country-item';
import { CountryDetailComponent } from './component.country.detail';


export class Countries {

	countryNm: string;
	countryShortName: string;
	isFavorite: boolean;

}

var COUNTRIES:Countries[] = [{
	countryNm: "Canada",
	countryShortName: "CA",
	isFavorite: false
}, {
	countryNm: "Netherland",
	countryShortName: "ND",
	isFavorite: true
}, {
	countryNm: "Austria",
	countryShortName: "AS",
	isFavorite: false
}, {
	countryNm: "Astralia",
	countryShortName: "AST",
	isFavorite: false
}, {
	countryNm: "Swizerland",
	countryShortName: "SZ",
	isFavorite: false
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
