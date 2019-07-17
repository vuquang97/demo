import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUser } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class QlUserService {

	getAllUser(): Observable<any> {
		return this.http.get(apiUser);
	}

	getUserById(id: any): Observable<any> {
		return this.http.get(apiUser + '/' + id);
	}

	addUser(value: any): Observable<any> {
		return this.http.post(apiUser, value);
	}

	updateUser(id: any, value: any): Observable<any> {
		return this.http.put(apiUser + '/' + id, value);
	}

	deleteUser(id: any): Observable<any> {
		return this.http.delete(apiUser + '/' + id);
	}

  constructor(
  	public http: HttpClient
  ) { }
}
