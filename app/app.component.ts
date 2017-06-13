import { Component } from '@angular/core';

import { CountryItemComponent } from './component.country-item';
import { CountryDetailComponent } from './component.country.detail';


export class Countries {

	countryNm: string;
	countryShortName: string;
	isFavorite: boolean;
	legendTheme: any;

}

var COUNTRIES:Countries[] = [{
	countryNm: "Canada",
	countryShortName: "CA",
	isFavorite: false,
	legendTheme: ["green", "red", "purple"]
}, {
	countryNm: "Netherland",
	countryShortName: "ND",
	isFavorite: true,
	legendTheme: ["yellow", "blue", "red"]
}, {
	countryNm: "Austria",
	countryShortName: "AS",
	isFavorite: false,
	legendTheme: ["purple", "pink", "orange"]
}, {
	countryNm: "Astralia",
	countryShortName: "AST",
	isFavorite: false,
	legendTheme: ["orange", "red", "green"]
}, {
	countryNm: "Swizerland",
	countryShortName: "SZ",
	isFavorite: false,
	legendTheme: ["green", "orange", "blue"]
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
