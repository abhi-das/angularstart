import { Component } from '@angular/core';

import { ColorLegendComponent } from './component.color.legend';

@Component({
	selector: 'country-item',
	templateUrl: './partials/country-item.html',
	inputs: ['cItem']
})

export class CountryItemComponent {}