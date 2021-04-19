import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, ChartsModule } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientmeasurements',
  templateUrl: './patientmeasurements.component.html',
  styleUrls: ['./patientmeasurements.component.scss']
})
export class PatientmeasurementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Blood Glucose Level' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true, 
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#ef5350',
      backgroundColor: '#ffcdd2',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line'; 

  lineChartData2: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Carbohydrates' },
  ];

  lineChartLabels2: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions2 = {
    responsive: true, 
  };

  lineChartColors2: Color[] = [
    {
      borderColor: '#4fc3f7',
      backgroundColor : '#b3e5fc',
    },
  ];

  lineChartLegend2 = true;
  lineChartPlugins2 = [];
  lineChartType2: ChartType = 'line'; 

}
