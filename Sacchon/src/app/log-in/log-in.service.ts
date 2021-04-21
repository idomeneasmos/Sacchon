import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly baseUrl = 'http://localhost:9000/v1'

  constructor(private http: HttpClient) { }

  responseOfAuth = new Subject<boolean>();

  authentication(login: Login): Observable<number> {
    this.responseOfAuth.next(true)
    return this.http.post<number>(
      `${this.baseUrl}/login`,
      login
    )
  }
}