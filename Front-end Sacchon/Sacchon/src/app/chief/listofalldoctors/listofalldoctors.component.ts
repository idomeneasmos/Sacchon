import { Doctor } from './../../doctor';
import { ListofallldoctorsService } from './listofallldoctors.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofalldoctors',
  templateUrl: './listofalldoctors.component.html',
  styleUrls: ['./listofalldoctors.component.scss']
})
export class ListofalldoctorsComponent implements OnInit {

  constructor(private router: Router, private listofalldoctors:ListofallldoctorsService) { }

  doctors:Doctor[];
  ngOnInit(): void {
  }

  getDoctor(){
    this.doctors=[];
    this.listofalldoctors.getDoctors().subscribe(data=>{
      this.doctors=data.data;
    })

  }

  selectDoctor(): void {
    this.router.navigate(['doctorProfile']);
  }

}
