import { Router } from '@angular/router';
import { LogInService } from './log-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  form!:FormGroup;
  constructor(private fb:FormBuilder, private LogInService:LogInService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })

  }

  logIn(){
    let email:string;
    let password:string;
    console.log('1');
    console.log(this.form.get('email'));
    if(true){
      email = this.form.get('email').value;
      password = this.form.get('password').value;
      sessionStorage.setItem("credentials ", email + ":" + password);
      console.log('respones')
      this.router.navigate(['patient'])

    }
    else{
      alert("Wrong email or password");
    }

  }

}

