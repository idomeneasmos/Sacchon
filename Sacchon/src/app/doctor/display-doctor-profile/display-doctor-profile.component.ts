import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-doctor-profile',
  templateUrl: './display-doctor-profile.component.html',
  styleUrls: ['./display-doctor-profile.component.scss']
})
export class DisplayDoctorProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  edit(){
    this.router.navigate(['editdoctoraccount']);
  }

  delete(){
    this.router.navigate(['deletedoctoraccount']);
  }

}
