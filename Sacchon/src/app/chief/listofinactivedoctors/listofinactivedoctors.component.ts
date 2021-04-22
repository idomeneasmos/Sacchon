import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doctor } from './../../doctor';
import { Router } from '@angular/router';
import { ListofinactivedoctorsService } from './listofinactivedoctors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofinactivedoctors',
  templateUrl: './listofinactivedoctors.component.html',
  styleUrls: ['./listofinactivedoctors.component.scss']
})
export class ListofinactivedoctorsComponent implements OnInit {

  constructor(private fb: FormBuilder, private listofinactivedoctors:ListofinactivedoctorsService, private router:Router) { }
  
  doctors: Doctor[];
  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = this.fb.group({
      from1: ["", Validators.required],
      to: ["", Validators.required]
    })
  }

  getInactiveDoctors(){
    this.doctors=[];
    this.listofinactivedoctors.getinactivedoctors(this.form).subscribe(data=>{
      this.doctors=data.data;
      console.log(this.doctors)
    })

  }

  selectDoctor(): void {
    this.router.navigate(['doctorProfile']);
  }

}
