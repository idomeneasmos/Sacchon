import { Doctor } from './../doctor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingUpDoctorService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1'

  adddoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(
      `${this.baseUrl}/doctor`,
      doctor
    )
  }

}
