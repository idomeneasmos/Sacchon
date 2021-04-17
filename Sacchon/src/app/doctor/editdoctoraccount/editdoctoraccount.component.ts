import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editdoctoraccount',
  templateUrl: './editdoctoraccount.component.html',
  styleUrls: ['./editdoctoraccount.component.scss']
})
export class EditdoctoraccountComponent implements OnInit {

  constructor() { }
  EditDoctor(Dfullname: HTMLInputElement, Demail: HTMLInputElement, Dpass: HTMLInputElement,
    speciality: HTMLInputElement): void
    {
      alert('Your changes saved');
    }

  ngOnInit(): void {
  }

}
