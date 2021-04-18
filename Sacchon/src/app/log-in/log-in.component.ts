import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  password: string;
  username: string;
  constructor(private router: Router) {
    this.password = 'sup';
    this.username = 'sup';
  }

  searchUser(): void {
    this.router.navigate(['patient']);
  }
  ngOnInit(): void {
  }

}

