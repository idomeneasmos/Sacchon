import { Patient } from './../../patient';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteaccountService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1/patient'
 
  deleteaccount(id: String){
    return this.http.delete(this.baseUrl+'/'+id);
  }

/*
  deleteaccount():void{
    this.http.delete(
      `${this.baseUrl}/patient/8`
    )

  }
*/
}
