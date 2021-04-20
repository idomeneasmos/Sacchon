import { Patient } from './../../patient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofallpatientsService {

  private readonly baseUrl='http://localhost:9000/v1'
  constructor(private http:HttpClient) { }

  getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(
      `${this.baseUrl}/patient`,
      
      { headers: new HttpHeaders({ 'Authorization': 'Basic' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }

}
