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

  constructor(private fb: FormBuilder, private LogInService: LogInService, private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      kind: ["", Validators.required]
    })
  }

  id: number;

  logIn() {

    let email: string;
    let password: string;
    let kind = this.form.get('kind').value;
    let login: Login = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.LogInService.authentication(login)
      .subscribe(data => {
        this.id = data;
        console.log(this.id)
      });
    console.log(this.id);
    if (this.id != null) {
      email = this.form.get('email').value;
      password = this.form.get('password').value;
      sessionStorage.setItem("credentials", email + ":" + password);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("id", String(this.id));
      this.router.navigate([kind])
    }
    else {
      console.log("Wrong email or password");
    }

  }

}

