import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up-doctor',
  templateUrl: './sing-up-doctor.component.html',
  styleUrls: ['./sing-up-doctor.component.scss']
})
export class SingUpDoctorComponent implements OnInit {

  constructor() { }
  WriteDoctor(Dfullname: HTMLInputElement, Demail: HTMLInputElement, Dpass: HTMLInputElement,
  speciality: HTMLInputElement): void
  {
    alert('...');
  }

  ngOnInit(): void {
  }

}
