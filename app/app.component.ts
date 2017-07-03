import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html'
})


export class AppComponent {
	
	myModel;

	tst;
	btn;

	ngAfterViewInit() {

		this.tst = document.getElementById('tst');

		var sugg = Observable.fromEvent(this.tst, 'keyup')
			.subscribe(
				function(result) {
					console.log(result);
				},
				function(err) {
					console.error("Error > ", err);
				},
				function() {
					console.log("input subs completed !");
				}
			)


		this.btn = document.getElementById('btn');
		var bbn = Observable.fromEvent(this.btn, 'click')
			.subscribe(
				rst => console.log(rst)
			);


	}

	inputUpdate(evt) {
		this.myModel = evt;
		console.log(this.myModel);
	}

}
