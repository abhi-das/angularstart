import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[navActiveMenuItem]'
})

export class NavActiveDirective {

	@HostBinding('class.isActive') isActive = true;

	/* [----IMPORATANT---]
		@Input setter method default name will the same as the Directive Name
	*/
	@Input() set navActiveMenuItem(value) {
		this.isActive = value;
	}

	/*@HostListener('click') onClicked() {
		this.isActive = !this.isActive;
	}*/

}