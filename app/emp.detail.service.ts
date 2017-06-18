import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class EmpDetailService {

	constructor(private http: Http) {}

	fetchData() {
		return this.http.get("./data/emp-details.json").map(
			(res) => res.json()
		);
	}

} 