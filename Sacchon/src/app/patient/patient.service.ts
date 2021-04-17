import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:4200';

  getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]>(
      `${this.baseUrl}/patient`,
      {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}
    )

  }
}
