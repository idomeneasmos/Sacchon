import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, ChartsModule } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addConsultation(): void {
    this.router.navigate(['newconsultation']);
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
      backgroundColor : '#6ab7ff',
    },
  ];

  lineChartLegend2 = true;
  lineChartPlugins2 = [];
  lineChartType2: ChartType = 'line'; 
  
}
