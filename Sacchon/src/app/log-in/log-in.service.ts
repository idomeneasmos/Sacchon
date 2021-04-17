import { Patient } from './../patient';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly baseUrl = 'http://localhost:4200'
  params = new HttpParams();
  constructor(private http: HttpClient) { }

  responseOfAuth = new Subject<boolean>();

  authentication(values: any): Observable<Patient> {
    this.responseOfAuth.next(true);
    this.params.append('email', values.get('Email').value);
    this.params.append('password', values.get('password').value);
    return this.http.get<any>(
      `${this.baseUrl}/log-in`
//      { params: this.params }
    )

  }

}



/*
authentication(values:any): string{
  return "OK";
  )
*/

