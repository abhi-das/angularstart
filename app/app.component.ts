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
	legendTheme: [{
		name: "green",
		active: true
	},{
		name: "red",
		active: false
	},{
		name: "purple",
		active: false
	}]
}, {
	countryNm: "Netherland",
	countryShortName: "ND",
	isFavorite: true,
	legendTheme: [{
		name: "yellow",
		active: false
	},{
		name: "blue",
		active: false
	},{
		name: "red",
		active: true
	}]
}, {
	countryNm: "Austria",
	countryShortName: "AS",
	isFavorite: false,
	legendTheme: [{
		name: "purple",
		active: false
	},{
		name: "pink",
		active: false
	},{
		name: "orange",
		active: true
	}]
}, {
	countryNm: "Astralia",
	countryShortName: "AST",
	isFavorite: false,
	legendTheme: [{
		name: "orange",
		active: false
	},{
		name: "red",
		active: true
	},{
		name: "green",
		active: false
	}]
}, {
	countryNm: "Swizerland",
	countryShortName: "SZ",
	isFavorite: false,
	legendTheme: [{
		name: "green",
		active: true
	},{
		name: "orange",
		active: false
	},{
		name: "blue",
		active: false
	}]
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
