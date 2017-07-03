import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AmazonService {

	constructor(private http: Http) {}

	getAmzData() {

		const res: Observable<Response> = this.http.get('../data/amazon-data.json')
													.map( (resO: Response) => resO.json() );

		res.subscribe(
			function(res) {
				console.log(res)
			},
			function(err) {
				console.error(err)
			},
			function() {
				console.log("completed !!")
			}
		)
	}


}