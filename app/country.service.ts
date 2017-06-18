import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CountryModal } from './country.modal';

@Injectable()
export class CountryNameService {

	constructor(private http: Http) {}

	extractData(res: Response) {
		return res.json();
	}

	getCountryName(): Observable<CountryModal[]> {
		return this.http.get('./data/country.json').map(this.extractData)
	};
}