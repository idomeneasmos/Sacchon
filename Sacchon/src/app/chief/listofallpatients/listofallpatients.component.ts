import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofallpatients',
  templateUrl: './listofallpatients.component.html',
  styleUrls: ['./listofallpatients.component.scss']
})
export class ListofallpatientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPatient(): void {
    this.router.navigate(['my-patient']);
  }


}
