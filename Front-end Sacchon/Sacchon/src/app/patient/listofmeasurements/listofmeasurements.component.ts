import { ListofmeasurementsService } from './listofmeasurements.service';
import { Component, OnInit } from '@angular/core';
import { Measurement } from 'src/app/measurement';

@Component({
  selector: 'app-listofmeasurements',
  templateUrl: './listofmeasurements.component.html',
  styleUrls: ['./listofmeasurements.component.scss']
})

export class ListofmeasurementsComponent implements OnInit {

  constructor(private Listofmeasurements: ListofmeasurementsService) { }

  Listofmeasurementss: Measurement[];

  ngOnInit(): void {
  }

  getListofmeasurementss(){
    this.Listofmeasurementss = [];
    this.Listofmeasurements.getlistofmeasurements().subscribe(data =>{
      this.Listofmeasurementss = data;
      console.log(this.Listofmeasurementss);
    });
  }

}
