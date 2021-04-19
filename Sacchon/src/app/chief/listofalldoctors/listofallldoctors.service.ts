import { Doctor } from './../../doctor';
import { Patient } from './../../patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListofallldoctorsService {

  private readonly baseUrl='http://localhost:9000/v1'
  constructor(private http:HttpClient) { }

  getDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(
      `${this.baseUrl}/doctor`
    )
  }

}