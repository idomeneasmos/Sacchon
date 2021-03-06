import { Router } from '@angular/router';
import { Patient } from './../../patient';
import { DisplayprofileService } from './displayprofile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayprofile',
  templateUrl: './displayprofile.component.html',
  styleUrls: ['./displayprofile.component.scss']
})
export class DisplayprofileComponent implements OnInit {

  constructor(private router: Router, private ProfileService: DisplayprofileService) {
  }

  Profile: Patient;

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.ProfileService.getprofile().subscribe(data => {
      this.Profile = data;
    });
  }

  edit() {
    this.router.navigate(['editAccount']);
  }

  delete() {
    this.router.navigate(['deleteAccount']);
  }
}
