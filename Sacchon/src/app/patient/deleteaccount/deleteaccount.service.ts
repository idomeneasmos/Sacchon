import { Patient } from './../../patient';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteaccountService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1'


  deleteaccount():void{

    this.http.delete<Patient>(
      `${this.baseUrl}/patient`,
      
    )

  }

}
