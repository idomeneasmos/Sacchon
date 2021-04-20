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

  constructor(private fb:FormBuilder, private daterangeservice:DaterangeService, private router:Router, private app:AppComponent) { }

  form!:FormGroup;

  ngOnInit(): void {

    this.form = this.fb.group({
      from1: ["", [Validators.required, Validators.email]],
      to: ["", Validators.required]
    })

  }


  getavgglucose=false;
  getavgcarb=false;
  avggllv=5;
  avgcarb=18;

  getAvgGlucose(): void{
    this.getavgglucose=true;
    console.log(this.avggllv);
  }


  getAvgCarb(): void{
    this.getavgcarb=true;
    console.log(this.avgcarb);
  }

}
