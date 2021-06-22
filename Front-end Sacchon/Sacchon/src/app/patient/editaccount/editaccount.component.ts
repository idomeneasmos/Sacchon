import { DisplayprofileService } from './../displayprofile/displayprofile.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Patient } from 'src/app/patient';
import { Component, OnInit } from '@angular/core';
import { EditaccountService } from './editaccount.service';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {

  form!: FormGroup;
  Profile: Patient;
  patient: Patient;
  constructor(private fb: FormBuilder, private ProfileService: DisplayprofileService, private editaccountservice: EditaccountService, private router: Router) {
    this.getProfile();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ["",],
      email: ["",],
      password: ["",],
      gender: ["",],
      dateOfBirth: ["",],
      weight: ["",],
      height: ["",],
    })
  }

  getProfile() {
    this.ProfileService.getprofile().subscribe(data => {
      this.Profile = data;
    });
  }

 //want some more work
  checkvalues(): void {
    if (this.patient.fullName == null) {
      this.patient.fullName = this.Profile.fullName;
    }
    if (this.patient.email == null) {
      this.patient.email = this.Profile.email;
    }
    if (this.patient.password == null) {
      this.patient.password = this.Profile.password;
    }
    if (this.patient.gender == null) {
      this.patient.gender = this.Profile.gender;
    }
    if (this.patient.weight == null) {
      this.patient.weight = this.Profile.weight;
    }
    if (this.patient.height == null) {
      this.patient.height = this.Profile.height;
    }
  }

  onClickSubmit() {
    this.patient = this.form.value;

    this.patient.id = Number(sessionStorage.getItem("id"));
    this.editaccountservice.editaccount(this.patient).subscribe(data => {
      this.patient == data;
      console.log(data);
    }
    )
    this.router.navigate(['patient'])
  }

}
