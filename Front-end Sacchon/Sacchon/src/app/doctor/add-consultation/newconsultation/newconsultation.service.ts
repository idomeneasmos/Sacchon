import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Newconsultation } from './newconsultation';

@Injectable({
  providedIn: 'root'
})
export class NewconsultationService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1'

  addConsultation(consultation: Newconsultation): Observable<Newconsultation>{
    return this.http.post<Newconsultation>(
      `${this.baseUrl}/consultation`,
      consultation,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }
}
