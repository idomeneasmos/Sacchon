import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthpicker',
  templateUrl: './monthpicker.component.html',
  styleUrls: ['./monthpicker.component.scss']
})
export class MonthpickerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addConsultation(): void {
    this.router.navigate(['newconsultation']);
  }

}
