import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addMeasurement(): void {
    this.router.navigate(['addmeasurement']);
  }
  seeMeasurement(): void {
    this.router.navigate(['patientmeasurements']);
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

}
