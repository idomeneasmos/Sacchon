import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './../patient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingUpPatientService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:4200'


  addpatient(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>(
      `${this.baseUrl}/patient`,
      patient.Id
    )

  }
}