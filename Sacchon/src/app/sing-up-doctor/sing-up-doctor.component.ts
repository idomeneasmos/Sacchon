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
  constructor(private fb: FormBuilder, private SignupService: SingUpDoctorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Fullname: ["",],
      Password: ["",],
      Email: ["",],
      Speciality: ["",]
    })
  }


  onClickSubmit(){
    let doctor:Doctor = this.form.value;
    this.SignupService.adddoctor(doctor).subscribe( data =>{
        console.log(data);
        alert(data);
      }
    )

  }

}