import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up-patient',
  templateUrl: './sing-up-patient.component.html',
  styleUrls: ['./sing-up-patient.component.scss']
})
export class SingUpPatientComponent implements OnInit {

  constructor() { }

  WritePatient(Pfullname: HTMLInputElement, Pemail: HTMLInputElement , Ppass: HTMLInputElement,
  Pgender: HTMLSelectElement, Pdate: HTMLInputElement, Pweight: HTMLInputElement, Pheight: HTMLInputElement): void
  {
    alert('sindethike');
  }

  ngOnInit(): void {
  }

}
