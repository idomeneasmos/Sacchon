import { PatientService } from './Patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private PatientService: PatientService) {
    this.patients =[]
   }

  patients: Patient[];

  ngOnInit(): void {
  }

  getPatients(){
    this.patients = [];
    this.PatientService.getpatient().subscribe(data =>{
      this.patients = data;
      console.log(this.patients);

    });
  }

}
