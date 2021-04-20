import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { DeletedoctoraccountService } from './deletedoctoraccount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedoctoraccount',
  templateUrl: './deletedoctoraccount.component.html',
  styleUrls: ['./deletedoctoraccount.component.scss']
})
export class DeletedoctoraccountComponent implements OnInit {

  constructor(private deleteaccount: DeletedoctoraccountService, private router: Router, private app: AppComponent) { }

  account;

  ngOnInit(): void {
  }

  deleteAccount() {
    let id = sessionStorage.getItem("id");
    this.deleteaccount.deleteaccount(id)
      .subscribe(data => {
        this.account = this.account.filter(item => item.id !== id)
      });
      this.app.deleteaccount();
    this.router.navigate(['home'])

  }

  gobacktopatient(): void {
    this.router.navigate(['patient']);
  }

}
