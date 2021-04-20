import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { LogInService } from './log-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  form!:FormGroup;
  constructor(private fb:FormBuilder, private LogInService:LogInService, private router:Router, private app:AppComponent) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      kind: ["", Validators.required]
    })
  }

  account;

  getId(): string{
    let id: string;

    let response = this.LogInService.authentication(this.form.get('kind').value , this.form).subscribe(data => {
      this.account = this.account.filter(item => item.id !== id)
    });
    id="6";

    return id;
  }

  logIn(){
    
    let email:string;
    let password:string;
    let kind= this.form.get('kind').value;
    let response = this.LogInService.authentication(kind , this.form);

   let id=this.getId();
    if(true){
      email = this.form.get('email').value;
      password = this.form.get('password').value;
      sessionStorage.setItem("credentials", email + ":" + password);
      sessionStorage.setItem("id", id);
      this.router.navigate([kind])
    }
    else{
      alert("Wrong email or password");
    }

  }

}

