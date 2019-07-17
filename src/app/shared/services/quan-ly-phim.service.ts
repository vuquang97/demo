import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { apiPhim } from '../../constants/config';
import { catchError, tap } from 'rxjs/operators';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(
    private http: HttpClient,
    public location: Location
  ) {}

  getPhimAll(): Observable<any> {
  	// return of(this.http.get('http://5d2360494e05c600146efed1.mockapi.io/products'));
  	return this.http.get(apiPhim).pipe(
  		tap(res => console.log('get phim success'))
  	);
  }

  getPhimById(id: any): Observable<any> {
  	// return of(this.http.get('http://5d2360494e05c600146efed1.mockapi.io/products'));
  	return this.http.get(apiPhim + '/' + id).pipe(
  		tap(res => console.log('get phim : ', res))
  	);
  }

  addPhim(formValue: any): Observable<any> {
    return this.http.post(apiPhim, formValue);
  }

  updatePhimById(fromValue: any, id: any): Observable<any> {
    const idPhim = `${apiPhim}/${id}`
    return this.http.put(idPhim, fromValue, this.httpOptions);
  }

  deletePhim(id: any): Observable<any> {
    const idPhim = `${apiPhim}/${id}`
    return this.http.delete(idPhim).pipe(
      tap(res => console.log('delete : ' + id))
      );
  }

   public uploadImage(image: any): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return of(image);
  }
}
