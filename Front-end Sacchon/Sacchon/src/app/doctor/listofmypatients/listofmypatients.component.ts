import { Router } from '@angular/router';
import { ListofmypatientsService } from './listofmypatients.service';
import { ListofmeasurementsService } from './../../patient/listofmeasurements/listofmeasurements.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-listofmypatients',
  templateUrl: './listofmypatients.component.html',
  styleUrls: ['./listofmypatients.component.scss']
})
export class ListofmypatientsComponent implements OnInit {

  constructor(private ListofmyPatients: ListofmypatientsService, private router:Router) { }

  Listofmypatients: Patient[];

  ngOnInit(): void {
  }

  getmyPatients(){
    this.Listofmypatients = [];
    let id=sessionStorage.getItem("id");
    this.ListofmyPatients.getlistofpatients(id).subscribe(data =>{
      this.Listofmypatients = data.data;
    });
  }

  selectPatient(): void {
    this.router.navigate(['my-patient']);
  }

}
