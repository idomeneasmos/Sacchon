import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListofinactivepatientsService } from './listofinactivepatients.service';
import { Patient } from './../../patient';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofinactivepatients',
  templateUrl: './listofinactivepatients.component.html',
  styleUrls: ['./listofinactivepatients.component.scss']
})
export class ListofinactivepatientsComponent implements OnInit {

  patients:Patient[];
  form!: FormGroup;

  

  constructor(private fb: FormBuilder, private listofinactivepatients: ListofinactivepatientsService , private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      from1: ["", Validators.required],
      to: ["", Validators.required]
    })
  }

  getinactivePatients(){
    this.patients=[];
    this.listofinactivepatients.getinactivePatients(this.form).subscribe(data=>{
      this.patients = data.data;
      console.log(this.patients)
    })
 

  }

  selectPatient(): void {
    this.router.navigate(['my-patient']);
  }
}
