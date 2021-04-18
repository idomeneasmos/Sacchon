import { Measurement } from 'src/app/measurement';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListofmeasurementsService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:4200/patient' + {headers: new HttpHeaders({'Authorization':'Basic' + btoa(sessionStorage.getItem("credentials"))})}

  getlistofmeasurements(): Observable<Measurement[]>{
    return this.http.get<Measurement[]>(
      `${this.baseUrl}/listofmeasurements`
    )

  }

}

