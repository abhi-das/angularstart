import {Component} from '@angular/core';
import { SharedService } from './shared.service';
import { EmpService } from './emp.service';

@Component({
	selector: 'home-comp',
	templateUrl: './partials/home-comp.html'
})

export class HomeComponent {

	msg;
	empList;

	constructor(private sharedSrv: SharedService, private empLstSrv: EmpService) {}

	ngOnInit() {

		this.sharedSrv.currentMessage.subscribe( tmpMsg => this.msg = tmpMsg );

		this.empLstSrv.currentList.subscribe(lst => this.empList = lst);

	}
}