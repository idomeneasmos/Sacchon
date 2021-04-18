import { Observable } from 'rxjs';
import { Measurement } from './../../measurement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddmeasurementService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1'

  addMeasurement(measurement: Measurement): Observable<Measurement>{
    return this.http.post<Measurement>(
      `${this.baseUrl}/patientsData`,
      measurement
    )

  }
  
}
