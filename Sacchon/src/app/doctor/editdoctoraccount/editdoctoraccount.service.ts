import { Doctor } from './../../doctor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditdoctoraccountService {

  private readonly baseUrl='http://localhost:9000/v1/doctor'

  constructor(private http: HttpClient) {

   }

  editdoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.put<Doctor>(this.baseUrl+'/'+doctor.id ,
      doctor,
      { headers: new HttpHeaders({ 'Authorization': 'Basic' + btoa(sessionStorage.getItem("credentials")) }) }
    )
  }

}
