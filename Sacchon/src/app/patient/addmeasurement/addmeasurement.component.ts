import { Router } from '@angular/router';
import { Measurement } from './../../measurement';
import { AddmeasurementService } from './addmeasurement.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      carbIntake: ["",],
      date: ["",]
    })
  }
  onClickSubmit(){
    let measurement:Measurement = this.form.value;
    measurement.patientsId=6;
    this.AddMeasurementService.addMeasurement(measurement).subscribe( data =>{
        console.log(data);
      }
    )
    this.router.navigate(['patient'])

  }

}
