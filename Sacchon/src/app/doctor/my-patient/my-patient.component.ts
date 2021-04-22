import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, ChartsModule } from 'ng2-charts';
import { Router } from '@angular/router';

interface Consult {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.scss']
})
export class MyPatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addConsultation(): void {
    this.router.navigate(['newconsultation']);
  }

  viewConsultation(): void {
    
  }

  consults: Consult[] = [
    {value: 'steak-0', viewValue: 'Consultation 1'},
    {value: 'pizza-1', viewValue: 'Consultation 2'},
    {value: 'tacos-2', viewValue: 'Consultation 3'}
  ];

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Blood Glucose Level' },
  ];

  lineChartLabels: Label[] = ['11/5/2020', '12/5/2020', '13/5/2020', '14/5/2020', '15/5/2020', '15/5/2020'];

  lineChartOptions = {
    responsive: true, 
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#69F0AE',
      backgroundColor: '#FF5252',
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
      borderColor: '#18FFFF',
      backgroundColor : '#FFAB40',
    },
  ];

  lineChartLegend2 = true;
  lineChartPlugins2 = [];
  lineChartType2: ChartType = 'line'; 

}
