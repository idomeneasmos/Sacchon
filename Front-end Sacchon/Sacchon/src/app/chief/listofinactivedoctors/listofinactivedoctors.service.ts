import { FormGroup } from '@angular/forms';
import { Doctor } from './../../doctor';
import { ApiResult } from './../../api-result';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofinactivedoctorsService {
  private readonly baseUrl='http://localhost:9000/v1'
  constructor(private http:HttpClient) { }

  getinactivedoctors(values: FormGroup):Observable<ApiResult<Doctor[]>>{
    let params = new HttpParams()
      .set("from1", values.get('from1').value)
      .set("to", values.get('to').value);
    return this.http.get<ApiResult<Doctor[]>>(
      `${this.baseUrl}/InactiveDoctorResource`
      , { params: params, headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }

}
