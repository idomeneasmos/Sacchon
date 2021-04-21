import { NewconsultationService } from './newconsultation.service';
import { Component, OnInit } from '@angular/core';
import { Newconsultation } from './newconsultation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newconsultation',
  templateUrl: './newconsultation.component.html',
  styleUrls: ['./newconsultation.component.scss']
})
export class NewconsultationComponent implements OnInit {

  constructor(private NewconsultationService: NewconsultationService,  private router:Router) { }

  ngOnInit(): void {
  }

  addNewConsultation(consultation: string){

    let newconsultation:Newconsultation = {

      description: consultation,
      date: consultation.get('date').value,
      doctorId: Number(sessionStorage.getItem('id')),
      patientId: 1
    }
    console.log(measurement);
    this.AddMeasurementService.addMeasurement(measurement).subscribe(data => { console.log(data)});

    alert("Measurement added");
    console.log(this.form.get('date').value);
    //this.router.navigate(['patientprofile/addmeasurement']);
  
  }

  
    

}
