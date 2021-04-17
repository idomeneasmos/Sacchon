import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'src/app/patient';

@Injectable({
  providedIn: 'root'
})
export class ListoffreepatientsService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:4200'

  getlistoffreepatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(
      `${this.baseUrl}/Listofmypatients`
    )

  }
}
