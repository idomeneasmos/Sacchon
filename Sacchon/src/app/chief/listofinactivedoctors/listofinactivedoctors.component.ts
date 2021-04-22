import { Doctor } from './../../doctor';
import { Router } from '@angular/router';
import { ListofinactivedoctorsService } from './listofinactivedoctors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofinactivedoctors',
  templateUrl: './listofinactivedoctors.component.html',
  styleUrls: ['./listofinactivedoctors.component.scss']
})
export class ListofinactivedoctorsComponent implements OnInit {

  constructor(private listofinactivedoctors:ListofinactivedoctorsService, private router:Router) { }
  
  doctors: Doctor[];
  
  ngOnInit(): void {
  }

  getDoctor(){
    this.doctors=[];
    this.listofinactivedoctors.getinactivedoctors().subscribe(data=>{
      this.doctors=data.data;
      console.log(this.doctors)
    })

  }

  selectDoctor(): void {
    this.router.navigate(['doctorProfile']);
  }

}
