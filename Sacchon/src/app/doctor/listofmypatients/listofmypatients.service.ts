import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/patient';

@Injectable({
  providedIn: 'root'
})
export class ListofmypatientsService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:4200'

  getlistofpatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(
      `${this.baseUrl}/Listofmypatients`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )

  }

}
