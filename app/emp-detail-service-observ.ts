import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmpDetailModal } from './emp-detail-modal';

@Injectable()
export class EmpDetailServiceObserv {

	constructor(private http: Http) {}

	extractData(res: Response) {
		return res.json();
	}

	getDetails(fileName): Observable<EmpDetailModal[]> {
		return this.http.get('../data/'+fileName).map(this.extractData);
	}

}