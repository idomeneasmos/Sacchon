import { Router } from '@angular/router';
import { Measurement } from './../../measurement';
import { AddmeasurementService } from './addmeasurement.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      glucoseLv: ["",],
      carbsIntake: ["",],
      date: ["",]
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

      alert("Measurement added");
      console.log(this.form.get('date').value);
    }
    else {
      alert("Please enter values for all fields!");
    }
  }
}
