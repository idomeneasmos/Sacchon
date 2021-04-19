import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletedoctoraccountService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl='http://localhost:9000/v1/doctor'
 
  deleteaccount(id: String){
    return this.http.delete(this.baseUrl+'/'+id);
  }

}
