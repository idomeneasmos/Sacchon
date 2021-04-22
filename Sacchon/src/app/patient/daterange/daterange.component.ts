import { Newconsultation } from './../../doctor/add-consultation/newconsultation/newconsultation';
import { DaterangeService } from './daterange.service';
import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { LogInService } from './../../log-in/log-in.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss']
})
export class DaterangeComponent implements OnInit {

  constructor(private fb: FormBuilder, private daterangeservice: DaterangeService, private router: Router, private app: AppComponent) { }

  form!: FormGroup;
  form1!: FormGroup;
  getavgglucose = false;
  getavgcarb = false;
  avggllv: Number;
  avgcarb: Number;
  getconsult:Newconsultation[];

  ngOnInit(): void {

    this.form = this.fb.group({
      from1: ["", Validators.required],
      to: ["", Validators.required]
    })
    this.form1 = this.fb.group({
      from1: ["", Validators.required],
      to: ["", Validators.required]
    })

  }

  getAvgGlucose(): void {
    this.getavgglucose = true;
    this.daterangeservice.getAvgGlucose(this.form).subscribe(data=>{
      this.avggllv=data.data;
    })
  }


  getAvgCarb(): void {
    this.getavgcarb = true;
    this.daterangeservice.getAvgCarbsIntake(this.form).subscribe(data=>{
      this.avgcarb=data.data;
    })
  }

  getmyConsultation(): void {
    this.getconsult=[]
    this.daterangeservice.getmyConsultations(this.form1).subscribe(data=>{
      this.getconsult=data.data;
      console.log(this.getconsult)
    })
  }

}
