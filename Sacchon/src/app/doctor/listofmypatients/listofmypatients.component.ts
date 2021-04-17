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

  constructor(private ListofmyPatients: ListofmypatientsService) { }

  Listofmypatients: Patient[] = [];

  ngOnInit(): void {
  }

  getListofmypatients(){
    this.Listofmypatients = [];
    this.ListofmyPatients.getlistofpatients().subscribe(data =>{
      this.Listofmypatients = data;
      console.log(this.ListofmyPatients);
    });
  }

}
