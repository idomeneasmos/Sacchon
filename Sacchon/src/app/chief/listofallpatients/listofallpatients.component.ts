import { ListofallpatientsService } from './listofallpatients.service';
import { Patient } from './../../patient';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofallpatients',
  templateUrl: './listofallpatients.component.html',
  styleUrls: ['./listofallpatients.component.scss']
})
export class ListofallpatientsComponent implements OnInit {

  constructor(private ListofallpatientsService:ListofallpatientsService, private router:Router) { }

  patients:Patient[];

  ngOnInit(): void {
  }

  getPatients(){
    this.patients=[];
    this.ListofallpatientsService.getPatients().subscribe(data=>{
      this.patients = data;
    })

  }

  selectPatient(): void {
    this.router.navigate(['my-patient']);
  }


}
