import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  private readonly baseUrl='http://localhost:9000/v1';

  getdoctor():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(
      `${this.baseUrl}/doctor`,
      {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}
    )
  }

}

