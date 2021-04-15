import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly baseUrl='http://localhost:4200'
  params = new HttpParams();
  constructor(private http:HttpClient) { }

  authentication(value:any): string{
    if(true){
      return "OK";

    }
/*
    this.params.append('username', values.get('username').value);
    this.params.append('password', values.get('password').value);
    return this.http.get<Doctor>(
      `${this.baseUrl}/doctor`,
      doctor.Id
      */
  }
}
