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

  lineChartLabels: Label[] = ['11/5/2020', '12/5/2020', '13/5/2020', '14/5/2020', '15/5/2020', '15/5/2020'];

  lineChartOptions = {
    responsive: true, 
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#6ff9ff',
      backgroundColor: '#f44336',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line'; 

  lineChartData2: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Carbohydrates' },
  ];

  lineChartLabels2: Label[] = ['11/5/2020', '12/5/2020', '13/5/2020', '14/5/2020', '15/5/2020', '15/5/2020'];

  lineChartOptions2 = {
    responsive: true, 
  };

  lineChartColors2: Color[] = [
    {
      borderColor: '#6ff9ff',
      backgroundColor : '#fdd835',
    },
  ];

  lineChartLegend2 = true;
  lineChartPlugins2 = [];
  lineChartType2: ChartType = 'line'; 

}
