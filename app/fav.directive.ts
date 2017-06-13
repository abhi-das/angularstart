import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[myFav]'
})

export class FavDirective {

	countryName: Object;

	/* Set the Default value */
	@Input() set myFav(item) {
		this.countryName = item;
		this.isFavorite = item.isFavorite;
	};

	/* Add CSS Class based on Default value */
	@HostBinding('class.fav-selected') isFavorite = false;

	/* Bind Event on Fav icon click and update the value in Array*/
	@HostListener('click') onClickCustomHandler() {
		this.isFavorite = !this.isFavorite;
		this.countryName["isFavorite"] = this.isFavorite;
	}

}