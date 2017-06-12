import { Component } from '@angular/core';

import { FavDirective } from './fav.directive';


@Component({
	selector: 'country-detail',
	templateUrl: './partials/country-detail.html',
	inputs: ['cItem']
})

export class CountryDetailComponent {}

