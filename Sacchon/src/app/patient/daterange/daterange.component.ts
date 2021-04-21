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
  getavgglucose = false;
  getavgcarb = false;
  avggllv: Number = 5;
  avgcarb: Number = 18;

  ngOnInit(): void {

    this.form = this.fb.group({
      from1: ["", [Validators.required, Validators.email]],
      to: ["", Validators.required]
    })


  }




  getAvgGlucose(): void {
    this.getavgglucose = true;
    this.daterangeservice.getAvgGlucose(this.form).subscribe(data=>{
      this.avggllv=data;
      console.log(this.avggllv)
    })
    console.log(this.getavgglucose);
  }


  getAvgCarb(): void {
    this.getavgcarb = true;
    console.log(this.getavgcarb);
  }

}
