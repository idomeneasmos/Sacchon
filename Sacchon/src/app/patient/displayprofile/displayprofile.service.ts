import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Patient } from 'src/app/patient';

@Injectable({
  providedIn: 'root'
})
export class DisplayprofileService {

  constructor(private http: HttpClient) { }

  private readonly baseURL = 'http://localhost:4200'

  getprofile(): Observable<Patient> {
    return this.http.get<Patient>(
      `${this.baseURL}/patient`,
      { headers: new HttpHeaders({ 'Authorization': 'Basic' + btoa(sessionStorage.getItem("credentials")) }) }

    )




  }


}
