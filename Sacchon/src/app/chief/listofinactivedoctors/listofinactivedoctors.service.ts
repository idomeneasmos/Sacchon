import { Doctor } from './../../doctor';
import { ApiResult } from './../../api-result';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofinactivedoctorsService {
  private readonly baseUrl='http://localhost:9000/v1'
  constructor(private http:HttpClient) { }

  getinactivedoctors():Observable<ApiResult<Doctor[]>>{
    return this.http.get<ApiResult<Doctor[]>>(
      `${this.baseUrl}/InactiveDoctorResource`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }

}
