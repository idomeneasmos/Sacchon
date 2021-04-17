import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofalldoctors',
  templateUrl: './listofalldoctors.component.html',
  styleUrls: ['./listofalldoctors.component.scss']
})
export class ListofalldoctorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectDoctor(): void {
    this.router.navigate(['doctorProfile']);
  }

}
