import { FormGroup } from '@angular/forms';
import { Doctor } from 'src/app/doctor';
import { Patient } from 'src/app/patient';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Chief } from '../chief';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly baseUrl = 'http://localhost:9000/v1'
  params = new HttpParams();
  constructor(private http: HttpClient) {

  }

  responseOfAuth = new Subject<boolean>();

  authentication(kind: String, values: FormGroup): Observable<any> {
    let id = sessionStorage.getItem("id");
    this.params.set('email', values.get('email').value);
    this.params.append('password', values.get('password').value);
    this.responseOfAuth.next(true)
    if (kind == "patient") {
      return this.http.get<Patient>(
        `${this.baseUrl}/login/${kind}`
        
      )
    }
    else if (kind == "doctor") {
      return this.http.get<Doctor>(
        `${this.baseUrl}/login/${kind}`
      )
    }
    else {
      return this.http.get<Chief>(
        `${this.baseUrl}/login/${kind}`
      )
    }
  }
}

