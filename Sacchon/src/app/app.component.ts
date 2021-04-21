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
  email= sessionStorage.getItem("email");

  subscription: Subscription;

  constructor(private router: Router, private LogInService: LogInService) {sessionStorage.clear; }

  ngOnInit(): void {
    
    if (sessionStorage.getItem("credentials") == null) {
      this.isLogged = false;
      this.router.navigate(['log-in'])
    }
    else {
      this.isLogged = true;
      this.router.navigate(['patient'])
    }
    this.subscription = this.LogInService.responseOfAuth.subscribe(data => {
      this.isLogged = data;
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logOut() {
    sessionStorage.clear;
    this.isLogged = false;
    this.router.navigate(['log-in'])

  }
}


