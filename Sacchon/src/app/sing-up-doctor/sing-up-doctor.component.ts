import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up-doctor',
  templateUrl: './sing-up-doctor.component.html',
  styleUrls: ['./sing-up-doctor.component.scss']
})
export class SingUpDoctorComponent implements OnInit {

  constructor() { }
  WriteDoctor(Dlastname: HTMLInputElement, Dfirstname: HTMLInputElement, Demail: HTMLInputElement,
  Dusername: HTMLInputElement, Dpass: HTMLInputElement, speciality: HTMLInputElement, validation: HTMLInputElement ): void
  {
    alert('sindethike');
  }

  ngOnInit(): void {
  }

}
