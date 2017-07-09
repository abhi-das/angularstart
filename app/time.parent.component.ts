import { Component, ViewChild} from '@angular/core';
import { TimeChildComponent } from './time.child.component';

@Component({
	selector: 'time-parent',
	templateUrl: './partials/time-parent.html'
})


export class TimeParentComponent {

	@ViewChild( TimeChildComponent ) timeChildComp: TimeChildComponent;

	constructor() {}

	showChildInfo(count) {
		this.timeChildComp.revealInfo(count);
	}
}