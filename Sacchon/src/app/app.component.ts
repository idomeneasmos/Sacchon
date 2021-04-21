import { Patient } from 'src/app/patient';
import { LogInService } from './log-in/log-in.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'myapp';
  isLogged: boolean;
  ispatient: boolean;
  isdoctor: boolean;
  ischief: boolean;
  email: string;
  kind: string;
  subscription: Subscription=new Subscription();

  constructor(private router: Router, private LogInService: LogInService) {
  }

  goToProfile():void{
    this.kind = sessionStorage.getItem("kind");
    this.router.navigate([this.kind]);
  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("email");
    this.kind = sessionStorage.getItem("kind");

    if (sessionStorage.getItem("credentials") == null) {
      this.isLogged = false;
      this.router.navigate(['log-in'])
    }
    else {
      this.isLogged = true;
      this.router.navigate([this.kind])
    }
    this.subscription.add(this.LogInService.responseOfAuth.subscribe(data => {
      this.isLogged = data;
    }))
    this.subscription.add(this.LogInService.responseoposthes.subscribe(data => {
      this.email = sessionStorage.getItem("email");
      this.kind = sessionStorage.getItem("kind");
    }))

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();

    }
  }

  logOut() {
    this.ispatient = false;
    this.isdoctor = false;
    this.ischief = false;
    sessionStorage.removeItem("credentials");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("kind");
    this.isLogged = false;
    this.router.navigate(['log-in'])

  }
}


