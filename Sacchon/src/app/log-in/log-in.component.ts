import { AppComponent } from './../app.component';
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
  constructor(private fb:FormBuilder, private LogInService:LogInService, private router:Router, private app:AppComponent) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  isauth(response):boolean{
    return true
  }
  kindofpage(values: any): String{

    
    return "";
  }

  logIn(){
    let email:string;
    let password:string;
    let response = this.LogInService.authentication(this.form.value);
    let kindOfPage = this.kindofpage(response);
    let id=19;
    if(true){
      this.app.setIsLogged();
      email = this.form.get('email').value;
      password = this.form.get('password').value;
      sessionStorage.setItem("credentials ", email + ":" + password);
      console.log(sessionStorage.getItem);
      this.router.navigate([kindOfPage + `${id}`])

    }
    else{
      alert("Wrong email or password");
    }

  }

}

