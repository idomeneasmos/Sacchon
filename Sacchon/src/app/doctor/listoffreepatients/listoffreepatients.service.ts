import { ApiResult } from 'src/app/api-result';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'src/app/patient';

@Injectable({
  providedIn: 'root'
})
export class ListoffreepatientsService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1'

  getlistoffreepatients(): Observable<ApiResult<Patient[]>>{
    return this.http.get<ApiResult<Patient[]>>(
      `${this.baseUrl}/PatientWithNoCoResource`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )

  }
}
