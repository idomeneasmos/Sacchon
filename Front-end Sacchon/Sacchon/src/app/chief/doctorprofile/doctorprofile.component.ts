import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.scss']
})
export class DoctorprofileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
}
export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Patient1', name: 'Hydrogen'},
  {position: 'Patient2', name: 'Helium'},
  {position: 'Patient3', name: 'Lithium'},
  {position: 'Patient4', name: 'Beryllium'},
  {position: 'Patient5', name: 'Boron'},
  {position: 'Patient6', name: 'Carbon'},
  {position: 'Patient7', name: 'Nitrogen'},
  {position: 'Patient8', name: 'Oxygen'},
  {position: 'Patient9', name: 'Fluorine'},
  {position: 'Patient10', name: 'Neon'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
