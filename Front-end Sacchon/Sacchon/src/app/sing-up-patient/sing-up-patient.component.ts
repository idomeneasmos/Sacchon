import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { Patient } from './../patient';
import { from } from 'rxjs';
import { SingUpPatientService } from './sing-up-patient.service';
import { SingUpDoctorComponent } from './../sing-up-doctor/sing-up-doctor.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up-patient',
  templateUrl: './sing-up-patient.component.html',
  styleUrls: ['./sing-up-patient.component.scss']
})
export class SingUpPatientComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private SignupService: SingUpPatientService,  private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      gender: ["",],
      dateOfBirth: ["",],
      weight: ["",],
      height: ["",],
    })
  }
  onClickSubmit(){
    let patient:Patient = this.form.value;
    patient.active=true;

    this.SignupService.addpatient(patient).subscribe( data =>{
        console.log(data);
      }
    )
    this.router.navigate(['log-in'])
  }

}
