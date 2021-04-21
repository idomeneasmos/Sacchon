import { Router } from '@angular/router';
import { ListoffreepatientsService } from './listoffreepatients.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-listoffreepatients',
  templateUrl: './listoffreepatients.component.html',
  styleUrls: ['./listoffreepatients.component.scss']
})
export class ListoffreepatientsComponent implements OnInit {

  constructor(private listofFreePatients: ListoffreepatientsService, private router:Router) { }

  ListofFreePatients: Patient[];
  ngOnInit(): void {
  }

  getListofFreePatients(){
    this.ListofFreePatients = [];

    this.listofFreePatients.getlistoffreepatients().subscribe(data =>{
      this.ListofFreePatients = data.data;
      console.log(this.listofFreePatients);
    });

  }
  selectPatient(pat:Patient): void {
    sessionStorage.setItem("patient_id_of_this_doctor", String(pat.id));
    this.router.navigate(['add-consultation']);
  }

}
