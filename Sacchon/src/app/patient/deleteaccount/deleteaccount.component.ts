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

  constructor(private deleteaccount:DeleteaccountService,  private router:Router) { }

  ngOnInit(): void {
  }

  deleteAccount(){
    this.deleteaccount.deleteaccount();    
    this.router.navigate(['home'])

  }


  gobacktopatient():void{
    this.router.navigate(['patient']);
  }

}
