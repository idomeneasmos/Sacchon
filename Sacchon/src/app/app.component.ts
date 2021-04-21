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
  email:String;
  kind: string;
  subscription: Subscription;

  constructor(private router: Router, private LogInService: LogInService) {
    //this.email= sessionStorage.getItem("email");
   }
   choosebuttons():void{
    
    if (this.kind=="patient"){
      this.ispatient=true;
      this.isdoctor=false;
      this.ischief=false;
    }
    else if (this.kind=="doctor"){
      this.ispatient=false;
      this.ischief=false;
      this.isdoctor=true;
    }
    else if (this.kind=="chief"){
      this.ispatient=false;
      this.isdoctor=false;
      this.ischief=true;
    }
    else{
      this.ispatient=false;
      this.isdoctor=false;
      this.ischief=false;
    }
   }

  ngOnInit(): void {
    this.email= sessionStorage.getItem("email");
    this.kind= sessionStorage.getItem("kind");
    this.choosebuttons();

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
    sessionStorage.setItem("credentials",null);
    sessionStorage.setItem("email", "");
    this.isLogged = false;
    this.router.navigate(['log-in'])

  }
}


