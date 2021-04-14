import { Patient } from '../patient';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) {}

    private readonly baseURL= 'http://localhost:4200'

    getpatient():Observable<Patient[]>{
      return this.http.get<Patient[]>(
        '${this.baseURL}/patient'

      )

    }

  
}
