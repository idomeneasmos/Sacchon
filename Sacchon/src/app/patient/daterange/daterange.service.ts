import { ApiResult } from './../../api-result';
import { FormGroup } from '@angular/forms';
import { Measurement } from 'src/app/measurement';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaterangeService {

  constructor(private http: HttpClient) { }

  private readonly baseURL = 'http://localhost:9000/v1'

  getAvgGlucose(values: FormGroup): Observable<ApiResult<Number>> {
    let id = sessionStorage.getItem("id");
    let params = new HttpParams()
      .set("patient_Id", id)
      .set("from1", values.get('from1').value)
      .set("to", values.get('to').value);
    return this.http.get<ApiResult<Number>>(
      `${this.baseURL}/PatientDataGlucoseLv`
      , { params: params, headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }

    )

  }
  getAvgCarbsIntake(values: FormGroup): Observable<ApiResult<Number>> {
    let id = sessionStorage.getItem("id");
    let params = new HttpParams()
      .set("patient_Id", id)
      .set("from1", values.get('from1').value)
      .set("to", values.get('to').value);
    return this.http.get<ApiResult<Number>>(
      `${this.baseURL}/PatientDataCarbsIntake`
      , { params: params, headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }

    )
  }
}
