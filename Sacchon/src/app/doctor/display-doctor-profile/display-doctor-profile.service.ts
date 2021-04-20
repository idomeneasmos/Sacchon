import { Doctor } from './../../doctor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayDoctorProfileService {

  constructor(private http: HttpClient) { }

  private readonly baseURL = 'http://localhost:9000/v1'

  getprofile(): Observable<Doctor> {
    let id = sessionStorage.getItem("id");
    return this.http.get<Doctor>(
      `${this.baseURL}/doctor/${id}`
     // { headers: new HttpHeaders({ 'Authorization': 'Basic' + btoa(sessionStorage.getItem("credentials")) }) }

    )




  }
}
