import { ListofmeasurementsService } from './listofmeasurements.service';
import { Component, OnInit } from '@angular/core';
import { Listofmeasurements } from './Listofmeasurements';

@Component({
  selector: 'app-listofmeasurements',
  templateUrl: './listofmeasurements.component.html',
  styleUrls: ['./listofmeasurements.component.scss']
})
export class ListofmeasurementsComponent implements OnInit {

  constructor(private Listofmeasurements: ListofmeasurementsService) {
    this.Listofmeasurementss = [];
   }

  Listofmeasurementss: Listofmeasurements[];

  ngOnInit(): void {
  }

  getListofmeasurementss(){
    this.Listofmeasurementss = [];
    this.Listofmeasurementss.getlistofmeasurements().subscribe(data =>{
      this.Listofmeasurementss = data;
      console.log(this.Listofmeasurementss);
    });
  }

}
