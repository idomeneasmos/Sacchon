import { Router } from '@angular/router';
import { EditdoctoraccountService } from './editdoctoraccount.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SingUpDoctorService } from 'src/app/sing-up-doctor/sing-up-doctor.service';
import { Doctor } from 'src/app/doctor';

@Component({
  selector: 'app-editdoctoraccount',
  templateUrl: './editdoctoraccount.component.html',
  styleUrls: ['./editdoctoraccount.component.scss']
})
export class EditdoctoraccountComponent implements OnInit {


  form!: FormGroup;
  constructor(private fb: FormBuilder, private editdoctorsaccount: EditdoctoraccountService, private router: Router) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ["",],
      password: ["",],
      email: ["",],
      speciality: ["",]
    })
  }

  onClickSubmit() {
    let doctor: Doctor = this.form.value;
    doctor.id = Number(sessionStorage.getItem("id"));

    this.editdoctorsaccount.editdoctor(doctor).subscribe(data => {
      doctor == data;
    })
    this.router.navigate(['doctor']);
  }
}
