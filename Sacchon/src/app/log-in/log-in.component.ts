import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  form!:FormGroup;
  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]

    })

  }

  logIn(){
    let username:string;
    let password:string;
    
  }

}

