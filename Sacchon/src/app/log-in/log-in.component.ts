import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
   password: string;
   username: string;
  constructor() {
    this.password = 'sup';
    this.username = 'sup';
   }

   searchUser(user: HTMLInputElement, pass: HTMLInputElement): void
   {
     alert(user.value + ' ,' + pass.value);
   }
  ngOnInit(): void {
  }

}

