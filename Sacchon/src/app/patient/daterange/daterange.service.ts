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
  params = new HttpParams();

  getAvgGlucose(values: FormGroup): Observable<Number> {
    let id = sessionStorage.getItem("id");
    this.params.set('patient_Id', id);
    this.params.append('from1', values.get('from1').value);
    this.params.append('to', values.get('to').value);
    return this.http.get<Number>(
      `${this.baseURL}/PatientsDataGlucoseLv`
      , { params: this.params, headers: new HttpHeaders({ 'Authorization': 'Basic' + btoa(sessionStorage.getItem("credentials")) }) }

    )




  }
}
