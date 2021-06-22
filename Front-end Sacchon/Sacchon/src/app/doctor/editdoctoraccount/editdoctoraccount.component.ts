import { DisplayDoctorProfileService } from './../display-doctor-profile/display-doctor-profile.service';
import { Doctor } from './../../doctor';
import { Router } from '@angular/router';
import { EditdoctoraccountService } from './editdoctoraccount.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editdoctoraccount',
  templateUrl: './editdoctoraccount.component.html',
  styleUrls: ['./editdoctoraccount.component.scss']
})
export class EditdoctoraccountComponent implements OnInit {


  form!: FormGroup;
  Profile: Doctor;
  Doctor: Doctor;
  constructor(private fb: FormBuilder,private displaydoctorsprofile:DisplayDoctorProfileService, private editdoctorsaccount: EditdoctoraccountService, private router: Router) {
    this.getProfile();
   }


  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ["",],
      password: ["",],
      email: ["",],
      speciality: ["",]
    })
  }
  
  getProfile() {
    this.displaydoctorsprofile.getprofile().subscribe(data => {
      this.Profile = data;
    });
  }

  onClickSubmit() {
    this.Doctor = this.form.value;
    this.Doctor.id = Number(sessionStorage.getItem("id"));

    this.editdoctorsaccount.editdoctor(this.Doctor).subscribe(data => {
      this.Doctor == data;
    })
    this.router.navigate(['doctor']);
  }
}
