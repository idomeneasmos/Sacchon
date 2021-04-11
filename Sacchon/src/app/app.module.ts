import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpDoctorComponent } from './sing-up-doctor/sing-up-doctor.component';
import { SingUpPatientComponent } from './sing-up-patient/sing-up-patient.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SingUpDoctorComponent,
    SingUpPatientComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
