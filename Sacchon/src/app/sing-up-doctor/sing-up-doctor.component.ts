import { Router } from '@angular/router';
import { SingUpDoctorService } from './sing-up-doctor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from './../doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up-doctor',
  templateUrl: './sing-up-doctor.component.html',
  styleUrls: ['./sing-up-doctor.component.scss']
})
export class SingUpDoctorComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private SignupService: SingUpDoctorService,  private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ["",],
      password: ["",],
      email: ["",],
      speciality: ["",]
    })
  }


  onClickSubmit(){
    let doctor:Doctor = this.form.value;
    doctor.active=true;
    this.SignupService.adddoctor(doctor).subscribe( data =>{
        console.log(data);
      }
    )
    this.router.navigate(['doctor'])

  }

}