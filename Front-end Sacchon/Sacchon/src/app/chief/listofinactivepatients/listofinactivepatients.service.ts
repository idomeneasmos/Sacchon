import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiResult } from './../../api-result';
import { Patient } from './../../patient';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofinactivepatientsService {
  
  private readonly baseUrl='http://localhost:9000/v1'
  
  constructor(private http:HttpClient) { }

  getinactivePatients(values: FormGroup):Observable<ApiResult<Patient[]>>{
    let params = new HttpParams()
      .set("from1", values.get('from1').value)
      .set("to", values.get('to').value);
    return this.http.get<ApiResult<Patient[]>>(
      `${this.baseUrl}/InactivePatientResource`
      , { params: params, headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }
}
