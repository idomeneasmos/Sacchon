import { Patient } from './../../patient';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteaccountService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1/patient'
 
  deleteaccount(id: String){
    return this.http.delete(this.baseUrl+'/'+id,
    { headers: new HttpHeaders({ 'Authorization': 'Basic' + btoa(sessionStorage.getItem("credentials")) }) }
    );
  }


}
