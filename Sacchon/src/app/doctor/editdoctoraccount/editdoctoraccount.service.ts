import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/doctor';


@Injectable({
  providedIn: 'root'
})
export class EditdoctoraccountService {

  private readonly baseUrl='http://localhost:4200';

  constructor(private http: HttpClient) { }

  adddoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(
      `${this.baseUrl}/doctor`,
      doctor.Id
    )
  }

}
