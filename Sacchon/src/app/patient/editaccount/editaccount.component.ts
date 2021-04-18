import { Router } from '@angular/router';
import { SingUpPatientService } from './../../sing-up-patient/sing-up-patient.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Patient } from 'src/app/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private SignupService: SingUpPatientService,  private router:Router) { }

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

  onClickSubmit(){
    let patient:Patient = this.form.value;
    patient.active=true;
    this.SignupService.addpatient(patient).subscribe( data =>{
        console.log(data);
      }
    )
    this.router.navigate(['patient'])
  }

}
