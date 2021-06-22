import { Patient } from 'src/app/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EditaccountService {


  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1/patient'


  editaccount(patient:Patient):Observable<Patient>{

    return this.http.put<Patient>(this.baseUrl+'/'+patient.id ,
      patient,
      { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem("credentials")) }) }
      )
      
  }
}
