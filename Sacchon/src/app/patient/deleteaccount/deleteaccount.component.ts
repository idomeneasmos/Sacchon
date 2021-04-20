import { AppComponent } from './../../app.component';
import { DeleteaccountService } from './deleteaccount.service';
import { SingUpPatientService } from './../../sing-up-patient/sing-up-patient.service';
import { Patient } from 'src/app/patient';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.scss']
})
export class DeleteaccountComponent implements OnInit {

  constructor(private deleteaccount: DeleteaccountService, private router: Router, private app: AppComponent) { }

  account;
  ngOnInit(): void {
  }

  deleteAccount() {
    let id = sessionStorage.getItem("id");

    this.deleteaccount.deleteaccount(id)
      .subscribe(data => {
        this.account = this.account.filter(item => item.id !== id)
      });
    this.app.logOut();


  }

  gobacktopatient(): void {
    this.router.navigate(['patient']);
  }

}
