import { Component } from '@angular/core';
import { EmpService } from './emp.service';
import { SharedService } from './shared.service';

@Component({
	selector: 'new-list-comp',
	templateUrl: './partials/new-list-comp.html'
})

export class NewListComponent {

	newLst;
	constructor(private empLsSrv: EmpService, private sharedSrv: SharedService) {

	}

	ngOnInit() {

		this.newLst = this.empLsSrv.newList;

	}

	showNewList() {
		this.empLsSrv.setTheRecentList(this.newLst);
	}

	updateAllMsg() {

		this.sharedSrv.changeMessage("new Message from Shared Service");
	}

}