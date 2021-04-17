import { ListofmypatientsService } from './../listofmypatients/listofmypatients.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-listoffreepatients',
  templateUrl: './listoffreepatients.component.html',
  styleUrls: ['./listoffreepatients.component.scss']
})
export class ListoffreepatientsComponent implements OnInit {

  constructor(private listofFreePatients: ListofmypatientsService) { }

  ListofFreePatients: Patient[] =[] ;
  ngOnInit(): void {
  }

  getListofFreePatients(){
    this.ListofFreePatients = [];
    this.listofFreePatients.getlistofpatients().subscribe(data =>{
      this.ListofFreePatients = data;
      console.log(this.listofFreePatients);
    });

  }

}
