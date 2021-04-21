import { from } from 'rxjs';
import { NewconsultationService } from './newconsultation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Newconsultation } from './newconsultation'
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-newconsultation',
  templateUrl: './newconsultation.component.html',
  styleUrls: ['./newconsultation.component.scss']
})
export class NewconsultationComponent implements OnInit {

  constructor(private NewconsultationService: NewconsultationService,  private router:Router) { }

  ngOnInit(): void {
  }

  addNewConsultation(consultation: string) {

    let newconsultation: Newconsultation = {
      description: consultation,
      date: new Date(),
      doctorId: Number(sessionStorage.getItem('id')),
      patientId: Number(sessionStorage.getItem("patient_id_of_this_doctor")) //ayto einai to id pou fernei o idomeneas
      
    }

    console.log(newconsultation);
    this.NewconsultationService.addConsultation(newconsultation).subscribe(data => { console.log(consultation)});

    alert("Consultation added");
  }
}

