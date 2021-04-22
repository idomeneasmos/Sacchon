import { Observable } from 'rxjs';
import { ApiResult } from './../../api-result';
import { Patient } from './../../patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofinactivepatientsService {
  
  private readonly baseUrl='http://localhost:9000/v1'
  
  constructor(private http:HttpClient) { }

  getinactivePatients():Observable<ApiResult<Patient[]>>{
    return this.http.get<ApiResult<Patient[]>>(
      `${this.baseUrl}/InactivePatientResource`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }
}
