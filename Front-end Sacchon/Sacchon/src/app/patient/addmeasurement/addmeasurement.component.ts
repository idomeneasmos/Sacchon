import { Router } from '@angular/router';
import { Measurement } from './../../measurement';
import { AddmeasurementService } from './addmeasurement.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-addmeasurement',
  templateUrl: './addmeasurement.component.html',
  styleUrls: ['./addmeasurement.component.scss']
})
export class AddmeasurementComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private AddMeasurementService: AddmeasurementService,  private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      glucoseLv: ["", Validators.required],
      carbsIntake: ["", Validators.required],
      date: ["", Validators.required]
    })
  }
  onClickSubmit(){
    if(this.form.valid) {
      let measurement:Measurement = {
        glucoseLv: this.form.get('glucoseLv').value,
        carbsIntake: this.form.get('carbsIntake').value,
        date: this.form.get('date').value,
        patientId: Number(sessionStorage.getItem('id'))
      }
      console.log(measurement);
      this.AddMeasurementService.addMeasurement(measurement).subscribe(data => { console.log(data)});
      
      this.router.navigate(['patient']);
    }
    else {
      alert("Please enter values for all fields!");
    }
  }
}
