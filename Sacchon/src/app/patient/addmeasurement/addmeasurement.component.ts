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
  constructor(private fb: FormBuilder, private AddMeasurementService: AddmeasurementService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      glucoseLevel: ["",],
      carbIntake: ["",],
      date: ["",]
    })
  }
  onClickSubmit(){
    let measurement:Measurement = this.form.value;
    this.AddMeasurementService.addMeasurement(measurement).subscribe( data =>{
        console.log(data);
        alert(data);
      }
    )

  }

}
