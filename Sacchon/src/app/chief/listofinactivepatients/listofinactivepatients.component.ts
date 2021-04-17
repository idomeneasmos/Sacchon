import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofinactivepatients',
  templateUrl: './listofinactivepatients.component.html',
  styleUrls: ['./listofinactivepatients.component.scss']
})
export class ListofinactivepatientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
