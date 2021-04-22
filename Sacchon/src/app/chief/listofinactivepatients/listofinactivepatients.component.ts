import { ListofinactivepatientsService } from './listofinactivepatients.service';
import { Patient } from './../../patient';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofinactivepatients',
  templateUrl: './listofinactivepatients.component.html',
  styleUrls: ['./listofinactivepatients.component.scss']
})
export class ListofinactivepatientsComponent implements OnInit {

  patients:Patient[];


  constructor(private listofinactivepatients: ListofinactivepatientsService , private router: Router) { }

  ngOnInit(): void {
  }

  getinactivePatients(){
    this.patients=[];
    this.listofinactivepatients.getinactivePatients().subscribe(data=>{
      this.patients = data.data;
    })
 

  }

  selectPatient(): void {
    this.router.navigate(['my-patient']);
  }
}
