import { Patient } from './../patient';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly baseUrl='http://localhost:9000/v1'
  params = new HttpParams();
  constructor(private http: HttpClient) {
    
   }

  responseOfAuth = new Subject<boolean>();

  authentication(values: any): Observable<Patient> {
    this.params.set('email', values.get('email').value);
    this.params.append('password', values.get('password').value);
    return this.http.get<any>(
      `${this.baseUrl}/patient`,
      { params: this.params }
    )

  }


}



/*
authentication(values:any): string{
  return "OK";
  )
*/

