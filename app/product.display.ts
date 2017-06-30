import {Component} from '@angular/core';
import { SharedService } from './shared.service';
import { EmpService } from './emp.service';


@Component({
	selector: 'product-display',
	templateUrl: './partials/product-display.html'
})

export class ProductDisplayComponent {

	msg;
	empList;
	
	constructor(private prdSharedSrv: SharedService, private empLstSrv: EmpService ) {}


	ngOnInit() {
		
		this.prdSharedSrv.currentMessage.subscribe(smMsg => this.msg = smMsg);

		this.empLstSrv.currentList.subscribe(lstExist => this.empList = lstExist);

	}

}