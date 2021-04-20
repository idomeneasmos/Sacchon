import { Login } from './login';
import { Observable } from 'rxjs';
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

  form!: FormGroup;
  login: Login;
  constructor(private fb: FormBuilder, private LogInService: LogInService, private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      kind: ["", Validators.required]
    })
  }

  isAuth(): boolean {
    if (this.id != null) {
      return true;
    }
    else {
      return false;
    }
  }

  id: number;

  logIn() {

    let email: string;
    let password: string;
    let kind = this.form.get('kind').value;
    this.login.email = this.form.get('email').value;
    this.login.password = this.form.get('password').value;
    console.log(this.login.email);

    //this.login = this.form.value;
    this.LogInService.authentication(this.login)
      .subscribe(data => {
        this.id = data;
        //alert(this.id);
        console.log(data);
      })
    if (this.isAuth()) {
      email = this.form.get('email').value;
      password = this.form.get('password').value;
      sessionStorage.setItem("credentials", email + ":" + password);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("id", String(this.id));
      this.router.navigate([kind])
    }
    else {
      alert("Wrong email or password");
    }

  }

}

