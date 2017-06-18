import { Component } from '@angular/core';
import { CountryModal } from './country.modal';
import { CountryNameService } from './country.service';

@Component({
	selector: 'show-country',
	templateUrl: './partials/show-country.html',
	providers: [
		CountryNameService
	]
})

export class ShowCountryComponent {

	countryNames: CountryModal[];

	constructor(private countryNameServ: CountryNameService) {}

	ngOnInit() {

		this.countryNameServ.getCountryName().subscribe(
			country => this.countryNames = country;
		);
		
	}
}