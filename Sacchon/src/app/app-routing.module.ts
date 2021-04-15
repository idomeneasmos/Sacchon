import { AddmeasurementComponent } from './patient/addmeasurement/addmeasurement.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpPatientComponent } from './sing-up-patient/sing-up-patient.component';
import { DoctorComponent } from './doctor/doctor.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpDoctorComponent } from './sing-up-doctor/sing-up-doctor.component';
import { AddConsultationComponent } from './doctor/add-consultation/add-consultation.component';

const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  { path: 'sing-up patient', component: SingUpPatientComponent  },
  { path: 'sing-up doctor', component: SingUpDoctorComponent  },
  { path: 'patient', component: PatientComponent  },
  { path: 'addmeasurement', component: AddmeasurementComponent  },
  { path: 'Home',  component: HomeComponent},
  { path: 'doctor',  component: DoctorComponent},
  { path: 'add-consultation',  component: AddConsultationComponent}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [SingUpPatientComponent, LogInComponent, PatientComponent, AddmeasurementComponent, DoctorComponent, AddConsultationComponent];
