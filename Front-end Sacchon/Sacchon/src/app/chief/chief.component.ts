import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chief',
  templateUrl: './chief.component.html',
  styleUrls: ['./chief.component.scss']
})
export class ChiefComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
