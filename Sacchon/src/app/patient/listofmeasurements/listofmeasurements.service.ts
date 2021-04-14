import { Listofmeasurements } from './Listofmeasurements';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListofmeasurementsService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:4200'

  getlistofmeasurements(): Observable<Listofmeasurements>{
    return this.http.get<Listofmeasurements[]>(
      '${this.baseUrl}/Listofmeasurements'
    )

  }
}

