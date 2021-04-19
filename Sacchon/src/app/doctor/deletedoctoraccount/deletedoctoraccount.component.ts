import { Router } from '@angular/router';
import { DeletedoctoraccountService } from './deletedoctoraccount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedoctoraccount',
  templateUrl: './deletedoctoraccount.component.html',
  styleUrls: ['./deletedoctoraccount.component.scss']
})
export class DeletedoctoraccountComponent implements OnInit {

  constructor(private deleteaccount: DeletedoctoraccountService, private router: Router) { }

  account;

  ngOnInit(): void {
  }

  deleteAccount() {
    let id = '7';
    this.deleteaccount.deleteaccount(id)
      .subscribe(data => {
        this.account = this.account.filter(item => item.id !== id)
      });
    this.router.navigate(['home'])

  }

  gobacktopatient(): void {
    this.router.navigate(['patient']);
  }

}
