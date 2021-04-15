import { Patient } from './../patient';
import { from } from 'rxjs';
import { SingUpPatientService } from './sing-up-patient.service';
import { SingUpDoctorComponent } from './../sing-up-doctor/sing-up-doctor.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sing-up-patient',
  templateUrl: './sing-up-patient.component.html',
  styleUrls: ['./sing-up-patient.component.scss']
})
export class SingUpPatientComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private SignupService: SingUpPatientService) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      Fullname: ["",],
      Email: ["",],
      Password: ["",],
      Gender: ["",],
      DateOfBirth: ["",],
      Weight: ["",],
      Height: ["",],
    })
  }
  onClickSubmit(){
    let patient:Patient = this.form.value;
    this.SignupService.addpatient(patient).subscribe( data =>{
        console.log(data);
        alert(data);
      }
    )

  }
}
