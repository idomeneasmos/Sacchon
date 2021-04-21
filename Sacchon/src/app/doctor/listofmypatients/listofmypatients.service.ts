import { ApiResult } from 'src/app/api-result';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/patient';

@Injectable({
  providedIn: 'root'
})
export class ListofmypatientsService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = 'http://localhost:9000/v1'

  getlistofpatients(id: string): Observable<ApiResult<Patient[]>> {
    let params=new HttpParams()
    .set("doctor_Id", id);
    console.log(params);
    return this.http.get<ApiResult<Patient[]>>(
      `${this.baseUrl}/PatientByDoctorResource`,
      { params: params, headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  };


}
