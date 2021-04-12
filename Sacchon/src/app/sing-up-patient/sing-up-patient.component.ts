import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up-patient',
  templateUrl: './sing-up-patient.component.html',
  styleUrls: ['./sing-up-patient.component.scss']
})
export class SingUpPatientComponent implements OnInit {

  constructor() { }

  WritePatient(Plastname: HTMLInputElement, Pfirstname: HTMLInputElement , Pemail: HTMLInputElement,
  nPusername: HTMLInputElement, Ppass: HTMLInputElement): void
  {
    alert('sindethike');
  }

  ngOnInit(): void {
  }

}
